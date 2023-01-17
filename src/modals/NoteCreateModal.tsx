import React from "react";
// import uuid from "react-uuid";
import { useParams } from "react-router-dom";
import { ModalCover } from "modals";
import { modalTypes, labelTypes } from "types";
import { useAppDispatch } from "hooks/storeHook";
import { useAlert, useBtnClick } from "hooks";
import { createNote, updateNote } from "store/noteSlice/sliceGetters";

interface NoteModalProps extends modalTypes {
  type: string;
  note?: any;
}

const NoteCreateModal = ({
  showModal,
  toggleModal,
  type = "create",
  note = {},
}: NoteModalProps) => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const handleClick = useBtnClick(btnRef.current);

  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [theme, setTheme] = React.useState<string>("red");
  const [labels, setLabels] = React.useState<labelTypes[]>([]);
  const [alert, setAlert] = useAlert();

  /* Checking if the note object is not empty. If it is not empty, it sets the title, content, theme, and
labels state with the values from the note object. */
  React.useEffect(() => {
    if (Object.keys(note).length) {
      setTitle(note.title);
      setContent(note.content);
      setTheme(note.theme);
      setLabels(note.labels);
    }
  }, [note]);

  /* Checking if the title, content, theme, and labels are not empty. If they are not empty, it sets the
 isDisabled state to false. */
  React.useEffect(() => {
    setIsDisabled(title && content && theme && labels.length ? false : true);
  }, [title, content, theme, labels]);

  /**
   * It adds a new label to the labels array.
   */
  const addLabel = () => {
    setLabels([...labels, { title: "Title", color: "red" }]);
  };

  /**
   * RemoveLabel is a function that takes an index and returns a function that filters the labels array
   * and returns a new array with the label at the given index removed.
   * @param {number} index - number - the index of the label to remove
   */
  const removeLabel = (index: number) => {
    setLabels(labels.filter((_, i) => i !== index));
  };

  /**
   * It takes in an id, a value, and a type, and then updates the labels state with the new value
   * @param {number} id - The id of the label that is being updated.
   * @param {string} value - The value of the input field
   * @param {string} type - string - this is the type of the input field. It can be either "title" or "color".
   */
  const updateLabelState = (id: number, value: string, type: string) => {
    let updated_labels = [...labels];

    //@ts-ignore
    type === "title"
      ? (updated_labels[id].title = value)
      : (updated_labels[id].color = value);

    //@ts-ignore
    setLabels(updated_labels);
  };

  const getNoteAction = (payload: any) => {
    return type === "create" ? createNote(payload) : updateNote(payload);
  };

  const manageNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleClick("Please wait...");

    let notePayload = {
      id: type === "create" ? (params.project_id as string) : note.id,
      title,
      content,
      theme,
      labels,
    };

    try {
      let response = await dispatch(getNoteAction(notePayload)).unwrap();
      handleClick(`${type === "create" ? "Create" : "Update"} Note`, false);

      if ([200, 201].includes(response.code)) {
        setAlert(
          `Note ${type === "create" ? "created" : "updated"} successfully!`,
          "success"
        );
        setTimeout(() => toggleModal(), 500);
      } else {
        setAlert(
          `Note ${type === "create" ? "creation" : "update"} failed!`,
          "error"
        );
      }
    } catch (err) {
      setAlert("An error occured while creating note", "error");
      handleClick(`${type === "create" ? "Create" : "Update"} Note`, false);
      console.log(err);
    }
  };

  return (
    <ModalCover showModal={showModal} toggleModal={toggleModal}>
      {/* MODAL HEADER */}
      <ModalCover.Slot name="header">
        <div className="modal-cover-header">
          <div className="modal-cover-title">
            {type === "create" ? "CREATE" : "UPDATE"} NOTE
          </div>
        </div>
      </ModalCover.Slot>

      {/* MODAL BODY */}
      <ModalCover.Slot name="body">
        <form action="" onSubmit={manageNote}>
          <div className="modal-cover-body pt-0">
            {/* ALERT SECTION */}
            {alert.message && (
              <div
                className={`alert-section mgb-10 pd-10 rounded-5 color-black box-shadow-effect smooth-transition fw-600 f-size-14 color-${
                  alert.status === "error" ? "red" : "green"
                }-light-bg`}
              >
                {alert.message}
              </div>
            )}

            {/* NOTE TITLE BLOCK */}
            <div className="mgb-14">
              <label htmlFor="noteTitle" className="control-label">
                Title
              </label>

              <input
                type="text"
                name="noteTitle"
                id="noteTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                placeholder="Note title..."
              />
            </div>

            {/* NOTE CONTENT BLOCK */}
            <div className="mgb-14">
              <label htmlFor="noteContent" className="control-label">
                Content
              </label>

              <textarea
                id="noteContent"
                className="form-control"
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Note content..."
              ></textarea>
            </div>

            {/* THEME COLOR */}
            <div className="mgb-14">
              <label htmlFor="noteTheme" className="control-label">
                Note Theme
              </label>

              <select
                name=""
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                id="noteTheme"
                className="form-control"
              >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="brown">Brown</option>
              </select>
            </div>

            {/* LABEL CONTENT BLOCK */}
            <div className="mgb-9">
              {labels?.map((label, index) => (
                <div className="label-row mgb-5" key={index}>
                  <div className="left">
                    {index === 0 && (
                      <label htmlFor="labelTitle" className="control-label">
                        Label
                      </label>
                    )}

                    <input
                      type="text"
                      name=""
                      id="labelTitle"
                      className="form-control"
                      placeholder="Task label title..."
                      value={label.title}
                      onChange={(e) =>
                        updateLabelState(index, e.target.value, "title")
                      }
                    />
                  </div>

                  <div className="right">
                    {index === 0 && (
                      <label htmlFor="labelColor" className="control-label">
                        Color
                      </label>
                    )}

                    <select
                      name=""
                      id="labelColor"
                      className="form-control"
                      value={label.color}
                      onChange={(e) =>
                        updateLabelState(index, e.target.value, "color")
                      }
                    >
                      <option value="">Select color</option>
                      <option value="red">Red</option>
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                      <option value="brown">Brown</option>
                    </select>
                  </div>

                  {/* REMOVE LABEL */}
                  {index !== 0 && (
                    <div
                      className="remove-item border rounded-4 pointer smooth-transition"
                      onClick={() => removeLabel(index)}
                    >
                      <div className="icon icon-trash smooth-transition"></div>
                    </div>
                  )}
                </div>
              ))}

              <div className="add-label-row pointer mgt-14" onClick={addLabel}>
                <div className="circle rounded-circle mgr-10">
                  <div className="icon icon-plus"></div>
                </div>

                <div className="text color-grey fw-600">Add task label</div>
              </div>
            </div>
          </div>

          <div className="modal-cover-footer pt-0 mgb-5">
            <button
              type="submit"
              disabled={isDisabled}
              ref={btnRef}
              className="btn btn-green w-100 pdy-13"
            >
              {type === "create" ? "Create" : "Update"} Note
            </button>
          </div>
        </form>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default NoteCreateModal;

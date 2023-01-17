import React from "react";
import { useParams } from "react-router-dom";
import { ModalCover } from "modals";
import { modalTypes, labelTypes } from "types";
import { useAppDispatch } from "hooks/storeHook";
import { useAlert, useBtnClick } from "hooks";
import { createTodo, updateTodo } from "store/todoSlice/sliceGetters";

interface TodoCreateType extends modalTypes {
  category: string;
  type: string;
  todo?: any;
}

const TodoCreateModal = ({
  showModal,
  toggleModal,
  category,
  type = "create",
  todo = {},
}: TodoCreateType) => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const handleClick = useBtnClick(btnRef.current);

  const [content, setContent] = React.useState<string>("");
  const [labels, setLabels] = React.useState<labelTypes[]>([]);
  const [alert, setAlert] = useAlert();

  React.useEffect(() => {
    setIsDisabled(content && labels.length ? false : true);
  }, [content, labels]);

  /**
   * It adds a new label to the labels array.
   */
  const addLabel = () => {
    setLabels([...labels, { title: "Title", color: "red" }]);
  };

  const removeLabel = (index: number) => {
    setLabels(labels.filter((_, i) => i !== index));
  };

  const updateLabelState = (id: number, value: string, type: string) => {
    let updated_labels = [...labels];

    type === "title"
      ? (updated_labels[id].title = value)
      : (updated_labels[id].color = value);

    setLabels(updated_labels);
  };

  const getTodoAction = (payload: any) => {
    return type === "create" ? createTodo(payload) : updateTodo(payload);
  };

  const manageTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleClick("Please wait...");

    let todoPayload = {
      id: type === "create" ? (params.project_id as string) : todo.id,
      content,
      category,
      labels,
    };

    try {
      let response = await dispatch(getTodoAction(todoPayload)).unwrap();
      handleClick(`${type === "create" ? "Create" : "Update"} Todo`, false);

      if ([200, 201].includes(response.code)) {
        setAlert(
          `Todo ${type === "create" ? "created" : "updated"} successfully!`,
          "success"
        );
        setTimeout(() => toggleModal(), 500);
      } else {
        setAlert(
          `Todo ${type === "create" ? "creation" : "update"} failed!`,
          "error"
        );
      }
    } catch (err) {
      setAlert("An error occured while creating todo", "error");
      handleClick(`${type === "create" ? "Create" : "Update"} Todo`, false);
      console.log(err);
    }
  };

  return (
    <ModalCover showModal={showModal} toggleModal={toggleModal}>
      {/* MODAL HEADER */}
      <ModalCover.Slot name="header">
        <div className="modal-cover-header">
          <div className="modal-cover-title text-uppercase">
            {category} Task
          </div>
        </div>
      </ModalCover.Slot>

      {/* MODAL BODY */}
      <ModalCover.Slot name="body">
        <form action="" onSubmit={manageTodo}>
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

            {/* TASK CONTENT BLOCK */}
            <div className="mgb-14">
              <label htmlFor="task" className="control-label">
                Task
              </label>

              <textarea
                id="task"
                className="form-control"
                rows={5}
                placeholder="Task content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
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
              Create Todo
            </button>
          </div>
        </form>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default TodoCreateModal;

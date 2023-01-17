import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/storeHook";
import { $serviceUtils as $utlis } from "services";
import { useBtnClick } from "hooks";
import { createProject, updateProject } from "store/projectSlice/sliceGetters";
import { ModalCover } from "modals";
import { modalTypes } from "types";

interface ProjectModalProps extends modalTypes {
  create?: boolean;
  data?: any;
}

const ProjectCreateModal = ({
  create = true,
  data,
  showModal,
  toggleModal,
}: ProjectModalProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const handleClick = useBtnClick(btnRef.current);

  const [id, setId] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (data?.id) {
      setId(data?.id);
      setTitle(data?.title);
      setDescription(data?.description);
    }
  }, [data]);

  React.useEffect(() => {
    setIsDisabled(title ? false : true);
  }, [title]);

  const manageProject = async () => {
    handleClick("Please wait...");
    create
      ? createMyProject({ title, description })
      : updateMyProject({ id, title, description });
  };

  const createMyProject = async (payload: any) => {
    try {
      let response = await dispatch(createProject(payload)).unwrap();

      if (response.code === 201) {
        handleClick("Create Project", false);
        $utlis.emitter.emit("loadProjectSidebar");

        setTimeout(() => {
          navigate(`/project/${response.data.id}?title=${response.data.title}`);
        }, 1200);
      } else {
        handleClick("Project Failed", false);
        setTimeout(() => handleClick("Create Project", false), 1200);
      }
    } catch (err) {
      handleClick("Create Project", false);
      console.log(err);
    }
  };

  const updateMyProject = async (payload: any) => {
    try {
      let response = await dispatch(updateProject(payload)).unwrap();

      if (response.code === 200) {
        handleClick("Update Project", false);
        $utlis.emitter.emit("loadProjectSidebar");
        dispatch(updateProject(response.data));
        setTimeout(() => toggleModal(), 1200);
      } else {
        handleClick("Project Failed", false);
        setTimeout(() => handleClick("Update Project", false), 1200);
      }
    } catch (err) {
      handleClick("Update Project", false);
      console.log(err);
    }
  };

  return (
    <ModalCover showModal={showModal} toggleModal={toggleModal}>
      {/* MODAL HEADER */}
      <ModalCover.Slot name="header">
        <div className="modal-cover-header">
          <div className="modal-cover-title">
            {create ? "CREATE" : "UPDATE"} PROJECT
          </div>
        </div>
      </ModalCover.Slot>

      {/* MODAL BODY */}
      <ModalCover.Slot name="body">
        <div className="modal-cover-body pt-0">
          {/* TASK CONTENT BLOCK */}
          <div className="mgb-14">
            <label htmlFor="projectTitle" className="control-label">
              Project Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Project title..."
            />
          </div>

          <div className="mgb-14">
            <label htmlFor="projectDescription" className="control-label">
              Project Description (Optional)
            </label>

            <textarea
              id="projectDescription"
              className="form-control"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Project description ..."
            ></textarea>
          </div>
        </div>
      </ModalCover.Slot>

      {/* MODAL FOOTER */}
      <ModalCover.Slot name="footer">
        <div className="modal-cover-footer pt-0 mgb-5">
          <button
            className="btn btn-green w-100 pdy-13"
            disabled={isDisabled}
            ref={btnRef}
            onClick={manageProject}
          >
            {create ? "Create" : "Update"} Project
          </button>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default ProjectCreateModal;

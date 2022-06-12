import React from "react";
import { useToggle } from "hooks";
import { useAppDispatch } from "hooks/storeHook";
import { toggleSidebar } from "store/generalSlice/sliceGetters";
import { ProjectCreateModal } from "modals";

import "./SideNewProject.scss";

const SideNewProject = () => {
  const dispatch = useAppDispatch();
  const [isProjectOpen, setIsProjectOpen] = useToggle();

  const toggleProjectModal = React.useCallback(() => {
    // MOBILE
    if (window.innerWidth <= 768) {
      if (isProjectOpen) setIsProjectOpen();
      else {
        dispatch(toggleSidebar());
        setIsProjectOpen();
      }
    }
    // PC
    else setIsProjectOpen();
  }, [isProjectOpen, dispatch, setIsProjectOpen]);

  return (
    <>
      <div className="new-project">
        <div className="wrapper position-relative rounded-10">
          {/* TOP */}
          <div className="top mgb-5 color-white">
            Let's help you organize your project's todos and notes efficiently!
          </div>

          {/* BOTTOM */}
          <div
            className="bottom rounded-7 pointer"
            onClick={toggleProjectModal}
          >
            <div className="add-btn rounded-7 mgr-10">
              <div className="icon-plus place-center"></div>
            </div>

            <div className="add-text fw-600 color-white">
              Create new project
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <ProjectCreateModal
        showModal={isProjectOpen}
        toggleModal={toggleProjectModal}
      />
    </>
  );
};

export default SideNewProject;

import React from "react";
import { useModalToggle } from "hooks";
import { ProjectCreateModal } from "modals";

import "./SideNewProject.scss";

const SideNewProject = () => {
  const [isProjectOpen, setIsProjectOpen] = useModalToggle();

  return (
    <>
      <div className="new-project">
        <div className="wrapper position-relative rounded-10">
          {/* TOP */}
          <div className="top mgb-5 color-white">
            Let's help you organize your project's todos and notes efficiently!
          </div>

          {/* BOTTOM */}
          <div className="bottom rounded-7 pointer" onClick={setIsProjectOpen}>
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
        toggleModal={setIsProjectOpen}
      />
    </>
  );
};

export default SideNewProject;

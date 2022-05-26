import React from "react";
import "./SideNewProject.scss";

const SideNewProject = () => {
  return (
    <div className="new-project">
      <div className="wrapper position-relative rounded-10">
        {/* TOP */}
        <div className="top mgb-5 color-white">
          Let's help you organize your project's todos and notes efficiently!
        </div>

        {/* BOTTOM */}
        <div className="bottom rounded-7 pointer">
          <div className="add-btn rounded-7 mgr-10">
            <div className="icon-plus place-center"></div>
          </div>

          <div className="add-text fw-600 color-white">Create new project</div>
        </div>
      </div>
    </div>
  );
};

export default SideNewProject;

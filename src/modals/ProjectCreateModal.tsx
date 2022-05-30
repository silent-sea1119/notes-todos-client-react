import React from "react";
import { ModalCover } from "modals";
import { modalTypes } from "types";

const ProjectCreateModal = ({ showModal, toggleModal }: modalTypes) => {
  return (
    <ModalCover showModal={showModal} toggleModal={toggleModal}>
      {/* MODAL HEADER */}
      <ModalCover.Slot name="header">
        <div className="modal-cover-header">
          <div className="modal-cover-title">CREATE PROJECT</div>
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
              name=""
              id=""
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
              placeholder="Project description ..."
            ></textarea>
          </div>
        </div>
      </ModalCover.Slot>

      {/* MODAL FOOTER */}
      <ModalCover.Slot name="footer">
        <div className="modal-cover-footer pt-0 mgb-5">
          <button className="btn btn-green w-100 pdy-13">Create Project</button>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default ProjectCreateModal;

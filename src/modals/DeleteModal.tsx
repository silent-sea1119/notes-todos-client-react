import React from "react";
import { ModalCover } from "modals";
import { modalTypes } from "types";

import "./DeleteModal.scss";

interface DeleteModalProps extends modalTypes {
  title: string;
}

const DeleteModal = ({ showModal, toggleModal, title }: DeleteModalProps) => {
  const deleteIcon = require("assets/trashIcon.png");

  return (
    <ModalCover
      showModal={showModal}
      toggleModal={toggleModal}
      styles="modal-xxs"
    >
      {/* MODAL BODY */}
      <ModalCover.Slot name="body">
        <div className="modal-cover-body">
          {/* DELETE ICON */}
          <div className="trash-icon mgt-30 mgb-20">
            <img src={deleteIcon} alt="delete" />
          </div>

          {/* DELETE TITLE */}
          <div className="delete-title fw-600 color-black mgb-5 text-center">
            Delete {title}
          </div>

          <div className="delete-meta color-grey text-center mgb-18">
            Are you sure you want to delete this {title.toLowerCase()}. <br />
            Click <span className="fw-600">delete</span> to confirm.
          </div>

          {/* OPTION BOTTOM */}
          <div className="option-bottom mgb-12">
            <button
              className="btn color-black no-shadow mgr-10"
              onClick={toggleModal}
            >
              CANCEL
            </button>

            <button className="btn btn-red mgl-10">DELETE</button>
          </div>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default DeleteModal;

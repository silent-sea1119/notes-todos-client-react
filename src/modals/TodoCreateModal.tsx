import React from "react";
import { ModalCover } from "modals";
import { modalTypes } from "types";

interface TodoCreateType extends modalTypes {
  category: string;
}

const TodoCreateModal = ({
  showModal,
  toggleModal,
  category,
}: TodoCreateType) => {
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
        <div className="modal-cover-body pt-0">
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
            ></textarea>
          </div>

          {/* LABEL CONTENT BLOCK */}
          <div className="mgb-14">
            <div className="label-row">
              <div className="left">
                <label htmlFor="labelTitle" className="control-label">
                  Label
                </label>
                <input
                  type="text"
                  name=""
                  id="labelTitle"
                  className="form-control"
                  placeholder="Task label title..."
                />
              </div>

              <div className="right">
                <label htmlFor="labelColor" className="control-label">
                  Color
                </label>

                <select name="" id="labelColor" className="form-control">
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="brown">Yellow</option>
                </select>
              </div>
            </div>

            <div className="add-label-row pointer mgt-14">
              <div className="circle rounded-circle mgr-10">
                <div className="icon icon-plus"></div>
              </div>

              <div className="text color-grey fw-600">Add task label</div>
            </div>
          </div>
        </div>
      </ModalCover.Slot>

      {/* MODAL FOOTER */}
      <ModalCover.Slot name="footer">
        <div className="modal-cover-footer pt-0 mgb-5">
          <button className="btn btn-green w-100 pdy-13">Create Todo</button>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default TodoCreateModal;

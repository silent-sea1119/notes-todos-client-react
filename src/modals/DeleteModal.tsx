import React from "react";
import { useAppDispatch } from "hooks/storeHook";
import { $serviceUtils as $utlis } from "services";
import { useBtnClick } from "hooks";
import { deleteProject } from "store/projectSlice/sliceGetters";
import { deleteUser, removeUser } from "store/generalSlice/sliceGetters";
import { deleteNote, removeFromNote } from "store/noteSlice/sliceGetters";
import { deleteTodo, removeFromTodo } from "store/todoSlice/sliceGetters";
import { ModalCover } from "modals";
import { modalTypes } from "types";

import "./DeleteModal.scss";

interface DeleteModalProps extends modalTypes {
  title: string;
  id?: any;
}

const DeleteModal = ({
  showModal,
  toggleModal,
  title,
  id,
}: DeleteModalProps) => {
  const deleteIcon = require("assets/trashIcon.png");
  const dispatch = useAppDispatch();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const handleClick = useBtnClick(btnRef.current);

  const deleteAction = () => {
    if (title === "Project") return deleteProject({ id });
    if (title === "User") return deleteUser({ id });
    if (title === "Note") return deleteNote({ id });
    if (title === "Todo") return deleteTodo({ id });
  };

  const deleteItem = async () => {
    try {
      //@ts-ignore
      let response = await dispatch(deleteAction()).unwrap();

      if (response.code === 200) {
        // handleClick("Delete", false);
        title === "Project" && $utlis.emitter.emit("loadProjectSidebar");
        title === "User" && dispatch(removeUser(id));
        title === "Note" && dispatch(removeFromNote(id));
        title === "Todo" && dispatch(removeFromTodo(id));

        setTimeout(() => toggleModal(), 500);
      } else {
        handleClick("Failed", false);
        setTimeout(() => handleClick("Delete", false), 1200);
      }
    } catch (err) {
      handleClick("Delete", false);
      console.log(err);
    }
  };

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

            <button
              className="btn btn-red mgl-10"
              onClick={deleteItem}
              ref={btnRef}
            >
              DELETE
            </button>
          </div>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default DeleteModal;

import React from "react";
import { useActivePageType, useModalToggle } from "hooks";
import { TodoCreateModal, NoteCreateModal } from "modals";

import "./TitleHolder.scss";

const TitleHolder = () => {
  const activePageType = useActivePageType(undefined);
  const [isTodoOpen, setIsTodoOpen] = useModalToggle();
  const [isNoteOpen, setIsNoteOpen] = useModalToggle();

  const triggerModal = () => {
    activePageType === "todos" ? setIsTodoOpen() : setIsNoteOpen();
  };

  return (
    <>
      <div className="title-holder">
        <div className="left-wrapper">
          <div className="title fw-600 color-black">Today Activities</div>
          <div className="meta color-grey">
            View all activities going on today across projects
          </div>
        </div>

        {["todos", "notes"].includes(activePageType) && (
          <button className="btn btn-green btn-wrapper" onClick={triggerModal}>
            <div className="icon icon-plus"></div>
            <div>{activePageType}</div>
          </button>
        )}
      </div>

      {/* MODALS */}
      <TodoCreateModal showModal={isTodoOpen} toggleModal={setIsTodoOpen} />
      <NoteCreateModal showModal={isNoteOpen} toggleModal={setIsNoteOpen} />
    </>
  );
};

export default TitleHolder;

import React from "react";
import { useActivePageType, useModalToggle } from "hooks";
import { NoteCreateModal } from "modals";

import "./TitleHolder.scss";

const TitleHolder = () => {
  const activePageType = useActivePageType(undefined);
  const [isNoteOpen, setIsNoteOpen] = useModalToggle();

  return (
    <>
      <div className="title-holder">
        <div className="left-wrapper">
          <div className="title fw-600 color-black">Today Activities</div>
          <div className="meta color-grey">
            View all activities going on today across projects
          </div>
        </div>

        {["notes"].includes(activePageType) && (
          <button className="btn btn-green btn-wrapper" onClick={setIsNoteOpen}>
            <div className="icon icon-plus"></div>
            <div>{activePageType}</div>
          </button>
        )}
      </div>

      {/* MODALS */}
      <NoteCreateModal showModal={isNoteOpen} toggleModal={setIsNoteOpen} />
    </>
  );
};

export default TitleHolder;

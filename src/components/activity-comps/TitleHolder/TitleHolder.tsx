import React from "react";
import { useActivePageType, useToggle } from "hooks";
import { TopSearch } from "components";
import { NoteCreateModal } from "modals";

import "./TitleHolder.scss";

const TitleHolder = () => {
  const activePageType = useActivePageType(undefined);
  const [isNoteOpen, setIsNoteOpen] = useToggle();

  return (
    <>
      <div className="title-holder">
        <div className="left-wrapper">
          <TopSearch />
        </div>

        {["notes"].includes(activePageType) && (
          <button
            className="btn btn-green btn-wrapper box-shadow-effect"
            onClick={setIsNoteOpen}
          >
            <div className="icon icon-plus"></div>
          </button>
        )}
      </div>

      {/* MODALS */}
      <NoteCreateModal
        showModal={isNoteOpen}
        toggleModal={setIsNoteOpen}
        type="create"
      />
    </>
  );
};

export default TitleHolder;

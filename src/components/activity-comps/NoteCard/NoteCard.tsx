import React from "react";
import { NoteTypes } from "types/NoteTypes";
import { useModalToggle } from "hooks";
import { DeleteModal } from "modals";

import "./NoteCard.scss";
interface NoteProps {
  note: NoteTypes;
}

const NotesCard: React.FC<NoteProps> = ({
  note: { title, content, created_at, labels, theme },
}: NoteProps) => {
  const [isDeleteOpen, setDeleteOpen] = useModalToggle();

  return (
    <>
      <div className="note-card-wrapper h-auto position-relative">
        <div className={`note-card pointer rounded-5 color-${theme}-bg`}>
          {/* LABELS */}
          <div className="note-labels mgt-4 mgb-12">
            {labels.map((label, index) => (
              <div
                key={index}
                className={`label rounded-5 color-${label.color}-light-bg`}
              >
                {label.text}
              </div>
            ))}
          </div>

          {/* NOTE TITLE */}
          <div className="note-title fw-600 color-white">{title}</div>

          {/* NOTE CONTENT */}
          <div className="note-content mgt-3 color-white">{content}</div>

          <div className="bottom-info position-relative mgt-10">
            <div className="note-date color-white">
              <span className="fw-600">Created:</span> {created_at}
            </div>

            <div
              className="note-trash rounded-5 pointer"
              onClick={setDeleteOpen}
            >
              <div className="w-100 h-100 position-relative"></div>
              <div className="icon-trash place-center"></div>
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <DeleteModal
        showModal={isDeleteOpen}
        toggleModal={setDeleteOpen}
        title="Note"
      />
    </>
  );
};

export default NotesCard;

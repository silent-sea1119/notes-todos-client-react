import React from "react";
import { NoteTypes } from "types/NoteTypes";
import { useToggle } from "hooks";
import { NoteCreateModal, DeleteModal } from "modals";
import { format } from "date-fns";
import { motion } from "framer-motion";

import "./NoteCard.scss";
interface NoteProps {
  note: NoteTypes;
}

const NotesCard: React.FC<NoteProps> = ({
  note: { id, title, content, createdAt, labels, theme },
}: NoteProps) => {
  const [isDeleteOpen, setDeleteOpen] = useToggle();
  const [isNoteOpen, setIsNoteOpen] = useToggle();

  return (
    <>
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        className="note-card-wrapper h-auto position-relative smooth-animation"
      >
        <div className={`note-card pointer rounded-5 color-${theme}-bg`}>
          {/* LABELS */}
          <div className="note-labels mgt-4 mgb-12">
            {labels.map((label, index) => (
              <div
                key={index}
                className={`label rounded-5 color-${label.color}-light-bg`}
              >
                {label.title}
              </div>
            ))}
          </div>

          {/* NOTE TITLE */}
          <div className="note-title fw-600 color-white">{title}</div>

          {/* NOTE CONTENT */}
          <div className="note-content mgt-3 color-white">{content}</div>

          <div className="bottom-info position-relative mgt-10">
            <div className="note-date color-white">
              <span className="fw-600">Created:</span>{" "}
              {format(new Date(createdAt), "do MMM, yyyy")}
            </div>

            <div className="wrapper">
              <div
                className="action-box note-edit rounded-5 pointer"
                onClick={setIsNoteOpen}
              >
                <div className="icon icon-show"></div>
              </div>

              <div
                className="action-box note-trash rounded-5 pointer"
                onClick={setDeleteOpen}
              >
                <div className="icon icon-trash"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MODALS */}
      <NoteCreateModal
        showModal={isNoteOpen}
        toggleModal={setIsNoteOpen}
        type="update"
        note={{ id, title, content, createdAt, labels, theme }}
      />

      <DeleteModal
        showModal={isDeleteOpen}
        toggleModal={setDeleteOpen}
        title="Note"
        id={id}
      />
    </>
  );
};

export default NotesCard;

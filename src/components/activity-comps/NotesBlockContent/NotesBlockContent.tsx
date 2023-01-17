import React from "react";
import { NoteTypes } from "types/NoteTypes";
import { NoteCard } from "components";

import "./NotesBlockContent.scss";

interface NotesProps {
  notes: NoteTypes[];
}

const NotesBlockContent: React.FC<NotesProps> = ({ notes }: NotesProps) => {
  return (
    <div className="notes-block-content mx-auto">
      {notes?.length &&
        notes?.map((note: any, index: number) => (
          <NoteCard key={index} note={note} />
        ))}
    </div>
  );
};

NotesBlockContent.defaultProps = {
  notes: [],
};

export default NotesBlockContent;

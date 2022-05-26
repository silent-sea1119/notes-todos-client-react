import React from "react";
import { NoteCard } from "components";

import "./NotesBlockContent.scss";

const NotesBlockContent = () => {
  return (
    <div className="notes-block-content mx-auto">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  );
};

export default NotesBlockContent;

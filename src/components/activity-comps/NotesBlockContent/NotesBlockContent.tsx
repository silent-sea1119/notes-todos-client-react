import React from "react";
import { NoteCard } from "components";

import "./NotesBlockContent.scss";

const NotesBlockContent = () => {
  return (
    <div className="notes-block-content w-100">
      <div className="row w-100 border">
        <div className="col-3">
          <NoteCard />
        </div>
        <div className="col-3">
          <NoteCard />
        </div>
        <div className="col-3">
          <NoteCard />
        </div>
        <div className="col-3">
          <NoteCard />
        </div>
      </div>
    </div>
  );
};

export default NotesBlockContent;

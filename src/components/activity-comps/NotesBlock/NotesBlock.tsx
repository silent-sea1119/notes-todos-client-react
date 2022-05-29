import React from "react";
import { NotesBlockContent, NotesBlockEmpty } from "components";
import { NoteTypes } from "types/NoteTypes";
import { NotesContent } from "mock-data/Notes";

import "./NotesBlock.scss";

const NotesBlock = () => {
  const [notes] = React.useState<NoteTypes[]>(NotesContent);

  return (
    <div className="notes-block">
      {notes.length ? <NotesBlockContent notes={notes} /> : <NotesBlockEmpty />}
    </div>
  );
};

export default NotesBlock;

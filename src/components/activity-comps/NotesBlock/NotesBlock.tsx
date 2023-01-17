import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NotesBlockContent, NotesBlockEmpty } from "components";
import { NoteTypes } from "types/NoteTypes";
import { useAppDispatch, useAppSelector } from "hooks/storeHook";
import { fetchNote, getNote } from "store/noteSlice/sliceGetters";

import "./NotesBlock.scss";

const NotesBlock = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { notes: NoteData } = useAppSelector(getNote);
  const [notes, setNotes] = React.useState<NoteTypes[]>([]);

  useEffect(() => {
    dispatch(fetchNote({ id: params.project_id }));
  }, [dispatch, params.project_id]);

  useEffect(() => {
    setNotes(NoteData);
  }, [NoteData]);

  return (
    <div className="notes-block">
      {notes?.length ? (
        <NotesBlockContent notes={notes} />
      ) : (
        <NotesBlockEmpty />
      )}
    </div>
  );
};

export default NotesBlock;

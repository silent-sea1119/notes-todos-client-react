import { $serviceUtils as $utils } from "services";
import { fetchNote, createNote, updateNote } from "./sliceActions";

const asyncReducers = {
  extraReducers: (builder: any) => {
    // FETCH NOTE BUILDER
    builder
      .addCase(fetchNote.pending, (state: any) =>
        fetchNoteHandler.pending(state)
      )
      .addCase(fetchNote.fulfilled, (state: any, action: any) =>
        fetchNoteHandler.fulfilled(state, action)
      );

    // CREATE NOTE BUILDER
    builder.addCase(createNote.fulfilled, (state: any, action: any) =>
      $utils.stateResolver(state, {
        loading: false,
        notes: [...state.notes, action.payload.data],
      })
    );

    // UPDATE NOTE BUILDER
    builder.addCase(updateNote.fulfilled, (state: any, action: any) =>
      updateNoteData(state, action)
    );
  },
};

// HANDLE FETCH TODO ACTIONS
const fetchNoteHandler = {
  pending: (state: any) => {
    $utils.stateResolver(state, { loading: true });
  },

  fulfilled: (state: any, { payload }: any) => {
    $utils.stateResolver(state, { loading: false, notes: payload.data });
  },
};

const updateNoteData = (state: any, { payload: { data } }: any) => {
  let notes = JSON.parse(JSON.stringify(state.notes));
  let note_index = notes.findIndex((note: any) => note.id === data.id);

  notes.splice(note_index, 1, data);

  $utils.stateResolver(state, {
    loading: false,
    notes,
  });
};

export { asyncReducers };

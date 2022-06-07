import { createSlice } from "@reduxjs/toolkit";
import { NoteSliceType } from "types/NoteTypes";
import { RootState } from "store";

import { fetchNotes } from "./sliceActions";
import { loadNotes } from "./sliceReducers";

// Define the initial state
const initialState: NoteSliceType = {
  loading: false,
  error: {},
  data: [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => loadNotes.pending(state))
      .addCase(fetchNotes.fulfilled, (state, action) =>
        loadNotes.fulfilled(state, action)
      )
      .addCase(fetchNotes.rejected, (state, action) =>
        loadNotes.error(state, action)
      );
  },
});

// export const { increment } = noteSlice.actions;
export const getNotes = (state: RootState) => state.note;
export default noteSlice.reducer;

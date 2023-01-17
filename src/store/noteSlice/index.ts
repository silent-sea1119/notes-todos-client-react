import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

import { asyncReducers } from "./sliceReducers";

type noteStateType = {
  notes: any[];
  loading: boolean;
};

// Define the initial state
const initialState: noteStateType = {
  notes: [],
  loading: false,
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    removeFromNote: (state, { payload }: any) => {
      //@ts-ignore
      state.notes = state.notes.filter((note) => note.id !== payload);
    },
  },
  ...asyncReducers,
});

export const { removeFromNote } = noteSlice.actions;
export const getNote = (state: RootState) => state.note;
export default noteSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { NoteSliceType } from "types/NoteTypes";
import { RootState } from "store";

import { asyncReducers } from "./sliceReducers";

// Define the initial state
const initialState: NoteSliceType = {
  loading: false,
  error: {},
  data: [],
};

export const noteSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  ...asyncReducers,
});

export const getNote = (state: RootState) => state.note;
export default noteSlice.reducer;

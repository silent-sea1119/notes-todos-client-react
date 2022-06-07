import { createSlice } from "@reduxjs/toolkit";
import { TodoSliceType } from "types/TodoTypes";
import { RootState } from "store";

import { asyncReducers } from "./sliceReducers";

// Define the initial state
const initialState: TodoSliceType = {
  loading: false,
  error: {},
  data: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  ...asyncReducers,
});

// export const { increment } = todoSlice.actions;
export const getTodo = (state: RootState) => state.todo;
export default todoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { asyncReducers } from "./sliceReducers";

type todoStateType = {
  todos: any[];
  loading: boolean;
};

// Define the initial state
const initialState: todoStateType = {
  todos: [],
  loading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    removeFromTodo: (state, { payload }: any) => {
      //@ts-ignore
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
  ...asyncReducers,
});

export const { removeFromTodo } = todoSlice.actions;
export const getTodo = (state: RootState) => state.todo;
export default todoSlice.reducer;

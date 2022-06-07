import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "store/todoSlice";
import noteSlice from "store/noteSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    note: noteSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

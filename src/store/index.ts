import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "store/todoSlice";
import noteSlice from "store/noteSlice";
import generalSlice from "store/generalSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
    todo: todoSlice,
    note: noteSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

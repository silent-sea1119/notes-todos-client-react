import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "store/todoSlice";
import noteSlice from "store/noteSlice";
import authSlice from "store/authSlice";
import generalSlice from "store/generalSlice";
import projectSlice from "store/projectSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    general: generalSlice,
    project: projectSlice,
    todo: todoSlice,
    note: noteSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

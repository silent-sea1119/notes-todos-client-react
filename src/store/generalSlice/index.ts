import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { asyncReducers } from "./sliceReducers";

// Define the initial state
const initialState = {
  show_sidebar: false,
  // @ts-ignore
  auth_user: JSON.parse(localStorage.getItem("NothyAuthPayload")) || "",
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.show_sidebar = !state.show_sidebar;
    },
  },
  ...asyncReducers,
});

export const { toggleSidebar } = generalSlice.actions;
export const getGeneral = (state: RootState) => state.general;
export default generalSlice.reducer;

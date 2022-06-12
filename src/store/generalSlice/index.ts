import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

// Define the initial state
const initialState = {
  show_sidebar: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.show_sidebar = !state.show_sidebar;
    },
  },
});

export const { toggleSidebar } = generalSlice.actions;
export const getGeneral = (state: RootState) => state.general;
export default generalSlice.reducer;

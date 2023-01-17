import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { asyncReducers } from "./sliceReducers";

// Define the initial state
const initialState = {
  show_sidebar: false,
  users: {
    data: [],
    loading: true,
    empty: false,
    pagination: { pages: 1, page: 1 },
  },
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.show_sidebar = !state.show_sidebar;
    },
    changeUserRole: (state, { payload }: any) => {
      let user_index = state.users.data.findIndex(
        (item: any) => item.id === payload.id
      );
      //@ts-ignore
      state.users.data[user_index].role = payload.role;
    },
    removeUser: (state, { payload }: any) => {
      //@ts-ignore
      state.users.data = state.users.data.filter((user) => user.id !== payload);
    },
  },
  ...asyncReducers,
});

export const { toggleSidebar, changeUserRole, removeUser } =
  generalSlice.actions;
export const getGeneral = (state: RootState) => state.general;
export default generalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { asyncReducers } from "./sliceReducers";

// Define the initial state
const initialState = {
  // @ts-ignore
  auth_user: JSON.parse(localStorage.getItem("NothyAuthPayload")) || "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateProfile: (state, { payload }: any) => {
      // @ts-ignore
      let parsedData = JSON.parse(localStorage.getItem("NothyAuthPayload"));

      parsedData.fullname = payload.fullname;
      parsedData.picture = payload.picture;

      localStorage.setItem("NothyAuthPayload", JSON.stringify(parsedData));

      state.auth_user = parsedData;
    },
  },
  ...asyncReducers,
});

export const { updateProfile } = authSlice.actions;
export const getAuth = (state: RootState) => state.auth;
export default authSlice.reducer;

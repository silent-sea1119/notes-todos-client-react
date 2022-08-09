import axios from "axios";
import { $serviceUtils as $utils } from "services";
import { signupUser, loginUser, logoutUser } from "./sliceActions";

const asyncReducers = {
  extraReducers: (builder: any) => {
    // SIGNUP REDUCER
    builder.addCase(signupUser.fulfilled, (state: any, { payload }: any) =>
      authHandler.fulfilled(state, payload)
    );

    // LOGIN REDUCER
    builder.addCase(loginUser.fulfilled, (state: any, { payload }: any) =>
      authHandler.fulfilled(state, payload)
    );

    // LOGOUT REDUCER
    builder.addCase(logoutUser.fulfilled, (state: any, { payload }: any) => {
      if (payload.code === 200) {
        $utils.stateResolver(state, { auth_user: "" });
        localStorage.clear();
        window.location.href = "/login";
      }
    });
  },
};

// HANDLE FETCH TODO ACTIONS
const authHandler = {
  fulfilled: (state: any, payload: any) => {
    if (payload.code === 200) {
      axios.defaults.headers.common["Authorization"] = payload.data.token;
      $utils.stateResolver(state, { auth_user: payload.data });
      localStorage.setItem("NothyAuthPayload", JSON.stringify(payload.data));
    }
  },
};

export { asyncReducers };

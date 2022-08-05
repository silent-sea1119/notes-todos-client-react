import { $serviceUtils as $utils } from "services";
import { loginUser } from "./sliceActions";

const asyncReducers = {
  extraReducers: (builder: any) => {
    builder
      .addCase(loginUser.fulfilled, (state: any, action: any) =>
        loginHandler.fulfilled(state, action)
      )
      .addCase(loginUser.rejected, (state: any, action: any) =>
        loginHandler.error(state, action)
      );
  },
};

// HANDLE USER LOGIN ACTIONS
const loginHandler = {
  fulfilled: (state: any, { payload }: any) => {
    console.log("PAYLOAD", payload);
    $utils.stateResolver(state, { loading: false, data: payload });
  },

  error: (state: any, { error }: any) => {
    $utils.stateResolver(state, { loading: false, data: [], error: error });
  },
};

export { asyncReducers };

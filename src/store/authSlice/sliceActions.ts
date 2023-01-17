import { createAsyncThunk } from "@reduxjs/toolkit";
import { $serviceApi as $api } from "services";

type AuthType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string | undefined;
  fullName?: string;
  image?: any;
};

// HANDLE USER SIGNUP REQUEST
const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (
    payload: Pick<AuthType, "firstName" | "lastName" | "email" | "password">
  ) => await $api.push("/auth/signup", { payload })
);

// HANDLE USER LOGIN REQUEST
const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload: Pick<AuthType, "email" | "password">) =>
    await $api.push("/auth/login", { payload })
);

/* Creating a thunk that will be used to update the profile of a user. */
const updateUserProfile = createAsyncThunk(
  "project/updateUserProfile",
  async (payload: Pick<AuthType, "fullName" | "image">) =>
    await $api.update(`/user`, { payload })
);

// HANDLE USER PASSWORD REQUEST
const requestUserPassword = createAsyncThunk(
  "auth/requestUserPassword",
  async (payload: Pick<AuthType, "email">) =>
    await $api.push("/auth/request-password", { payload })
);

// HANDLE USER PASSWORD RESET
const resetUserPassword = createAsyncThunk(
  "auth/resetUserPassword",
  async (payload: Pick<AuthType, "password" | "token">) =>
    await $api.push("/auth/reset-password", { payload })
);

// HANDLE USER LOGOUT RESET
const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async () => await $api.push("/auth/logout", {})
);

export {
  signupUser,
  loginUser,
  requestUserPassword,
  resetUserPassword,
  logoutUser,
  updateUserProfile,
};

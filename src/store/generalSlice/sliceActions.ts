import { createAsyncThunk } from "@reduxjs/toolkit";
import { $serviceApi as $api } from "services";

type AuthType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string | undefined;
};

// HANDLE USER SIGNUP REQUEST
const signupUser = createAsyncThunk(
  "general/signupUser",
  async (
    payload: Pick<AuthType, "firstName" | "lastName" | "email" | "password">
  ) => await $api.push("/auth/signup", { payload })
);

// HANDLE USER LOGIN REQUEST
const loginUser = createAsyncThunk(
  "general/loginUser",
  async (payload: Pick<AuthType, "email" | "password">) =>
    await $api.push("/auth/login", { payload })
);

// HANDLE USER PASSWORD REQUEST
const requestUserPassword = createAsyncThunk(
  "general/requestUserPassword",
  async (payload: Pick<AuthType, "email">) =>
    await $api.push("/auth/request-password", { payload })
);

// HANDLE USER PASSWORD RESET
const resetUserPassword = createAsyncThunk(
  "general/resetUserPassword",
  async (payload: Pick<AuthType, "password" | "token">) =>
    await $api.push("/auth/reset-password", { payload })
);

// HANDLE USER LOGOUT RESET
const logoutUser = createAsyncThunk(
  "general/logoutUser",
  async () => await $api.push("/auth/logout", {})
);

export {
  signupUser,
  loginUser,
  requestUserPassword,
  resetUserPassword,
  logoutUser,
};

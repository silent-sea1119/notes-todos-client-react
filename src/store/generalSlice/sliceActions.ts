import { createAsyncThunk } from "@reduxjs/toolkit";
import { $serviceApi as $api } from "services";


type loginType = {
    email: string,
    password: string
}

const loginUser = createAsyncThunk(
  "general/loginUser",
  async (payload: loginType) => await $api.push("/auth/login", {payload})
);

export { loginUser };

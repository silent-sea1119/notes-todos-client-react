import { createAsyncThunk } from "@reduxjs/toolkit";
import { $serviceApi as $api } from "services";

type GeneralType = {
  id?: string;
  page: number;
  search?: string;
  role?: string;
  fullName?: string;
  image?: any;
};

const fetchDashboardSummary = createAsyncThunk(
  "general/fetchDashboardSummary",
  async () => await $api.fetch(`/user/dashboard-summary`)
);

/* Creating a thunk that will be used to fetch all users. */
const fetchAllUsers = createAsyncThunk(
  "general/fetchAllUsers",
  async (payload: Pick<GeneralType, "page" | "search">) =>
    await $api.fetch(`/user?page=${payload.page}&search=${payload.search}`)
);

const fetchSingleUser = createAsyncThunk(
  "general/fetchSingleUser",
  async (payload: any = null) =>
    await $api.fetch(`/user/single/${payload ? payload : ""}`)
);

/* Creating a thunk that will be used to update the role of a user. */
const updateUserRole = createAsyncThunk(
  "project/updateUserRole",
  async (payloadData: Pick<GeneralType, "id" | "role">) => {
    let payload = { role: payloadData.role };
    return await $api.update(`/user/role/${payloadData.id}`, { payload });
  }
);

/* Creating a thunk that will be used to delete a user. */
const deleteUser = createAsyncThunk(
  "project/deleteRole",
  async (payload: Pick<GeneralType, "id">) =>
    await $api.remove(`/user/${payload.id}`)
);

export {
  fetchDashboardSummary,
  fetchAllUsers,
  fetchSingleUser,
  updateUserRole,
  deleteUser,
};

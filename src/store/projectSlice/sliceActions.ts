import { createAsyncThunk } from "@reduxjs/toolkit";
import { $serviceApi as $api } from "services";

type ProjectType = {
  id?: string;
  page?: number;
  search?: string;
  title?: string;
  description?: string;
};

/* Creating a thunk that will be used to fetch projects. */
const fetchMyProjects = createAsyncThunk(
  "project/fetchMyProjects",
  async (payload: Pick<ProjectType, "page" | "search">) => {
    let query_filter = payload.search
      ? `?page=${payload.page}&search=${payload.search}`
      : `?page=${payload.page}`;

    return await $api.fetch(`/project${query_filter}`);
  }
);

/* Creating a thunk that will be used to create a project. */
const createProject = createAsyncThunk(
  "project/createProject",
  async (payload: Pick<ProjectType, "title" | "description">) =>
    await $api.push(`/project`, { payload })
);

/* Creating a thunk that will be used to update a project. */
const updateProject = createAsyncThunk(
  "project/updateProject",
  async (payload: Pick<ProjectType, "id" | "title" | "description">) =>
    await $api.update(`/project/${payload.id}`, { payload })
);

/* Creating a thunk that will be used to delete a project. */
const deleteProject = createAsyncThunk(
  "project/deleteProject",
  async (payload: Pick<ProjectType, "id">) =>
    await $api.remove(`/project/${payload.id}`)
);

export { fetchMyProjects, createProject, updateProject, deleteProject };

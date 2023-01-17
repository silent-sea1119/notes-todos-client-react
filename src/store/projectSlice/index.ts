import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { asyncReducers } from "./sliceReducers";

// Define the initial state
const initialState = {
  projects: {
    data: [],
    loading: true,
    empty: false,
    pagination: { pages: 1, page: 1 },
  },
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateProjectState: (state, { payload }: any) => {
      let project_index = state.projects.data.findIndex(
        (item: any) => item.id === payload.id
      );

      //@ts-ignore
      state.projects.data[project_index].title = payload.title;
      //@ts-ignore
      state.projects.data[project_index].description = payload.description;
    },
  },
  ...asyncReducers,
});

export const getProjects = (state: RootState) => state.project;
export const { updateProjectState } = projectSlice.actions;
export default projectSlice.reducer;

import { $serviceUtils as $utils } from "services";
import { fetchMyProjects } from "./sliceActions";

const asyncReducers = {
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchMyProjects.pending, (state: any) =>
        projectStateHandler(state, {})
      )
      .addCase(fetchMyProjects.fulfilled, (state: any, { payload }: any) => {
        if (payload?.data.length)
          projectStateHandler(state, {
            loading: false,
            data: payload.data,
            pagination: payload.pagination,
          });
        else
          projectStateHandler(state, {
            loading: false,
            empty: true,
          });
      });
  },
};

/**
 * It takes a state object and an object with the following properties: loading, empty, data,
 * pagination. It then uses the stateResolver function to update the state object with the values of
 * the properties of the object passed in
 * @param {any} state - The state object
 * @param {any}  - `state` - the state object
 */
const projectStateHandler = (
  state: any,
  {
    loading = true,
    empty = false,
    data = [],
    pagination = { pages: 1, page: 1 },
  }: any
) => {
  $utils.stateResolver(state, {
    projects: {
      loading,
      empty,
      data,
      pagination,
    },
  });
};

export { asyncReducers };

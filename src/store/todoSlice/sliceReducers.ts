import { $serviceUtils as $utils } from "services";
import { fetchTodo } from "./sliceActions";

const asyncReducers = {
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchTodo.pending, (state: any) =>
        fetchTodoHandler.pending(state)
      )
      .addCase(fetchTodo.fulfilled, (state: any, action: any) =>
        fetchTodoHandler.fulfilled(state, action)
      )
      .addCase(fetchTodo.rejected, (state: any, action: any) =>
        fetchTodoHandler.error(state, action)
      );
  },
};

// HANDLE FETCH TODO ACTIONS
const fetchTodoHandler = {
  pending: (state: any) => {
    $utils.stateResolver(state, { loading: true });
  },

  fulfilled: (state: any, { payload }: any) => {
    $utils.stateResolver(state, { loading: false, data: payload });
  },

  error: (state: any, { error }: any) => {
    $utils.stateResolver(state, { loading: false, data: [], error: error });
  },
};

export { asyncReducers };

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

// UTILITY FUNCTION TO EASILY UPDATE THE STATE
const stateResolver = (state: any, dataset: any): any =>
  Object.entries(dataset).map((item) => (state[item[0]] = item[1]));

// HANDLE FETCH TODO ACTIONS
const fetchTodoHandler = {
  pending: (state: any) => {
    stateResolver(state, { loading: true });
  },

  fulfilled: (state: any, { payload }: any) => {
    stateResolver(state, { loading: false, data: payload });
  },

  error: (state: any, { error }: any) => {
    stateResolver(state, { loading: false, data: [], error: error });
  },
};

export { asyncReducers };

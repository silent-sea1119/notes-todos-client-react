import { $serviceUtils as $utils } from "services";
import { fetchTodo, createTodo, updateTodo } from "./sliceActions";

const asyncReducers = {
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchTodo.pending, (state: any) =>
        fetchTodoHandler.pending(state)
      )
      .addCase(fetchTodo.fulfilled, (state: any, action: any) =>
        fetchTodoHandler.fulfilled(state, action)
      );

    // CREATE TODO BUILDER
    builder.addCase(createTodo.fulfilled, (state: any, action: any) =>
      $utils.stateResolver(state, {
        loading: false,
        todos: [...state.todos, action.payload.data],
      })
    );

    // UPDATE TODO BUILDER
    builder.addCase(updateTodo.fulfilled, (state: any, action: any) =>
      updateTodoData(state, action)
    );
  },
};

// HANDLE FETCH TODO ACTIONS
const fetchTodoHandler = {
  pending: (state: any) => {
    $utils.stateResolver(state, { loading: true });
  },

  fulfilled: (state: any, { payload }: any) => {
    $utils.stateResolver(state, { loading: false, todos: payload.data });
  },
};

const updateTodoData = (state: any, { payload: { data } }: any) => {
  let todos = JSON.parse(JSON.stringify(state.todos));
  let todo_index = todos.findIndex((note: any) => note.id === data.id);

  todos.splice(todo_index, 1, data);

  $utils.stateResolver(state, {
    loading: false,
    todos,
  });
};

export { asyncReducers };

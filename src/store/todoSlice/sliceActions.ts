import { createAsyncThunk } from "@reduxjs/toolkit";
import { $serviceApi as $api } from "services";

const fetchTodo = createAsyncThunk(
  "todo/fetchTodo",
  async () => await $api.fetch("/todos")
);

export { fetchTodo };

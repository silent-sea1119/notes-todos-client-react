import { createAsyncThunk } from "@reduxjs/toolkit";
import { $serviceApi as $api } from "services";
import { labelTypes } from "types";

interface ITodoType {
  id?: string;
  category?: string;
  content?: string;
  search?: string;
  labels?: labelTypes[];
}
const fetchTodo = createAsyncThunk(
  "todo/fetchTodo",
  async (payload: Pick<ITodoType, "id" | "search">) => {
    let search_query = payload.search ? `?search=${payload.search}` : "";
    return await $api.fetch(`/todo/${payload.id}${search_query}`);
  }
);

const createTodo = createAsyncThunk(
  "todo/createTodo",
  async (payload: Pick<ITodoType, "id" | "content" | "category" | "labels">) =>
    await $api.push(`/todo/${payload.id}`, { payload })
);

const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async (payload: Pick<ITodoType, "id" | "content" | "category" | "labels">) =>
    await $api.update(`/todo/${payload.id}`, { payload })
);

const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (payload: Pick<ITodoType, "id">) =>
    await $api.remove(`/todo/${payload.id}`)
);

export { fetchTodo, createTodo, updateTodo, deleteTodo };

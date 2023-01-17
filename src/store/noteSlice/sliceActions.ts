import { createAsyncThunk } from "@reduxjs/toolkit";
import { $serviceApi as $api } from "services";
import { labelTypes } from "types";

interface INotesType {
  id?: string;
  title?: string;
  content?: string;
  theme?: string;
  search?: string;
  labels?: labelTypes[];
}

/* Creating a thunk that will fetch a note from the server. */
const fetchNote = createAsyncThunk(
  "note/fetchNote",
  async (payload: Pick<INotesType, "id" | "search">) => {
    let search_query = payload.search ? `?search=${payload.search}` : "";
    return await $api.fetch(`/note/${payload.id}${search_query}`);
  }
);

/* Creating a thunk that will create a note on the server. */
const createNote = createAsyncThunk(
  "note/createNote",
  async (
    payload: Pick<INotesType, "id" | "title" | "content" | "theme" | "labels">
  ) => await $api.push(`/note/${payload.id}`, { payload })
);

/* Creating a thunk that will update a note on the server. */
const updateNote = createAsyncThunk(
  "note/updateNote",
  async (
    payload: Pick<INotesType, "id" | "title" | "content" | "theme" | "labels">
  ) => await $api.update(`/note/${payload.id}`, { payload })
);

/* Creating a thunk that will delete a note on the server. */
const deleteNote = createAsyncThunk(
  "note/deleteNote",
  async (payload: Pick<INotesType, "id">) =>
    await $api.remove(`/note/${payload.id}`)
);

export { fetchNote, createNote, updateNote, deleteNote };

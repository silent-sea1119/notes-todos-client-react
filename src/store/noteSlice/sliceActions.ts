import { createAsyncThunk } from "@reduxjs/toolkit";
import { $serviceApi as $api } from "services";

const fetchNotes = createAsyncThunk(
  "todo/fetchNotes",
  async () => await $api.fetch("/notes")
);

export { fetchNotes };

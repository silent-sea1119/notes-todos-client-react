import { createAsyncThunk } from "@reduxjs/toolkit";
import { $serviceApi as $api } from "services";

const fetchNote = createAsyncThunk(
  "note/fetchNote",
  async () => await $api.fetch("/notes")
);

export { fetchNote };

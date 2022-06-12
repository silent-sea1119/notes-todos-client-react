import { $serviceUtils as $utils } from "services";
import { fetchNote } from "./sliceActions";

const asyncReducers = {
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchNote.pending, (state: any) =>
        fetchNoteHandler.pending(state)
      )
      .addCase(fetchNote.fulfilled, (state: any, action: any) =>
        fetchNoteHandler.fulfilled(state, action)
      )
      .addCase(fetchNote.rejected, (state: any, action: any) =>
        fetchNoteHandler.error(state, action)
      );
  },
};

// HANDLE FETCH TODO ACTIONS
const fetchNoteHandler = {
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

const loadNotes = {
  pending: (state: any) => {
    state.loading = true;
  },

  fulfilled: (state: any, action: any) => {
    state.loading = false;
    state.data = action.payload;
  },

  error: (state: any, action: any) => {
    state.loading = false;
    state.data = [];
    state.error = action.error;
  },
};

export { loadNotes };

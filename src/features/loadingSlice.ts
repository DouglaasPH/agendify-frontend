// Slice do Redux (user, token, login, logout, etc.)

import { createSlice } from "@reduxjs/toolkit";

interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { updateLoading } = loadingSlice.actions;
export default loadingSlice.reducer;

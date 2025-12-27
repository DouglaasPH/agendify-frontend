import { createSlice } from "@reduxjs/toolkit";

interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false,
};

const loading_slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    update_loading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { update_loading } = loading_slice.actions;
export default loading_slice.reducer;

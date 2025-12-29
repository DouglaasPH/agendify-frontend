// redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// types
import type { RegisterState, UpdateData } from "./types";

const initialState: RegisterState = {
  name: "",
  email: "",
  phone_number: "",
  profession: "",
  password: "",
  profile_avatar_id: null,
  accepted_terms_of_use: false,
};

const register_professional_slice = createSlice({
  name: "register_professional",
  initialState,
  reducers: {
    update_data: (state, action: PayloadAction<Partial<UpdateData>>) => {
      Object.assign(state, action.payload);
    },
    reset: () => initialState,
  },
});

export const { update_data, reset } = register_professional_slice.actions;
export default register_professional_slice.reducer;

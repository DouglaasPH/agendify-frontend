// redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// types
import type { ProfessionalDataSlice, UpdateProfessionalData } from "./types";

const initialState: ProfessionalDataSlice = {
  access_token: null,
  is_authenticated: false,
  id: null,
  name: "",
  email: "",
  phone_number: "",
  profession: "",
  profile_avatar_id: 0,
  chat_code: "",
};

const professional_slice = createSlice({
  name: "professional",
  initialState,
  reducers: {
    update_professional_data: (
      state,
      action: PayloadAction<Partial<UpdateProfessionalData>>
    ) => {
      Object.assign(state, action.payload);
    },
    reset: () => initialState,
  },
});

export const { update_professional_data, reset } = professional_slice.actions;
export default professional_slice.reducer;

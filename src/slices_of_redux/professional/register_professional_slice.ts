// redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RegisterState {
  name: string;
  email: string;
  phone_number: string;
  profession: string;
  password: string;
  profile_avatar_id: null | number;
  accepted_terms_of_use: boolean;
}

interface UpdateProfileAvatarIdState {
  profile_avatar_id: number;
}

interface UpdateAcceptedTermsOfUse {
  accepted_terms_of_use: boolean;
}

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
    update_all_data: (state, action: PayloadAction<Partial<RegisterState>>) => {
      Object.assign(state, action.payload);
    },
    reset: () => initialState,
    update_profile_avatar_id: (
      state,
      action: PayloadAction<Partial<UpdateProfileAvatarIdState>>
    ) => {
      Object.assign(state, action.payload);
    },
    update_accepted_terms_of_use: (
      state,
      action: PayloadAction<Partial<UpdateAcceptedTermsOfUse>>
    ) => {
      Object.assign(state, action.payload);
    },
  },
});

export const {
  update_all_data,
  reset,
  update_profile_avatar_id,
  update_accepted_terms_of_use,
} = register_professional_slice.actions;
export default register_professional_slice.reducer;

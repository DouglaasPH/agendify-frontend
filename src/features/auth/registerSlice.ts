// redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RegisterState {
  fullName: string;
  email: string;
  phoneNumber: string;
  profession: string;
  password: string;
  profileAvatarId: null | number;
  acceptedTermsOfUse: boolean;
}

interface UpdateProfileAvatarIdState {
  profileAvatarId: number;
}

interface UpdateAcceptedTermsOfUse {
  acceptedTermsOfUse: boolean;
}

const initialState: RegisterState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  profession: "",
  password: "",
  profileAvatarId: null,
  acceptedTermsOfUse: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    updateRegister: (state, action: PayloadAction<Partial<RegisterState>>) => {
      Object.assign(state, action.payload);
    },
    resetRegister: (state) => {
      Object.assign(state, initialState);
    },
    updateProfileAvatarId: (
      state,
      action: PayloadAction<Partial<UpdateProfileAvatarIdState>>
    ) => {
      Object.assign(state, action.payload);
    },
    updateAcceptedTermsOfUse: (
      state,
      action: PayloadAction<Partial<UpdateAcceptedTermsOfUse>>
    ) => {
      Object.assign(state, action.payload);
    },
  },
});

export const {
  updateRegister,
  resetRegister,
  updateProfileAvatarId,
  updateAcceptedTermsOfUse,
} = registerSlice.actions;
export default registerSlice.reducer;

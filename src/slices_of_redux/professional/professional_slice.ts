// redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UpdateProfessionalData {
  access_token?: string;
  is_authenticated?: boolean;
  id?: number;
  name?: string;
  email?: string;
  phone_number?: string;
  profession?: string;
  profile_avatar_id?: number;
  chat_code?: string;
}

interface ProfessionalDataSlice {
  access_token: string | null;
  is_authenticated: boolean;
  id: number | null;
  name: string;
  email: string;
  phone_number: string;
  profession: string;
  profile_avatar_id: number;
  chat_code: string;
}

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
    set_access_token: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload;
      state.is_authenticated = true;
    },
    update_professional_data: (
      state,
      action: PayloadAction<Partial<UpdateProfessionalData>>
    ) => {
      Object.assign(state, action.payload);
    },
    logout: () => initialState,
  },
});

export const { set_access_token, update_professional_data, logout } =
  professional_slice.actions;
export default professional_slice.reducer;

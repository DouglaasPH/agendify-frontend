// redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// types
import type { Availability } from "@/types/availability_types";

interface CustomerData {
  access_token: string;
  is_authenticated: boolean;
  id: null | number;
  name: string;
  email: string;
}

interface ProfessionalData {
  id: null | number;
  profile_avatar_dd: number;
  name: string;
  email: string;
  availabilities: Availability[];
}

interface CustomerState {
  customer_data: CustomerData;
  professional_data: ProfessionalData;
}

const initialState: CustomerState = {
  customer_data: {
    access_token: "",
    is_authenticated: false,
    id: null,
    name: "",
    email: "",
  },
  professional_data: {
    id: null,
    name: "",
    email: "",
    profile_avatar_dd: 0,
    availabilities: [],
  },
};

const customer_slice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    update_customer_data: (
      state,
      action: PayloadAction<Partial<CustomerData>>
    ) => {
      Object.assign(state.customer_data, action.payload);
    },
    update_professional_data: (
      state,
      action: PayloadAction<Partial<ProfessionalData>>
    ) => {
      Object.assign(state.professional_data, action.payload);
    },
    update_all_availabilities: (
      state,
      action: PayloadAction<Availability[]>
    ) => {
      state.professional_data.availabilities = action.payload;
    },
    logout: () => initialState,
  },
});

export const {
  update_customer_data,
  update_professional_data,
  update_all_availabilities,
  logout,
} = customer_slice.actions;
export default customer_slice.reducer;

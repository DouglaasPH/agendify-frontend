// redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// types
import type { Availability } from "@/types/availability";

interface CustomerData {
  id: null | number;
  name: string;
  email: string;
}

interface ProfessionalData {
  id: null | number;
  profileAvatarId: number;
  name: string;
  email: string;
  availabilities: Availability[];
}

interface CustomerState {
  auth: {
    accessToken: string;
    isAuthenticated: boolean;
  };
  customerData: CustomerData;
  professionalData: ProfessionalData;
}

const initialState: CustomerState = {
  auth: { accessToken: "", isAuthenticated: false },
  customerData: {
    id: null,
    name: "",
    email: "",
  },
  professionalData: {
    id: null,
    name: "",
    email: "",
    profileAvatarId: 0,
    availabilities: [],
  },
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setAccessTokenCustomer: (state, action: PayloadAction<string>) => {
      state.auth.accessToken = action.payload;
      state.auth.isAuthenticated = true;
    },
    logout: (state) => {
      state.auth.accessToken = "";
      state.auth.isAuthenticated = false;
    },
    updateCustomerData: (
      state,
      action: PayloadAction<Partial<CustomerData>>
    ) => {
      Object.assign(state.customerData, action.payload);
    },
    updateProfessionalData: (
      state,
      action: PayloadAction<Partial<ProfessionalData>>
    ) => {
      Object.assign(state.professionalData, action.payload);
    },
    updateAllAvailabilities: (state, action: PayloadAction<Availability[]>) => {
      state.professionalData.availabilities = action.payload;
    },
  },
});

export const {
  setAccessTokenCustomer,
  logout,
  updateCustomerData,
  updateProfessionalData,
  updateAllAvailabilities,
} = customerSlice.actions;
export default customerSlice.reducer;

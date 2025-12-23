// redux
import { configureStore } from "@reduxjs/toolkit";

// slices
import authReducer from "./features/auth/authSlice";
import customerSlice from "./features/auth/customerSlice";
import registerSlice from "./features/auth/registerSlice";
import userDataSlice from "./features/auth/userDataSlice";
import loadingSlice from "./features/loadingSlice";
import createAvailability from "./features/createAvailability/createAvailability";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerSlice,
    userData: userDataSlice,
    loading: loadingSlice,
    createAvailability: createAvailability,
    customer: customerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

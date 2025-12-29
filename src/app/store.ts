// redux
import { configureStore } from "@reduxjs/toolkit";

// slices
import professional_slice from "./slices_of_redux/professional/professional_slice";
import register_professional_slice from "./slices_of_redux/professional/register_professional_slice";
import customer_slice from "./slices_of_redux/customer/customer_slice";
import create_availability_slice from "./slices_of_redux/availability/create_availability_slice";
import loading_slice from "./slices_of_redux/loading/loading_slice";

export const redux = configureStore({
  reducer: {
    professional: professional_slice,
    register_professional: register_professional_slice,
    customer: customer_slice,
    create_availability: create_availability_slice,
    loading: loading_slice,
  },
});

export type RootState = ReturnType<typeof redux.getState>;
export type AppDispatch = typeof redux.dispatch;

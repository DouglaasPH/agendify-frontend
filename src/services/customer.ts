// Api data of connection
import api from "./api";

// All routes
import { ROUTES } from "./routes";

// Types used in more than one file
import type { Succesfully } from "@/types/common";

interface RegisterOrLoginWithoutCustomerIdData {
  name: string;
  email: string;
}

interface RegisterOrLoginResponse {
  data: {
    access_token: string;
    customer_data: {
      id: number;
      name: string;
      email: string;
    };
  };
}

interface VerifyChatCodeResponse {
  data: {
    id: number;
    name: string;
    profession: string;
    profileAvatarId: number;
  };
}

interface CreateAppointmentData {
  professional_id: number;
  availability_id: number;
}

export const registerOrLoginWithtoutCustomerIdApi = async (
  customer_data: RegisterOrLoginWithoutCustomerIdData
): Promise<RegisterOrLoginResponse> => {
  return await api.post(
    ROUTES.customer.registerOrLoginWithoutCustomerId,
    customer_data
  );
};

export const LoginWithCustomerIdApi = async (
  customer_id: number
): Promise<RegisterOrLoginResponse> => {
  return await api.post(ROUTES.customer.loginWithCustomerId(customer_id));
};

export const verifyChatCodeApi = async (
  chat_code: string
): Promise<VerifyChatCodeResponse> => {
  return await api.get(ROUTES.auth.getUserDataForCustomer(chat_code));
};

export const allAppointmentsApi = async (access_token: string) => {
  return await api.get(ROUTES.customer.allAppointments, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const createAppointmentsApi = async (
  access_token: string,
  data: CreateAppointmentData
): Promise<Succesfully> => {
  return await api.post(ROUTES.customer.createAppointment, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const cancelAppointmentsApi = async (
  access_token: string,
  appointmend_id: number
): Promise<Succesfully> => {
  console.log(access_token, appointmend_id);
  return await api.put(
    ROUTES.customer.cancelAppointment(appointmend_id),
    {},
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};

export const allAvailabilitiesApi = async (
  access_token: string,
  professional_id: number
) => {
  return await api.get(ROUTES.customer.allAvailabilities(professional_id), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

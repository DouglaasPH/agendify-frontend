// Api data of connection
import api from "./api_config";

// All routes
import { ROUTES } from "./routes";

interface RegisterOrLoginData {
  name: string;
  email: string;
}

interface Response {
  data: {
    access_token: {
      access_token: string;
      expires_in: number;
      token_type: string;
    };
    customer_data: {
      id: number;
      name: string;
      email: string;
    };
  };
}

export const request_to_register_or_login_customer = async (
  customer_data: RegisterOrLoginData
): Promise<Response> => {
  return await api.post(ROUTES.customer.register_or_login, customer_data);
};

export const request_to_login_with_id_for_customer = async (
  customer_id: number
): Promise<Response> => {
  return await api.post(ROUTES.customer.login_with_id(customer_id));
};

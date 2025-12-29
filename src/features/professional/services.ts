// Api data of connection
import api from "@/app/api_config";

// All routes
import { ROUTES } from "@/app/routes";

// types
import type {
  LoginRequest,
  LoginResponse,
  ProfessionalData,
  ProfessionalDataToModifyData,
  RegisterData,
  CheckEmailResponse,
} from "./types";
import type { Succesfully } from "@/shared/types/types";

export const request_to_login_for_professional = async (
  login_request: LoginRequest
): Promise<LoginResponse> => {
  const form_data = new FormData();
  form_data.append("username", login_request.email);
  form_data.append("password", login_request.password);

  return await api.post(ROUTES.professional.login, form_data, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
};

export const request_to_get_data_by_id_via_access_token_for_professional =
  async (access_token: string | null): Promise<ProfessionalData> => {
    return await api.get(ROUTES.professional.get_data_by_id_via_access_token, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    });
  };

export const request_to_generate_a_registration_token_for_register_professional =
  async (professional_data: RegisterData): Promise<Succesfully> => {
    return await api.post(
      ROUTES.professional.generate_verification_token,
      professional_data
    );
  };

export const request_to_register_professional = async (
  token: string
): Promise<LoginResponse> => {
  return await api.post(
    ROUTES.professional.register,
    { token },
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
};

export const request_to_check_email_of_professional = async (
  email: string
): Promise<CheckEmailResponse> => {
  return await api.get(ROUTES.professional.check_email(email), {
    withCredentials: true,
  });
};

export const request_to_professional_logout = async (
  access_token: string | null
): Promise<Succesfully> => {
  return await api.post(ROUTES.professional.logout, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

export const request_to_delete_professional = async (
  access_token: string | null
): Promise<Succesfully> => {
  return await api.delete(ROUTES.professional.delete, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

export const request_to_modify_data_of_professional = async (
  access_token: string | null,
  professiona_data: ProfessionalDataToModifyData
): Promise<ProfessionalData> => {
  return await api.put(ROUTES.professional.modify_data, professiona_data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const request_to_send_email_to_change_email_of_professional = async (
  access_token: string | null,
  new_email: string
): Promise<Succesfully> => {
  return await api.post(
    ROUTES.professional.send_email_to_change_email,
    { new_email },
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
};

export const request_to_confirm_email_modification_of_professional_with_token =
  async (token: string): Promise<Succesfully> => {
    return await api.put(
      ROUTES.professional.confirm_email_modification,
      { token },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

export const request_to_send_email_to_change_password_of_professional = async (
  email: string
): Promise<Succesfully> => {
  return await api.post(
    ROUTES.professional.send_email_to_change_password,
    { email },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const request_to_confirm_password_modification_of_professional_with_token =
  async (new_password: string, token: string): Promise<Succesfully> => {
    return await api.put(
      ROUTES.professional.confirm_password_modification,
      { new_password, token },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  };

export const request_to_get_professional_data_by_chat_code = async (
  chat_code: string
): Promise<ProfessionalData> => {
  return await api.get(ROUTES.professional.get_data_by_chat_code(chat_code));
};

export const request_to_modify_password_with_login_for_professional = async (
  access_token: string | null,
  old_password: string,
  new_password: string
): Promise<Succesfully> => {
  return await api.put(
    ROUTES.professional.modify_password_with_login,
    { new_password, old_password },
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
};

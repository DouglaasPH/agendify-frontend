export const ROUTES = {
  refresh_token: "/refresh-token/",
  professional: {
    check_email: (email: string) => `/professional/check-email/${email}`,
    get_data_by_id_via_access_token: "/professional",
    get_data_by_chat_code: (chat_code: string) => `/professional/${chat_code}`,
    modify_data: "/professional/modify-data",
    send_email_to_change_email: "/professional/send-email-to-change-email",
    send_email_to_change_password:
      "/professional/send-email-to-change-password",
    confirm_email_modification: "/professional/confirm-email-modification",
    confirm_password_modification:
      "/professional/confirm-password-modification", //OK
    generate_verification_token:
      "/professional/register/generate-verification-token",
    register: "/professional/register",
    login: "/professional/login",
    logout: "/professional/logout",
    delete: "/professional/delete",
    modify_password_with_login: "/professional/modify-password-with-login",
  },
  customer: {
    login_with_id: (customer_id: number) => `/customer/${customer_id}`,
    register_or_login: "/customer/",
  },
  availability: {
    create_by_professional: "/availability/professional/create",
    get_by_id_for_professional: (availability_id: number) =>
      `/availability/professional/get/${availability_id}`,
    list_for_professional: "/availability/professional/list",
    list_for_customer: (professional_id: number) =>
      `/availability/customer/list/${professional_id}`,
    delete_by_id_via_professional: (availability_id: number) =>
      `/availability/professional/delete/${availability_id}`,
  },
  appointment: {
    create_by_customer: "/appointment/customer/create",
    cancel_by_id_via_customer: (appointment_id: number) =>
      `/appointment/customer/cancel/${appointment_id}`,
    cancel_by_id_via_professional: (appointment_id: number) =>
      `/appointment/professional/cancel/${appointment_id}`,
    list_for_customer: "/appointment/customer/list",
    list_for_professional: "/appointment/professional/list",
    get_by_id_for_professional: (appointment_id: number) =>
      `/appointment/professional/get/${appointment_id}`,
  },
};

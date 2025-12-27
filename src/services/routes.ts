/* export const ROUTES = {
  auth: {
    login: "/auth/",
    register: "/auth/register",
    registerGenerateVerificationToken:
      "/auth/register/generate-verification-token",
    refresh: "/auth/refresh",
    logout: "/auth/logout",
    delete: "/auth/delete",
    checkEmail: (email: string) => `/auth/check-email/${email}`,
    getUserData: "/auth/",
    modifyUserData: "/auth/modify-user-data",
    sendEmailToChangeEmail: "/auth/send-email-to-change-email",
    modifyUserEmail: "/auth/modify-user-email",
    modifyUserPassword: "/auth/modify-user-password",
    forgotYourPassword: "auth/forgot-your-password",
    forgotYourPasswordResetPassword:
      "/auth/forgot-your-password/reset-password",
    getUserDataForCustomer: (chat_code: string) => `/auth/${chat_code}`,
  },
  appointment: {
    create: "/appointment",
    list: "/appointment/",
    get: (id: number) => `/appointment/${id}`,
    cancel: (id: number) => `/appointment/${id}`,
  },
  availability: {
    create: "/availability",
    list: "/availability",
    get: (id: number) => `/availability/${id}`,
    delete: (id: number) => `/availability/${id}`,
  },
  customer: {
    registerOrLoginWithoutCustomerId: "/customer/",
    loginWithCustomerId: (id: number) => `/customer/${id}`,
    allAppointments: "/customer/appointment",
    createAppointment: "/customer/appointment/create",
    cancelAppointment: (appointmend_id: number) =>
      `/customer/appointment/${appointmend_id}`,
    allAvailabilities: (professional_id: number) =>
      `/customer/availability/${professional_id}`,
  },
};
*/

export const ROUTES = {
  refresh_token: "/refresh-token", // OK
  professional: {
    check_email: (email: string) => `/professional/check-email/${email}`, // OK
    get_data_by_id_via_access_token: "/professional", // OK
    get_data_by_chat_code: (chat_code: string) => `/professional/${chat_code}`, // OK
    modify_data: "/professional/modify-data", // OK
    send_email_to_change_email: "/professional/send-email-to-change-email", // OK
    send_email_to_change_password:
      "/professional/send-email-to-change-password", // OK
    confirm_email_modification: "/professional/confirm-email-modification", // OK
    confirm_password_modification:
      "/professional/confirm-password-modification", //OK
    generate_verification_token: "/professional/generate-verification-token", // OK
    register: "/professional/register", // OK
    login: "/professional/login", // OK
    logout: "/professional/logout", // OK
    delete: "/professional/delete", // OK
    modify_password_with_login: "/professional/modify-password-with-login",
  },
  customer: {
    login_with_id: (customer_id: number) => `/customer/login/${customer_id}`, // OK
    register_or_login: "/customer/", // OK
  },
  availability: {
    create_by_professional: "/availability/professional/create", // OK
    get_by_id_for_professional: (availability_id: number) =>
      `/availability/professional/get/${availability_id}`, // OK
    list_for_professional: "/availability/professional/list", // OK
    list_for_customer: "/availability/customer/list", // OK
    delete_by_id_via_professional: (availability_id: number) =>
      `/availability/professional/delete/${availability_id}`, // OK
  },
  appointment: {
    create_by_customer: "/appointment/customer/create", // OK
    cancel_by_id_via_customer: (appointment_id: number) =>
      `/appointment/customer/cancel/${appointment_id}`, // OK
    cancel_by_id_via_professional: (appointment_id: number) =>
      `/appointment/professional/cancel/${appointment_id}`, // OK
    list_for_customer: "/appointment/customer/list", // OK
    list_for_professional: "/appointment/professional/list", // OK
    get_by_id_for_professional: (appointment_id: number) =>
      `/appointment/professional/get/${appointment_id}`,
  },
};

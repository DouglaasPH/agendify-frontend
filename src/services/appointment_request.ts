// Api data of connection
import api from "./api_config";

// All routes
import { ROUTES } from "./routes";

// Types used in more than one file
import type {
  Appointment,
  AppointmentListResponse,
} from "@/types/appointment_types";
import type { Succesfully } from "@/types/common_types";

interface AppointmentListData {
  availabilities_id?: number;
  status?: string;
  customer?: string;
  customer_email?: string;
  date?: string;
  start_time?: string;
  end_time?: string;
  slot_duration_minutes?: number;
}

interface AppointmentCreateData {
  professional_id: number;
  availability_id: number;
  customer_id: number;
}

export const request_to_create_appointment_by_customer = async (
  access_token: string | null,
  appointment_data: AppointmentCreateData
): Promise<Succesfully> => {
  return await api.post(
    ROUTES.appointment.create_by_customer,
    appointment_data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
};

export const request_to_cancel_appointment_by_id_via_customer = async (
  access_token: string | null,
  appointment_id: number
): Promise<Succesfully> => {
  return await api.delete(
    ROUTES.appointment.cancel_by_id_via_customer(appointment_id),
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
};

export const request_to_cancel_appointment_by_id_via_professional = async (
  access_token: string | null,
  appointment_id: number
): Promise<Succesfully> => {
  return await api.delete(
    ROUTES.appointment.cancel_by_id_via_professional(appointment_id),
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
};

export const request_to_list_appointment_by_customer = async (
  access_token: string | null
): Promise<AppointmentListResponse> => {
  return await api.post(ROUTES.appointment.list_for_customer, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

export const request_to_list_appointment_by_professional = async (
  access_token: string | null,
  filters: AppointmentListData
): Promise<AppointmentListResponse> => {
  return await api.post(ROUTES.appointment.list_for_professional, {
    filters,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

export const request_to_get_appointment_by_id_for_professional = async (
  access_token: string | null,
  appointmend_id: number
): Promise<Appointment> => {
  return await api.post(
    ROUTES.appointment.get_by_id_for_professional(appointmend_id),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
};

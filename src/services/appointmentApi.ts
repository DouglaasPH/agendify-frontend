// Api data of connection
import api from "./api";

// All routes
import { ROUTES } from "./routes";

// Types used in more than one file
import type { Appointment, AppointmentListResponse } from "@/types/appointment";
import type { Succesfully } from "@/types/common";

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

export const appointmentListApi = async (
  access_token: string | null,
  appointment_data?: Partial<AppointmentListData>
): Promise<AppointmentListResponse> => {
  console.log(access_token, appointment_data);
  return await api.get(ROUTES.appointment.list, {
    params: { ...appointment_data },
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

export const appointmentGetApi = async (
  appointment_id: number
): Promise<Appointment[]> => {
  return await api.get(ROUTES.appointment.get(appointment_id), {
    withCredentials: true,
  });
};

interface appointmentCreateData {
  user_id: number;
  availability_id: number;
  customer: string;
  customer_email: string;
}

export const appointmentCreateApi = async (
  access_token: string | null,
  appointment_data: appointmentCreateData
): Promise<Succesfully> => {
  return await api.post(ROUTES.appointment.create, appointment_data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

export const appointmentCancelApi = async (
  access_token: string | null,
  appointment_id: number
): Promise<Succesfully> => {
  return await api.delete(ROUTES.appointment.cancel(appointment_id), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

import type { Availability } from "../availability/types";

export interface Appointment {
  user_id: number;
  availabilities_id: number;
  customer: string;
  id: number;
  status: string;
  customer_email: string;
  availabilities: Availability;
}

export interface AppointmentListResponse {
  data: Appointment[];
}

export interface Appointment_data_for_page {
  id: number;
  firstColumn: { customer_name: string; customer_email: string };
  secondColumn: { week_day: string; date_formatted: string };
  thirdColumn: { start_time: string; end_time: string };
  fourthColumn: { slot_duration: number };
  fifthColumn: { status: string };
}

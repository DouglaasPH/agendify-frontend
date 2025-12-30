import type { Availability } from "@/shared/types/types";

export interface Appointment_data_for_page {
  id: number;
  firstColumn: { customer_name: string; customer_email: string };
  secondColumn: { week_day: string; date_formatted: string };
  thirdColumn: { start_time: string; end_time: string };
  fourthColumn: { slot_duration: number };
  fifthColumn: { status: string };
}

export interface AppointmentCreateData {
  professional_id: number;
  availability_id: number;
  customer_id: number;
}

export interface Appointment {
  id: number;
  availability_id: number;
  professional_id: number;
  customer_id: number;
  status: string;
  availability: Availability;
  customer: {
    id: number;
    name: string;
    email: string;
    status: string;
  };
}

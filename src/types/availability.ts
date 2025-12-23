import type { Appointment } from "./appointment";

export interface Availability {
  id: number;
  user_id: number;
  date: string;
  start_time: string;
  end_time: string;
  slot_duration_minutes: number;
  status: string;
  appointments?: Appointment;
}

export interface AvailabilityCreate {
  date: Date;
  start_time: Date;
  end_time: Date;
  slot_duration_minutes: number;
}

export interface Availabilities_data_for_page {
  id: number;
  firstColumn: { weekday: string; dateFormatted: string };
  secondColumn: { start_time: string; end_time: string };
  thirdColumn: { slot_duration: number };
  fourthColumn: { status: string };
  fifthColumn: { customer: string | undefined };
}

export type Filter = [string, string, [string, string]];

export interface TimeIntervals {
  start_time: string;
  end_time: string;
}

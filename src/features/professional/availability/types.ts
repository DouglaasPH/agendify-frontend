import type { Appointment } from "../appointment/types";

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
  firstColumn: { week_day: string; date_formatted: string };
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

export interface AvailabilityListData {
  availability_id: number;
  date?: string;
  start_time?: string;
  end_time?: string;
  slot_duration_minutes?: number;
  status?: string;
}

export interface AvailabilitiesListResponse {
  data: Availability[];
}

export interface DataCards {
  intervals: number;
  days: number;
  total_slots: number;
  hours_day: number;
}

export interface TimeIntervalsState {
  time_intervals: TimeIntervals[];
  data_cards: DataCards;
  dates: string[];
}

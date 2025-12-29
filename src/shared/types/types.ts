export interface Succesfully {
  msg: string;
}
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

export interface AppointmentListData {
  availabilities_id?: number;
  status?: string;
  customer?: string;
  customer_email?: string;
  date?: string;
  start_time?: string;
  end_time?: string;
  slot_duration_minutes?: number;
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

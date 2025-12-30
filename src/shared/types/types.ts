export interface Succesfully {
  msg: string;
}
export interface Availability {
  id: number;
  professional_id: number;
  date: string;
  start_time: string;
  end_time: string;
  slot_duration_minutes: number;
  status: string;
  appointments?: Appointment;
}

export interface Appointment {
  availability_id: number;
  customer_id: number;
  id: number;
  professional_id: number;
  status: string;
  availability: Availability;
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

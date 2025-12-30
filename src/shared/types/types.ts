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

export interface AvailabilityDataForProfessionalList {
  date: string;
  end_time: string;
  id: number;
  professional_id: number;
  slot_duration_minutes: number;
  start_time: string;
  status: string;
  appointments: {
    id: number;
    professional_id: number;
    status: string;
    customer: {
      email: string;
      id: number;
      name: string;
      status: string;
    };
  };
}

export interface AvailabilityListDataForProfessional {
  data: AvailabilityDataForProfessionalList[];
}

export interface AvailabilitiesListResponse {
  data: Availability[];
}

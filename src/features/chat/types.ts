import type { Availability } from "@/shared/types/types";

export interface ProfessionalDataType {
  id: number;
  name: string;
  profession: string;
  profile_avatar_id: number;
}

export interface CustomerDataType {
  name: string;
  email: string;
}

export type NewAppointment = {
  id: number | null;
  date: string;
  start_time: string;
  end_time: string;
};

export type Step =
  | "initial"
  | "selectDate"
  | "selectTime"
  | "confirmingAppointment"
  | "confirmedAppointment"
  | "schedulingFinalized"
  | "viewAppointments"
  | "cancelAppointment"
  | "botDidntUndestand";

export interface CustomerData {
  access_token: string;
  is_authenticated: boolean;
  id: null | number;
  name: string;
  email: string;
}

export interface ProfessionalData {
  id: null | number;
  profile_avatar_dd: number;
  name: string;
  email: string;
  availabilities: Availability[];
}

export interface CustomerState {
  customer_data: CustomerData;
  professional_data: ProfessionalData;
}

export interface UserDataType {
  id: number;
  name: string;
  profession: string;
  profileAvatarId: number;
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

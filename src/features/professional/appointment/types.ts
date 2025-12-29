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

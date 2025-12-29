// shadcn
import { Button } from "@/shared/ui/button";

// lucide
import { CircleCheckBig } from "lucide-react";

// redux
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

// api
import { request_to_create_appointment_by_customer } from "../../professional/services_appointment";

// utils
import { format_date, format_hours } from "@/shared/utils/utils";

// types
import type { NewAppointment, Step } from "../types";

type ConfirmingAppointmentProps = {
  newAppointment: NewAppointment | undefined;
  handleWithCustomerInteraction: (
    text: string,
    isForComponentData: string,
    step: Step
  ) => void;
};

function ConfirmingAppointment({
  newAppointment,
  handleWithCustomerInteraction,
}: ConfirmingAppointmentProps) {
  const access_token = useSelector(
    (state: RootState) => state.customer.customer_data.access_token
  );
  const customer_id = useSelector(
    (state: RootState) => state.customer.customer_data.id
  );

  const professional_id = useSelector(
    (state: RootState) => state.customer.professional_data.id
  );

  const handleOnConfirmingAppointment = async () => {
    if (
      professional_id == null ||
      newAppointment == undefined ||
      newAppointment.id == null
    )
      return;
    await request_to_create_appointment_by_customer(access_token, {
      professional_id: Number(professional_id),
      availability_id: Number(newAppointment?.id),
      customer_id: Number(customer_id),
    });
    const isForComponentData =
      format_date(newAppointment?.date).date_formatted +
      " at " +
      format_hours(newAppointment?.start_time) +
      " - " +
      format_hours(newAppointment?.end_time);
    handleWithCustomerInteraction(
      "Confirm Appointment",
      isForComponentData,
      "confirmedAppointment"
    );

    setTimeout(() => {
      handleWithCustomerInteraction("", "", "schedulingFinalized");
    }, 1000);
  };
  return (
    <div className="w-full flex justify-center items-center">
      <Button
        className="py-6 gap-3 border-2 shadow-sm bg-gradient-to-br from-green-600 to-green-700 text-white border-none transform transition-transform duration-200 hover:scale-105 cursor-pointer"
        onClick={handleOnConfirmingAppointment}
      >
        <CircleCheckBig />
        <span className="font-medium">Confirm Appointment</span>
      </Button>
    </div>
  );
}

export default ConfirmingAppointment;

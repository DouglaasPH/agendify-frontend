// shadcn
import { Button } from "@/components/ui/button";

// lucide
import { CircleCheckBig } from "lucide-react";

// redux
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

// api
import { createAppointmentsApi } from "@/services/customer";

// utils
import { formatDate, formatHours } from "@/lib/utils";

// types
import type { NewAppointment, Step } from "@/types/chat";

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
    (state: RootState) => state.customer.auth.accessToken
  );

  const professional_id = useSelector(
    (state: RootState) => state.customer.professionalData.id
  );

  const handleOnConfirmingAppointment = async () => {
    if (
      professional_id == null ||
      newAppointment == undefined ||
      newAppointment.id == null
    )
      return;
    const fetchAPI = await createAppointmentsApi(access_token, {
      professional_id: Number(professional_id),
      availability_id: Number(newAppointment?.id),
    });
    const isForComponentData =
      formatDate(newAppointment?.date).dateFormatted +
      " at " +
      formatHours(newAppointment?.start_time) +
      " - " +
      formatHours(newAppointment?.end_time);
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

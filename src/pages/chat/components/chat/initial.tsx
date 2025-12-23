// lucide
import { Calendar, Clock } from "lucide-react";

// shadcn
import { Button } from "@/components/ui/button";

// types
import type { Step } from "@/types/chat";

type InitialProps = {
  handleWithCustomerInteraction: (
    text: string,
    isForComponentData: string,
    step: Step
  ) => void;
};

function Initial({ handleWithCustomerInteraction }: InitialProps) {
  const possibleMessages = {
    toBookAppointment: "Book an Appointment",
    toViewMyAppointments: "View my Appointments",
  };

  const handleOnButton = (step: Step, text: string) => {
    handleWithCustomerInteraction(text, "", step);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-5">
      <Button
        className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 border-none py-6 flex gap-3 items-center shadow-lg hover:bg-blue-50 cursor-pointer transform transition-transform duration-200 hover:scale-105"
        onClick={() =>
          handleOnButton("selectDate", possibleMessages.toBookAppointment)
        }
      >
        <Calendar className="size-5 text-blue-400" strokeWidth={2.5} />
        <span className="text-md text-blue-400 font-medium">
          Book an Appointment
        </span>
      </Button>
      <Button
        className="bg-gradient-to-r from-teal-200 via-teal-100 to-teal-200 border-none py-6 flex gap-4 items-center shadow-md hover:bg-blue-50 hover:border-blue-200 cursor-pointer transform transition-transform duration-200 hover:scale-105"
        onClick={() =>
          handleOnButton(
            "viewAppointments",
            possibleMessages.toViewMyAppointments
          )
        }
      >
        <Clock className="size-5 text-teal-400" strokeWidth={2.5} />
        <span className="text-md text-teal-400 font-medium">
          View My Appointment
        </span>
      </Button>
    </div>
  );
}

export default Initial;

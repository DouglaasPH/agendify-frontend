// react
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

// shadcn
import { Card } from "@/components/ui/card";

// lucide
import { Clock } from "lucide-react";

// types
import type { Availability } from "@/types/availability";
import type { NewAppointment, Step } from "@/types/chat";

// redux
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

// utils
import { formatHours } from "@/lib/utils";

type SelectTimeProps = {
  newAppointment: NewAppointment | undefined;
  setNewAppointment: Dispatch<SetStateAction<NewAppointment>>;
  handleWithCustomerInteraction: (
    text: string,
    isForComponentData: string,
    step: Step
  ) => void;
};

function SelectTime({
  newAppointment,
  setNewAppointment,
  handleWithCustomerInteraction,
}: SelectTimeProps) {
  const allAvailabilities = useSelector(
    (state: RootState) => state.customer.professionalData.availabilities
  );
  const [sameDateAvailability, setSameDateAvailability] = useState<
    Availability[]
  >([]);

  useEffect(() => {
    setSameDateAvailability(
      allAvailabilities.filter(
        (availability) => availability.date === newAppointment?.date
      )
    );
  }, []);

  const handleOnClickAvailability = (availability: Availability) => {
    setNewAppointment({
      date: availability.date,
      id: availability.id,
      start_time: availability.start_time,
      end_time: availability.end_time,
    });
    const text =
      formatHours(availability.start_time) +
      " - " +
      formatHours(availability.end_time);
    handleWithCustomerInteraction(text, text, "confirmingAppointment");
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5`}
      >
        {sameDateAvailability.map((availability) => (
          <Card
            className="shadow-md h-30 w-60 flex justify-center items-center gap-2 p-0 border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-100 transform transition-transform duration-200 hover:scale-105 cursor-pointer"
            onClick={() => handleOnClickAvailability(availability)}
          >
            <Clock className="text-purple-500" />
            <div className="flex flex-col text-center gap-0">
              <span className="font-medium text-gray-800">
                {formatHours(availability.start_time)}
              </span>
              <span className="text-sm text-gray-600">
                {formatHours(availability.end_time)}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default SelectTime;

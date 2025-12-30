// react
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

// shadcn
import { Calendar } from "@/shared/ui/calendar";

// api
import { request_to_list_availability_for_customer } from "../../professional/services_availability";

// redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { update_all_availabilities } from "../slice";

// utils
import { format_date } from "@/shared/utils/utils";

// types
import type { Availability } from "@/shared/types/types";
import type { NewAppointment, Step } from "../types";

type SelectDate = {
  setNewAppointment: Dispatch<SetStateAction<NewAppointment>>;
  handleWithCustomerInteraction: (
    text: string,
    isForComponentData: string,
    step: Step
  ) => void;
};

function SelectDate({
  setNewAppointment,
  handleWithCustomerInteraction,
}: SelectDate) {
  const dispatch = useDispatch();
  const access_token = useSelector(
    (state: RootState) => state.customer.customer_data.access_token
  );
  const professional_id = useSelector(
    (state: RootState) => state.customer.professional_data.id
  );
  const [allAvailabilities, setAllAvailabilities] = useState<Availability[]>();

  useEffect(() => {
    const fetch = async () => {
      if (professional_id == null) return;
      const fetchAPI = await request_to_list_availability_for_customer(
        access_token,
        professional_id
      );
      dispatch(update_all_availabilities(fetchAPI.data));
      setAllAvailabilities(fetchAPI.data);
    };
    fetch();
  }, []);

  const handleOnSelectDate = (date: Date | undefined) => {
    if (!date) return;

    const formatted_date = date.toISOString().split("T")[0];
    const text = format_date(date).date_formatted;
    setNewAppointment({
      date: formatted_date,
      start_time: "",
      end_time: "",
      id: null,
    });
    handleWithCustomerInteraction(text, text, "selectTime");
  };

  return (
    <div className="flex flex-col justify-between items-center h-112">
      <Calendar
        mode="single"
        onSelect={handleOnSelectDate}
        className="rounded-md border-2 border-blue-200 shadow-sm w-sm h-full"
        captionLayout="dropdown"
        disabled={(date) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const isPast = date < today;
          if (allAvailabilities?.length == undefined) return false;
          const isAllowed = allAvailabilities.some(
            (availability: Availability) =>
              availability.date === date.toISOString().split("T")[0]
          );

          return isPast || !isAllowed;
        }}
      />
    </div>
  );
}

export default SelectDate;

// react
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

// shadcn
import { Calendar } from "@/components/ui/calendar";

// api
import { allAvailabilitiesApi } from "@/services/customer";

// redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { updateAllAvailabilities } from "@/features/auth/customerSlice";

// utils
import { formatDate } from "@/lib/utils";

// types
import type { Availability } from "@/types/availability";
import type { NewAppointment, Step } from "@/types/chat";

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
    (state: RootState) => state.customer.auth.accessToken
  );
  const professional_id = useSelector(
    (state: RootState) => state.customer.professionalData.id
  );
  const [allAvailabilities, setAllAvailabilities] = useState<Availability[]>();

  useEffect(() => {
    console.log(access_token);
    const fetch = async () => {
      if (professional_id == null) return;
      const fetchAPI = await allAvailabilitiesApi(
        access_token,
        professional_id
      );
      dispatch(updateAllAvailabilities(fetchAPI.data));
      setAllAvailabilities(fetchAPI.data);
      console.log(fetchAPI.data);
    };
    fetch();
  }, []);

  const handleOnSelectDate = (date) => {
    const formatted_date = date.toISOString().split("T")[0];
    const text = formatDate(date).dateFormatted;
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

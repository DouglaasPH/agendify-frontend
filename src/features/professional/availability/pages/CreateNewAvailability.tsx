// react
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { reset } from "../slice";

// shadcn
import { Button } from "@/shared/ui/button";

// lucide
import { Save } from "lucide-react";

// components
import Cards from "../components/CardsForCreateNewAvailability";
import TimeSlotsAndSelectDateCard from "../components/TimeSlotsAndSelectDateCard";
import TitleAndDescriptionComponent from "../components/TitleAndDescriptionComponentForCreateNewAvailability";
import Overview from "../components/Overview";

// API
import { request_to_create_availability_by_professional } from "../../services_availability";

// types
import type { AvailabilityCreate } from "../types";

function CreateNewAvailabilityPage() {
  const data_for_create_availability = useSelector(
    (state: RootState) => state.create_availability
  );
  const access_token = useSelector(
    (state: RootState) => state.professional.access_token
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCancelButton = () => {
    dispatch(reset());
    navigate("/professional/dashboard");
  };
  const onCreateAvailabilityButton = () => {
    const allRequest: AvailabilityCreate[] =
      data_for_create_availability.dates.flatMap((date) =>
        data_for_create_availability.time_intervals.map((interval) => {
          const [startH, startM] = interval.start_time.split(":").map(Number);
          const [endH, endM] = interval.end_time.split(":").map(Number);

          const startDateTime = new Date(date);
          startDateTime.setHours(startH, startM, 0, 0);

          const endDateTime = new Date(date);
          endDateTime.setHours(endH, endM, 0, 0);

          const slot_duration_minutes =
            (endDateTime.getTime() - startDateTime.getTime()) / 60000;

          const onlyDate = new Date(date).toISOString().split("T")[0];

          return {
            date: onlyDate,
            start_time: startDateTime,
            end_time: endDateTime,
            slot_duration_minutes,
          };
        })
      );

    for (const request of allRequest) {
      console.log(request);
      request_to_create_availability_by_professional(access_token, request);
    }
    navigate("/professional/dashboard");
    dispatch(reset());
  };

  return (
    <main className="flex flex-col gap-10 pb-50">
      <TitleAndDescriptionComponent />

      {/* main section */}
      <section className="flex flex-col justify-center items-center gap-10 px-5 lg:px-20 w-full">
        <Cards />

        {/* main div */}
        <div className="w-full grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-[64%_34%] justify-between">
          <div className="grid grid-cols-1 gap-10">
            <TimeSlotsAndSelectDateCard />
            <div className="w-full grid grid-cols-[77%_20%] justify-between">
              <Button
                className={`bg-green-600/40 hover:bg-green-600/40 py-6 cursor-pointer ${
                  data_for_create_availability.dates.length > 0 &&
                  data_for_create_availability.time_intervals.length > 0
                    ? "bg-green-600 hover:bg-green-600/90 cursor-pointer"
                    : "bg-green-600/40 hover:bg-green-600/40 cursor-default"
                }`}
                onClick={() =>
                  data_for_create_availability.dates.length > 0 &&
                  data_for_create_availability.time_intervals.length > 0
                    ? onCreateAvailabilityButton()
                    : null
                }
              >
                <Save />
                <span>Create Availability</span>
              </Button>
              <Button
                variant={"outline"}
                className="py-6 cursor-pointer"
                onClick={() => onCancelButton()}
              >
                Cancel
              </Button>
            </div>
          </div>
          <Overview />
        </div>
      </section>
    </main>
  );
}

export default CreateNewAvailabilityPage;

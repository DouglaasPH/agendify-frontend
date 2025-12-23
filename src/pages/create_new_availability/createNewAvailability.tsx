// react
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { reset } from "@/features/createAvailability/createAvailability";

// shadcn
import { Button } from "@/components/ui/button";

// lucide
import { Save } from "lucide-react";

// components
import Cards from "./components/Cards";
import TimeSlotsAndSelectDateCard from "./components/TimeSlotsAndSelectDateCard";
import TitleAndDescriptionComponent from "./components/TitleAndDescriptionComponent";
import Overview from "./components/Overview";

// API
import { availabilityCreateApi } from "@/services/availability";

// types
import type { AvailabilityCreate } from "@/types/availability";

function CreateNewAvailabilityPage() {
  const { dates, timeIntervals } = useSelector(
    (state: RootState) => state.createAvailability
  );
  const createAvailabilityData = useSelector(
    (state: RootState) => state.createAvailability
  );
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCancelButton = () => {
    dispatch(reset());
    navigate("/user/dashboard");
  };
  const onCreateAvailabilityButton = () => {
    const allRequest: AvailabilityCreate[] = dates.flatMap((date) =>
      timeIntervals.map((interval) => {
        const [startH, startM] = interval.start_time.split(":").map(Number);
        const [endH, endM] = interval.end_time.split(":").map(Number);

        const startDateTime = new Date(date);
        startDateTime.setHours(startH, startM, 0, 0);

        const endDateTime = new Date(date);
        endDateTime.setHours(endH, endM, 0, 0);

        const slot_duration_minutes =
          (endDateTime.getTime() - startDateTime.getTime()) / 60000;

        return {
          date: startDateTime.toISOString().split("T")[0],
          start_time: startDateTime.toISOString(),
          end_time: endDateTime.toISOString(),
          slot_duration_minutes,
        };
      })
    );

    for (const request of allRequest) {
      availabilityCreateApi(access_token, request);
    }
    navigate("/user/dashboard");
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
                  createAvailabilityData.dates.length > 0 &&
                  createAvailabilityData.timeIntervals.length > 0
                    ? "bg-green-600 hover:bg-green-600/90 cursor-pointer"
                    : "bg-green-600/40 hover:bg-green-600/40 cursor-default"
                }`}
                onClick={() =>
                  createAvailabilityData.dates.length > 0 &&
                  createAvailabilityData.timeIntervals.length > 0
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

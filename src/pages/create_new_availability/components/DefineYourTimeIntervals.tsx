// lucide
import { ChevronRight, Plus, Trash2 } from "lucide-react";

// shadcn-ui
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";

// motion
import { AnimatePresence, motion } from "motion/react";

// redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { setTimeIntervals } from "@/features/createAvailability/createAvailability";

// types
import type { TimeIntervals } from "@/types/availability";

type TimeIntervalsProps = {
  setCurrentSection: (data: string) => void;
};

function DefineYourTimeIntervals({ setCurrentSection }: TimeIntervalsProps) {
  const dispatch = useDispatch();
  const timeIntervals = useSelector(
    (state: RootState) => state.createAvailability.timeIntervals
  );

  const changeInput = (
    timeIntervalIndex: number,
    values: Partial<TimeIntervals>
  ) => {
    // copia do array para evitar mutação direta
    const newTimeIntervals = [...timeIntervals];

    // atualiza apenas o item no índice selecionado
    newTimeIntervals[timeIntervalIndex] = {
      ...newTimeIntervals[timeIntervalIndex],
      ...values,
    };

    console.log(newTimeIntervals);

    dispatch(setTimeIntervals(newTimeIntervals));
  };

  {
    /* logic for next section */
  }
  const onButtonNextSelectDates = () => {
    {
      /* verify if the intervals have start_time and end_time filed in */
    }
    const verifyIntervals = timeIntervals.filter(
      (timeInterval) =>
        timeInterval.start_time === "" && timeInterval.end_time === ""
    );

    {
      /* all intervals are correct */
    }
    if (verifyIntervals.length === 0) {
      setCurrentSection("Select Dates");
    } else {
      toast("Verify your intervals", {
        description: "You have some interval with indefinite time.",
      });
    }
  };

  return (
    <section className="flex flex-col items-center gap-5 px-10">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#ffffff",
            color: "#dc2626",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          },
        }}
      />
      {/* Title and description */}
      <div className="w-full flex flex-col gap-1">
        <h4 className="font-semibold">Define Your Time Intervals</h4>
        <p className="text-sm text-gray-500">
          Set your available time slots for each day
        </p>
      </div>

      {/* Time Intervals */}
      <div className="w-full grid grid-cols-1 gap-5">
        <AnimatePresence>
          {timeIntervals.map((timeInterval: TimeIntervals, index) => (
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-5 rounded-xl bg-blue-100 border-2 border-blue-200 flex flex-col gap-4"
            >
              {/* title and remove button */}
              <div className="w-full flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="bg-blue-500 py-1 px-2.5 rounded-md text-white font-bold text-sm">
                    {index + 1}
                  </p>
                  <h4 className="font-semibold">Time Interval {index + 1}</h4>
                </div>
                {timeIntervals.length > 1 ? (
                  <Trash2
                    className="size-4 md:size-5 text-red-600 cursor-pointer"
                    onClick={() => {
                      if (timeIntervals.length > 1) {
                        const newTimeIntervals = timeIntervals.filter(
                          (currentTimeIntervals) =>
                            currentTimeIntervals !== timeInterval
                        );
                        dispatch(setTimeIntervals(newTimeIntervals));
                      }
                    }}
                  />
                ) : null}
              </div>

              {/* start_time and end_time input */}
              <div className="grid grid-cols-[44%_44%] justify-between">
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-sm text-gray-600">
                    Start Time
                  </p>
                  <input
                    className="w-full bg-white p-2 pl-3 rounded-md text-sm"
                    type="time"
                    value={timeInterval.start_time}
                    onChange={(e) =>
                      changeInput(index, { start_time: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-sm text-gray-600">End Time</p>
                  <input
                    className="w-full bg-white p-2 pl-3 rounded-md text-sm"
                    type="time"
                    value={timeInterval.end_time}
                    onChange={(e) =>
                      changeInput(index, { end_time: e.target.value })
                    }
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add another interval button and next select dates button*/}
      <div className="flex flex-col gap-10 items-end w-full">
        <Button
          className="bg-white text-black border-2 border-dashed border-blue-300 w-full hover:bg-blue-100 cursor-pointer"
          onClick={() => {
            const newTimeIntervals = [...timeIntervals];
            newTimeIntervals.push({ start_time: "00:00", end_time: "00:00" });
            dispatch(setTimeIntervals(newTimeIntervals));
          }}
        >
          <Plus />
          <span>Add Another Interval</span>
        </Button>
        <Button
          className="bg-blue-600 flex justify-between items-center  hover:bg-blue-700 cursor-pointer"
          onClick={onButtonNextSelectDates}
        >
          <span>Next: Select Dates</span>
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
}

export default DefineYourTimeIntervals;

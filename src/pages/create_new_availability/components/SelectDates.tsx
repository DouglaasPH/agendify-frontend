// react
import { useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";

// shadcn
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

// components
import { setDates } from "@/features/createAvailability/createAvailability";

function SelectDates() {
  const dispatch = useDispatch();
  const availableDatesTS = useSelector(
    (rootState: RootState) => rootState.createAvailability.dates
  ).map((date: string) => new Date(date));
  const [selectedDates, setSelectedDates] = useState<Date[]>(availableDatesTS);

  useEffect(() => {
    const availableDatesISO = selectedDates.map((date: Date) =>
      date.toISOString()
    );
    dispatch(setDates(availableDatesISO));
  }, [selectedDates]);

  const onQuickApply = (numberOfDays: number) => {
    let lastDate = new Date();

    if (selectedDates.length > 0) {
      const farthestDate = new Date(
        Math.max(...selectedDates.map((d) => new Date(d).getTime()))
      );
      lastDate = farthestDate;
    }

    const newDates: Date[] = [];

    for (let i = 1; i <= numberOfDays; i++) {
      const newDate = new Date(lastDate);
      newDate.setDate(lastDate.getDate() + i);
      newDates.push(newDate);
    }

    setSelectedDates((prevDates) => [...prevDates, ...newDates]);
  };

  return (
    <section className="flex flex-col items-center gap-5 px-10">
      {/* Title and description */}
      <div className="w-full flex flex-col gap-1">
        <h4 className="font-semibold">Choose your Dates</h4>
        <p className="text-sm text-gray-500">
          Select which days to apply your time intervals
        </p>
      </div>

      {/* quick apply */}
      <Card className="py-4 px-5 gap-3 w-full bg-gradient-to-r from-blue-50 to-purple-50">
        <p className="font-semibold text-gray-700 text-md">Quick Apply:</p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => onQuickApply(7)}>
            Next 7 Days
          </Button>
          <Button variant="outline" onClick={() => onQuickApply(30)}>
            Next 30 Days
          </Button>
        </div>
      </Card>

      {/* calendar */}
      <Calendar
        mode="multiple"
        required={false}
        selected={selectedDates}
        onSelect={(dates) => {
          if (dates) setSelectedDates(dates);
        }}
        className="rounded-lg border w-sm"
        disabled={{ before: new Date() }}
      />
    </section>
  );
}

export default SelectDates;

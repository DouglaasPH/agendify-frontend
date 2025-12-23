// react
import { useState } from "react";

// shadcn
import { Card } from "@/components/ui/card";

// motion
import { motion } from "motion/react";

// components
import DefineYourTimeIntervals from "./DefineYourTimeIntervals";
import SelectDates from "./SelectDates";

function TimeSlotsAndSelectDateCard() {
  const [currentSection, setCurrentSection] = useState("Time Slots");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1.5 }}
    >
      <Card>
        {/* selection input */}
        <section className="px-5 md:px-10 pb-10 border-b-1 border-b-gray-200">
          <div className="h-11 bg-gray-200 py-1 rounded-xl grid grid-cols-[50%_50%] px-1">
            <button
              className={`rounded-xl font-semibold text-md flex justify-center items-center gap-2 cursor-pointer ${
                currentSection === "Time Slots" ? "bg-white" : null
              }`}
              onClick={() => setCurrentSection("Time Slots")}
            >
              <span className="bg-blue-100 leading-none py-1 px-2 rounded-full text-sm text-blue-600">
                1
              </span>
              Time Slots
            </button>
            <button
              className={`rounded-xl font-semibold text-md flex justify-center items-center gap-2 cursor-pointer ${
                currentSection === "Select Dates" ? "bg-white" : null
              }`}
              onClick={() => setCurrentSection("Select Dates")}
            >
              <span className="bg-green-100 leading-none py-1 px-2 rounded-full text-sm text-green-600">
                2
              </span>{" "}
              Select Dates
            </button>
          </div>
        </section>
        {/* show "Define Your Time Intervals" or "Choose Your Dates" */}
        <section>
          {currentSection === "Time Slots" ? (
            <DefineYourTimeIntervals setCurrentSection={setCurrentSection} />
          ) : (
            <SelectDates />
          )}
        </section>
      </Card>
    </motion.div>
  );
}

export default TimeSlotsAndSelectDateCard;

// react
import { useEffect, useState } from "react";

// shadcn
import { Card } from "@/components/ui/card";

// lucide
import { CalendarDays } from "lucide-react";

// motion
import { motion } from "motion/react";

// type
import type { Appointment_data_for_page } from "@/types/appointment";

type TitleAndStatusProps = {
  appointmentsData: Appointment_data_for_page[];
};

function TitleAndStatus({ appointmentsData }: TitleAndStatusProps) {
  const [confirmed, setConfirmed] = useState(0);
  const [canceled, setCanceled] = useState(0);
  const [past, setPast] = useState(0);

  useEffect(() => {
    let confirmedCount = 0;
    let canceledCount = 0;
    let pastCount = 0;

    appointmentsData.forEach((appointment) => {
      const status = appointment.fifthColumn.status;

      if (status.toLowerCase() === "confirmed") confirmedCount++;
      else if (status.toLowerCase() === "canceled") canceledCount++;
      else if (status.toLowerCase() === "past") pastCount++;
    });

    setConfirmed(confirmedCount);
    setCanceled(canceledCount);
    setPast(pastCount);
  }, [appointmentsData]);

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="pt-25 pb-10 px-10 lg:px-20 bg-white border-b-2 border-b-gray-200 shadow-md flex flex-col md:flex-row justify-between items-center md:gap-0 gap-10"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col gap-2"
      >
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600">
            <CalendarDays className="size-6 text-white" />
          </div>
          <span className="text-lg font-medium text-gray-700">
            Appointments
          </span>
        </div>
        <p className="text-muted-foreground">
          Manage your scheduled sessions with clients.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex gap-5 md:h-20 flex-col md:flex-row w-full md:w-auto"
      >
        <Card className="flex flex-col gap-1 text-center items-center justify-center px-5 bg-green-50 border-2 border-green-100 md:w-30 w-full">
          <span className="font-bold text-3xl text-green-600">{confirmed}</span>
          <span className="font-regular text-sm text-green-600">Confirmed</span>
        </Card>
        <Card className="flex flex-col gap-1 text-center items-center justify-center px-5 bg-red-50 border-2 border-red-100 md:w-30 w-full">
          <span className="font-bold text-3xl text-red-600">{canceled}</span>
          <span className="font-regular text-sm text-red-600">Canceled</span>
        </Card>
        <Card className="flex flex-col gap-1 text-center items-center justify-center px-5 bg-gray-50 border-2 border-gray-100 md:w-30 w-full">
          <span className="font-bold text-3xl text-gray-600">{past}</span>
          <span className="font-regular text-sm text-gray-600">Past</span>
        </Card>
      </motion.div>
    </motion.section>
  );
}

export default TitleAndStatus;

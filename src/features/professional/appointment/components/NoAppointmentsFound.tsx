// shadcn/ui
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

// lucide
import { Calendar } from "lucide-react";

// motion
import { motion } from "motion/react";

type NoAvailabilitiesFoundProps = {
  handleClearFilters: () => void;
};

function NoAppointmentFound({
  handleClearFilters,
}: NoAvailabilitiesFoundProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="flex justify-center items-center w-full py-30"
    >
      <CardContent className="flex flex-col items-center gap-8">
        <div className="bg-gray-100 p-6 rounded-full">
          <Calendar className="size-12 text-gray-400" />
        </div>
        <div className="text-center flex flex-col gap-2 w-md">
          <h4 className="font-semibold text-xl text-gray-700">
            No appointments found
          </h4>
          <p className="text-gray-400">
            No appointments match your current filters, or you don't have any
            appointments. Try adjusting your search criteria.
          </p>
        </div>
        <div>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => handleClearFilters()}
          >
            <span>Clear Filters</span>
          </Button>
        </div>
      </CardContent>
    </motion.div>
  );
}

export default NoAppointmentFound;

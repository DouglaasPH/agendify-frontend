// react
import { useNavigate } from "react-router-dom";

// shadcn/ui
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

// lucide
import { Calendar, Plus } from "lucide-react";

// motion
import { motion } from "motion/react";

type NoAvailabilitiesFoundProps = {
  handleClearFilters: () => void;
};

function NoAvailabilitiesFound({
  handleClearFilters,
}: NoAvailabilitiesFoundProps) {
  const navigate = useNavigate();
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
        <div className="text-center">
          <h4 className="font-semibold text-xl text-gray-700">
            No availabilities found
          </h4>
          <p className="text-gray-400">
            No availabilities match your current filters. Try adjusting your
            search criteria.
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            className="flex items-center justify-between bg-blue-600 hover:bg-blue-500 cursor-pointer "
            onClick={() => navigate("create")}
          >
            <Plus /> <span>Add New Availability</span>
          </Button>
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

export default NoAvailabilitiesFound;

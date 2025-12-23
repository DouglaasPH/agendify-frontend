// react
import { useState } from "react";

// shadcn
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";

// lucide
import {
  CalendarDays,
  ChevronDownIcon,
  Clock,
  Funnel,
  Search,
} from "lucide-react";

// motion
import { motion } from "motion/react";

// utils
import type { Appointment_data_for_page } from "@/types/appointment";

// types
import { similarity } from "@/lib/utils";

type FiltersProps = {
  appointmentsData: Appointment_data_for_page[];
  tableDataToView: Appointment_data_for_page[];
  setTableDataToView: (data: Appointment_data_for_page[]) => void;
  handleSetFilters: (index: number, newFilter: string) => void;
};

function Filters({
  appointmentsData,
  tableDataToView,
  setTableDataToView,
  handleSetFilters,
}: FiltersProps) {
  const [status, setStatus] = useState("All Status");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");

  function searchRows(data: Appointment_data_for_page[], query: string) {
    const normalizedQuery = query.toLowerCase().trim();

    return data.filter((item) => {
      const values = [
        item.firstColumn.customer_name,
        item.firstColumn.customer_email || "",
      ];

      return values.some((value) => {
        const val = value.toString().toLowerCase();
        return (
          val.includes(normalizedQuery) ||
          similarity(val, normalizedQuery) > 0.7
        );
      });
    });
  }

  const insertSearch = (e) => {
    if (e.target.value.length === 0) {
      setTableDataToView(appointmentsData);
    } else {
      const newTableDataToView = searchRows(tableDataToView, e.target.value);
      setTableDataToView(newTableDataToView);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.0, duration: 0.4 }}
      className="w-full"
    >
      <Card className="relative w-full grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-[57%_13%_13%_13%] justify-between items-center xl:gap-0 px-5 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
          className="relative col-auto sm:col-span-3 xl:col-auto"
        >
          <Input
            placeholder="Search by name or email..."
            className="bg-gray-100 border-1 pl-12 rounded-xl"
            onChange={() => insertSearch(event)}
          />
          <Search className="absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2 size-5 text-gray-400" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          <Select
            value={status}
            onValueChange={(value) => {
              setStatus(value);
              handleSetFilters(0, value);
            }}
          >
            <SelectTrigger className="bg-gray-100 m-0 border-1 rounded-xl w-full relative pl-10">
              <Funnel className="absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2 size-4 text-gray-500" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="All Status" value="All Status">
                All Status
              </SelectItem>
              <SelectItem key="Confirmed" value="Confirmed">
                Confirmed
              </SelectItem>
              <SelectItem key="Canceled" value="Canceled">
                Canceled
              </SelectItem>
              <SelectItem key="Past" value="Past">
                Past
              </SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.4 }}
        >
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              asChild
              className="bg-gray-100 m-0 border-1 rounded-xl w-full"
            >
              <Button
                variant="outline"
                id="date"
                className="w-48 relative justify-between font-normal"
              >
                <CalendarDays className="absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2 size-4 text-gray-500" />
                <span className="pl-8">
                  {date ? date.toLocaleDateString() : "Select date"}
                </span>
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date);
                  setOpen(false);
                  handleSetFilters(1, date ? date.toISOString() : "");
                }}
              />
            </PopoverContent>
          </Popover>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.4 }}
          className="relative"
        >
          <Input
            type="time"
            className="bg-gray-100 m-0 border-1 rounded-xl w-full relative pl-10 input-no-icon"
            value={time}
            onChange={(value) => {
              setTime(value.target.value);
              handleSetFilters(2, value.target.value);
            }}
          />
          <Clock className="absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2 size-4 text-gray-500" />
        </motion.div>
      </Card>
    </motion.div>
  );
}

export default Filters;

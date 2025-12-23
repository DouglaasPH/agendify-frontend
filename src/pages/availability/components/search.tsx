// shadcn/ui
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// lucide
import { Calendar, Funnel, Search } from "lucide-react";

// motion
import { motion } from "motion/react";

// utils
import { similarity } from "@/lib/utils";

// types
import type {
  Availabilities_data_for_page,
  Filter,
} from "@/types/availability";

type SearchProps = {
  filters: Filter;
  availabilitiesData: Availabilities_data_for_page[];
  tableDataToView: Availabilities_data_for_page[];
  setTableDataToView: (data: Availabilities_data_for_page[]) => void;
  handleSortRows: (
    selectionIndex: number,
    typeOrder: string,
    direction: string
  ) => void;
};

function SearchComponent({
  filters,
  handleSortRows,
  availabilitiesData,
  tableDataToView,
  setTableDataToView,
}: SearchProps) {
  const selects = [
    {
      icon: Funnel,
      items: ["All Status", "Available", "Occupied", "Past"],
    },
    {
      icon: Calendar,
      items: ["All Dates", "This Week", "This Month", "Past Only"],
    },
    {
      items: ["Date", "Time", "Duration", "Status"],
    },
  ];

  const insertSearch = (e) => {
    if (e.target.value.length === 0) {
      setTableDataToView(availabilitiesData);
    } else {
      const newTableDataToView = searchRows(tableDataToView, e.target.value);
      setTableDataToView(newTableDataToView);
    }
  };

  function searchRows(data: Availabilities_data_for_page[], query: string) {
    const normalizedQuery = query.toLowerCase().trim();

    return data.filter((item) => {
      const values = [
        item.firstColumn.weekday,
        item.firstColumn.dateFormatted,
        item.secondColumn.start_time,
        item.secondColumn.end_time,
        item.fifthColumn.customer || "",
      ];

      return values.some((value) => {
        const val = value.toString().toLowerCase();
        return (
          val.includes(normalizedQuery) ||
          similarity(val, normalizedQuery) > 0.7 // ← nível de "tolerância"
        );
      });
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.4 }}
      className="w-full"
    >
      <Card className="relative w-full grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-[57%_13%_13%_13%] justify-between items-center xl:gap-0 px-5 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.4 }}
          className="relative col-auto sm:col-span-3 xl:col-auto"
        >
          <Input
            placeholder="Search by day, time, or booked person..."
            className="bg-gray-100 border-1 pl-12 rounded-xl"
            onChange={() => insertSearch(event)}
          />
          <Search className="absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2 size-5 text-gray-400" />
        </motion.div>
        {selects.map((current, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 + index * 0.1, duration: 0.4 }}
          >
            <Select
              value={
                index === 2
                  ? (filters[2][0] as string)
                  : (filters[index] as string)
              }
              onValueChange={(value) => {
                handleSortRows(index, value, index === 2 ? filters[2][1] : "");
              }}
            >
              <SelectTrigger
                className={`bg-gray-100 m-0 border-1 rounded-xl w-full relative ${
                  current.icon !== undefined ? "pl-10" : null
                }`}
              >
                {current.icon !== undefined ? (
                  <current.icon className="absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2 size-4 text-gray-500" />
                ) : null}
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {current.items.map((label) => (
                  <SelectItem key={label} value={label}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        ))}
      </Card>
    </motion.div>
  );
}

export default SearchComponent;

// shadcn/ui
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// lucide
import {
  ArrowDownWideNarrow,
  ArrowUpNarrowWide,
  Calendar,
  CalendarCheck,
  CalendarX,
  CircleAlert,
  Clock,
  Trash2,
  User,
  Users,
} from "lucide-react";

// motion
import { motion } from "motion/react";

// types
import type {
  Availabilities_data_for_page,
  Filter,
} from "@/types/availability";

// API
import { availabilityDeleteApi } from "@/services/availability";

type AvailabilityScheduleProps = {
  availabilitiesData: Availabilities_data_for_page[];
  tableDataToView: Availabilities_data_for_page[];
  setTableDataToView: (value: Availabilities_data_for_page[]) => void;
  setAvailabilitiesData: (value: Availabilities_data_for_page[]) => void;
  currentPage: number;
  amountOfSections: number;
  filters: Filter;
  handleSortRows: (
    selectionIndex: number,
    typeOrder: string,
    direction: string
  ) => void;
  access_token: string | null;
};

function AvailabilitySchedule({
  availabilitiesData,
  tableDataToView,
  setTableDataToView,
  setAvailabilitiesData,
  handleSortRows,
  currentPage,
  amountOfSections,
  filters,
  access_token,
}: AvailabilityScheduleProps) {
  const ROW_PER_PAGE = 6;

  const handleGetPage = (page: number) => {
    const startIndex = (page - 1) * ROW_PER_PAGE;
    const endIndex = startIndex + ROW_PER_PAGE;
    return tableDataToView.slice(startIndex, endIndex);
  };

  const handleDeleteAvailability = async (availability_id: number) => {
    await availabilityDeleteApi(access_token, availability_id);
    const newValueTableDataToView = tableDataToView.filter(
      (data) => data.id !== availability_id
    );
    const newValueAvailabilitiesData = availabilitiesData.filter(
      (data) => data.id !== availability_id
    );
    setTableDataToView(newValueTableDataToView);
    setAvailabilitiesData(newValueAvailabilitiesData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="w-full p-10"
    >
      <div className="flex flex-col items-start gap-2">
        <div className="w-full flex justify-between">
          <h4 className="flex gap-2 items-center">
            <Calendar className="size-5 lg:size-7 text-blue-500" />
            <span className="text-md lg:text-xl">Availability Schedule</span>
          </h4>
          <p
            className="flex items-center gap-1 select-none cursor-pointer hover:bg-gray-200 px-3 py-1 rounded-md"
            onClick={() =>
              filters[2][1] == "up"
                ? handleSortRows(2, filters[2][0], "down")
                : handleSortRows(2, filters[2][0], "up")
            }
          >
            {filters[2][1] === "up" ? (
              <ArrowUpNarrowWide className="size-4" />
            ) : (
              <ArrowDownWideNarrow className="size-4" />
            )}
            <span className="font-semibold text-gray-600 text-md">
              {filters[2][0]}
            </span>
          </p>
        </div>
        <p className="text-sm lg:text-lg text-gray-400">
          Showing section {currentPage} of {amountOfSections} availabilities
        </p>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day & Date</TableHead>
            <TableHead>Time Slot</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Booked By</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {handleGetPage(currentPage).map((data) => {
            return (
              <TableRow>
                <TableCell className="flex items-center gap-2 ">
                  {data.fourthColumn.status === "Available" ? (
                    <CalendarCheck className="size-5 text-green-600" />
                  ) : data.fourthColumn.status === "Occupied" ? (
                    <Users className="size-5 text-blue-600" />
                  ) : (
                    <CalendarX className="size-5 text-gray-400" />
                  )}
                  <div className="flex flex-col items-start">
                    <span
                      className={`font-semibold text-md ${
                        data.fourthColumn.status === "Past"
                          ? "text-gray-600"
                          : null
                      }`}
                    >
                      {data.firstColumn.weekday}
                    </span>
                    <span
                      className={`text-gray-500 ${
                        data.fourthColumn.status === "Past"
                          ? "text-gray-400"
                          : null
                      }`}
                    >
                      {data.firstColumn.dateFormatted}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    className={`flex items-center gap-2 ${
                      data.fourthColumn.status === "Past"
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    <Clock className="size-4" />
                    <span>
                      {data.secondColumn.start_time} -
                      {data.secondColumn.end_time}
                    </span>
                  </div>
                </TableCell>

                <TableCell>
                  <p
                    className={`${
                      data.fourthColumn.status === "Past"
                        ? "text-gray-400"
                        : null
                    }`}
                  >
                    {data.thirdColumn.slot_duration}min
                  </p>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      data.fourthColumn.status === "Available"
                        ? "bg-green-100 text-green-600"
                        : data.fourthColumn.status === "Occupied"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-400"
                    }
                  >
                    {data.fourthColumn.status}
                  </Badge>
                </TableCell>
                <TableCell
                  className={`${
                    data.fourthColumn.status === "Past"
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  {data.fifthColumn.customer != undefined ? (
                    <div className="flex items-center gap-1">
                      <User className="size-4" />
                      <span className="text-md">
                        {data.fifthColumn.customer}
                      </span>
                    </div>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <div
                        className={`p-2 rounded-md w-auto inline-flex select-none ${
                          data.fourthColumn.status === "Past"
                            ? "text-red-300"
                            : "text-red-600 hover:bg-red-100 cursor-pointer"
                        }`}
                        onClick={(e) =>
                          data.fourthColumn.status === "Past"
                            ? e.preventDefault()
                            : null
                        }
                      >
                        <Trash2 className="size-5" />
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="flex gap-2 items-center">
                          <CircleAlert className="text-red-600 size-5" />
                          <span>Delete Availability</span>
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          <p>
                            Are you sure you want to delete this availability
                            slot for{" "}
                            <span className="font-bold text-gray-500">
                              {data.firstColumn.weekday},{" "}
                              {data.firstColumn.dateFormatted}
                            </span>{" "}
                            from{" "}
                            <span className="font-bold text-gray-500">
                              {" "}
                              {data.secondColumn.start_time} to{" "}
                              {data.secondColumn.end_time}
                            </span>
                            ?
                          </p>
                          <p>This action cannot be undone.</p>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="cursor-pointer">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600 hover:bg-red-700 cursor-pointer"
                          onClick={() => handleDeleteAvailability(data.id)}
                        >
                          Delete Availability
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </motion.div>
  );
}

export default AvailabilitySchedule;

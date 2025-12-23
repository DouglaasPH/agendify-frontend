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
import { Calendar, CircleAlert, Clock, Trash2, User } from "lucide-react";

// motion
import { motion } from "motion/react";

// types
import type { Appointment_data_for_page } from "@/types/appointment";

// API
import { appointmentCancelApi } from "@/services/appointmentApi";

type AppointmentScheduleProps = {
  appointmentsData: Appointment_data_for_page[];
  tableDataToView: Appointment_data_for_page[];
  setTableDataToView: (value: Appointment_data_for_page[]) => void;
  setAppointmentsData: (value: Appointment_data_for_page[]) => void;
  currentPage: number;
  amountOfSections: number;
  access_token: string | null;
};

function AppointmentSchedule({
  appointmentsData,
  tableDataToView,
  setTableDataToView,
  setAppointmentsData,
  currentPage,
  amountOfSections,
  access_token,
}: AppointmentScheduleProps) {
  const ROW_PER_PAGE = 6;

  const handleGetPage = (page: number) => {
    const startIndex = (page - 1) * ROW_PER_PAGE;
    const endIndex = startIndex + ROW_PER_PAGE;
    return tableDataToView.slice(startIndex, endIndex);
  };

  const handleCancelAppointment = async (appointment_id: number) => {
    await appointmentCancelApi(access_token, appointment_id);
    const newValueTableDataToView = tableDataToView.filter(
      (data) => data.id !== appointment_id
    );
    const newValueAppointmentData = appointmentsData.filter(
      (data) => data.id !== appointment_id
    );
    setTableDataToView(newValueTableDataToView);
    setAppointmentsData(newValueAppointmentData);
  };
  /*
  id: number;
  firstColumn: { customer_name: string; customer_email: string };
  secondColumn: { weekday: string; dateFormatted: string };
  thirdColumn: { start_time: string; end_time: string };
  fourthColumn: { slot_duration: number };
  fifthColumn: { status: string };
*/

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="w-full p-10"
    >
      <div className="flex flex-col items-start gap-2">
        <h4 className="flex gap-2 items-center">
          <Calendar className="size-5 lg:size-7 text-blue-500" />
          <span className="text-md lg:text-xl">Appointment Schedule</span>
        </h4>
        <p className="text-sm lg:text-lg text-gray-400">
          Showing section {currentPage} of {amountOfSections} availabilities
        </p>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Slot duration</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {handleGetPage(currentPage).map((data) => {
            return (
              <TableRow>
                <TableCell className="flex items-center gap-2 ">
                  <div className="p-2 bg-gradient-to-t from-blue-600 to-indigo-500 rounded-full">
                    <User className="size-5 text-white" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span
                      className={`font-semibold text-md ${
                        data.fifthColumn.status === "Cancel" ||
                        data.fifthColumn.status === "Past"
                          ? "text-gray-600"
                          : null
                      }`}
                    >
                      {data.firstColumn.customer_name}
                    </span>
                    <span
                      className={`text-gray-500 ${
                        data.fifthColumn.status === "Cancel" ||
                        data.fifthColumn.status === "Past"
                          ? "text-gray-400"
                          : null
                      }`}
                    >
                      {data.firstColumn.customer_email}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col items-start">
                    <span
                      className={`font-semibold text-md ${
                        data.fifthColumn.status === "Cancel" ||
                        data.fifthColumn.status === "Past"
                          ? "text-gray-600"
                          : null
                      }`}
                    >
                      {data.secondColumn.weekday}
                    </span>
                    <span
                      className={`text-gray-500 ${
                        data.fifthColumn.status === "Cancel" ||
                        data.fifthColumn.status === "Past"
                          ? "text-gray-400"
                          : null
                      }`}
                    >
                      {data.secondColumn.dateFormatted}
                    </span>
                  </div>
                </TableCell>

                <TableCell>
                  <div
                    className={`flex items-center gap-2 ${
                      data.fifthColumn.status === "Cancel" ||
                      data.fifthColumn.status === "Past"
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    <Clock className="size-4" />
                    <span>
                      {data.thirdColumn.start_time} -{data.thirdColumn.end_time}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <p
                    className={`${
                      data.fifthColumn.status === "Cancel" ||
                      data.fifthColumn.status === "Past"
                        ? "text-gray-400"
                        : null
                    }`}
                  >
                    {data.fourthColumn.slot_duration}min
                  </p>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      data.fifthColumn.status === "Confirmed"
                        ? "bg-green-100 text-green-600"
                        : data.fifthColumn.status === "Cancel" ||
                          data.fifthColumn.status === "Past"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-400"
                    }
                  >
                    {data.fifthColumn.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <div
                        className={`p-2 rounded-md w-auto inline-flex select-none ${
                          data.fifthColumn.status === "Past"
                            ? "text-red-300"
                            : "text-red-600 hover:bg-red-100 cursor-pointer"
                        }`}
                        onClick={(e) =>
                          data.fifthColumn.status === "Past"
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
                          <span>Cancel Appointment</span>
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          <p>
                            Are you sure you want to cancel this appointment
                            with the{" "}
                            <span className="font-bold text-gray-500">
                              {data.firstColumn.customer_name}
                            </span>{" "}
                            <span className="font-bold text-gray-500">
                              {data.secondColumn.weekday},{" "}
                              {data.secondColumn.dateFormatted}
                            </span>{" "}
                            from{" "}
                            <span className="font-bold text-gray-500">
                              {" "}
                              {data.thirdColumn.start_time} to{" "}
                              {data.thirdColumn.end_time}
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
                          onClick={() => handleCancelAppointment(data.id)}
                        >
                          Cancel Appointment
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

export default AppointmentSchedule;

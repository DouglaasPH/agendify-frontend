// react
import { useEffect, useState } from "react";

// redux
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

// shadcn
import { Card } from "@/components/ui/card";

// motion
import { motion } from "motion/react";

// utils
import { formatDate, formatHours, goToErrorPage } from "@/lib/utils";

// components
import TitleAndStatus from "./components/titleAndStatus";
import Filters from "./components/filters";
import AppointmentSchedule from "./components/appointmentsSchedule";
import PaginationComponent from "../availability/components/pagination";
import NoAppointmentFound from "./components/noAppointmentsFound";

// API
import { appointmentListApi } from "../../services/appointmentApi";

// types
import type { Appointment_data_for_page } from "@/types/appointment";

export type Filter = [string, string, string];

function AppointmentsPage() {
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );
  const [filters, setFilters] = useState<Filter>([
    "All Status", // all status, confirmed, canceled or past
    "", // date
    "", // time
  ]);

  {
    /* all user appointment */
  }
  const [appointmentsData, setAppointmentsData] = useState<
    Appointment_data_for_page[]
  >([]);
  {
    /* appointment for viewing based on filters */
  }
  const [tableDataToView, setTableDataToView] = useState<
    Appointment_data_for_page[]
  >([]);
  {
    /* number of pages for the table based on the amount of data */
  }
  const [amountOfSections, setAmountOfSections] = useState(1);
  {
    /* current table page */
  }
  const [currentPage, setCurrentPage] = useState(1);

  const maxVisible = 3;
  const start_pagination_item = Math.max(
    0,
    Math.min(currentPage - 2, amountOfSections - maxVisible)
  );
  const end_pagination_item = start_pagination_item + maxVisible;

  {
    /* When user changes filters, change state */
  }
  const handleSetFilters = (index: number, newFilter: string) => {
    let newFilters = filters;
    if (index === 0) {
      {
        /* first selection */
      }
      newFilters = [newFilter, filters[1], filters[2]];
    } else if (index === 1) {
      {
        /* second selection */
      }
      const chooseDate = formatDate(newFilter).dateFormatted;
      if (chooseDate !== "Invalid Date") {
        newFilters = [filters[0], chooseDate, filters[2]];
      } else newFilters = [filters[0], "", filters[2]];
    } else if (index === 2) {
      if (newFilter.length > 0) {
        newFilters = [filters[0], filters[1], newFilter];
      } else {
        newFilters = [filters[0], filters[1], ""];
      }
    }
    setFilters(newFilters);
    handleSortRows(newFilters);
  };

  {
    /* if one of the filters has been modified, call the function to change the table and filter */
  }
  const handleSortRows = (filters: Filter) => {
    const dataToView = appointmentsData.filter((appointment) => {
      const statusMatch =
        filters[0] === "" ||
        filters[0] === "All Status" ||
        appointment.fifthColumn.status === filters[0];
      const dateMatch =
        filters[1] === "" ||
        appointment.secondColumn.dateFormatted === filters[1];
      const timeMatch =
        filters[2] === "" ||
        appointment.thirdColumn.start_time === filters[2] ||
        appointment.thirdColumn.end_time === filters[2];

      return statusMatch && dateMatch && timeMatch;
    });

    setTableDataToView(dataToView);
  };

  {
    /* clear filters */
  }
  const handleClearFilters = () => {
    setFilters(["All Status", "", ""]);
    setTableDataToView(appointmentsData);
  };

  useEffect(() => {
    const fetchAvailabilities = async () => {
      try {
        const allAppointments = await appointmentListApi(access_token, {});

        allAppointments.data.sort(
          (a, b) =>
            new Date(b.availabilities.start_time).getTime() -
            new Date(a.availabilities.start_time).getTime()
        );

        const data: Appointment_data_for_page[] = [];

        allAppointments.data.forEach((appointment) => {
          const transformDate = formatDate(
            appointment.availabilities.start_time
          );
          const transformStartTime = formatHours(
            appointment.availabilities.start_time
          );
          const transformEndTime = formatHours(
            appointment.availabilities.end_time
          );
          const customer_name = appointment.customer;
          const customer_email = appointment.customer_email;

          data.push({
            id: appointment.id,
            firstColumn: { customer_name, customer_email },
            secondColumn: transformDate,
            thirdColumn: {
              start_time: transformStartTime,
              end_time: transformEndTime,
            },
            fourthColumn: {
              slot_duration: appointment.availabilities.slot_duration_minutes,
            },
            fifthColumn: {
              status:
                appointment.status.charAt(0).toUpperCase() +
                appointment.status.slice(1),
            },
          });
        });

        setAppointmentsData(data);
        setTableDataToView(data);
      } catch (error) {
        goToErrorPage(error);
      }
    };
    fetchAvailabilities();
  }, [access_token]);

  {
    /* when the data to be displayed is modified, change the number of pages for displaying the data */
  }
  useEffect(() => {
    setAmountOfSections(Math.ceil(tableDataToView.length / 6));
  }, [tableDataToView]);

  return (
    <main className="flex flex-col gap-10 pb-50">
      {/* header section */}
      {/* Title, description and status (confirmed and canceled) */}
      <TitleAndStatus appointmentsData={appointmentsData} />

      {/* main section */}
      <section className="flex flex-col justify-center items-center gap-10 px-10 lg:px-20 w-full">
        <Filters
          handleSetFilters={handleSetFilters}
          appointmentsData={appointmentsData}
          tableDataToView={tableDataToView}
          setTableDataToView={setTableDataToView}
        />

        {/* Availability Schedule OR No Availabilities Found */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.4 }}
          className="w-full"
        >
          <Card className="w-full">
            {amountOfSections > 0 ? (
              <AppointmentSchedule
                appointmentsData={appointmentsData}
                tableDataToView={tableDataToView}
                setTableDataToView={setTableDataToView}
                setAppointmentsData={setAppointmentsData}
                currentPage={currentPage}
                amountOfSections={amountOfSections}
                access_token={access_token}
              />
            ) : (
              <NoAppointmentFound handleClearFilters={handleClearFilters} />
            )}
          </Card>
        </motion.div>
      </section>

      {/* Pagination Section */}
      {amountOfSections > 0 ? (
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          amountOfSections={amountOfSections}
          start_pagination_item={start_pagination_item}
          end_pagination_item={end_pagination_item}
        />
      ) : null}
    </main>
  );
}

export default AppointmentsPage;

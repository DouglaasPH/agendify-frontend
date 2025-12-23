// React
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Redux
import type { RootState } from "../../store";

// utils
import { formatDate, formatHours, goToErrorPage } from "@/lib/utils";

// motion
import { motion } from "motion/react";

// API
import { availabilityListApi } from "@/services/availability";

// shadcn
import { Card } from "@/components/ui/card";

// Components
import Cards from "./components/cards";
import Search from "./components/search";
import AvailabilitySchedule from "./components/availabilitySchedule";
import NoAvailabilitiesFound from "./components/noAvailabilitiesFound";
import PaginationComponent from "./components/pagination";
import TitleAndDescriptionComponent from "./components/titleAndDescriptionComponent";

// types
import type {
  Availabilities_data_for_page,
  Filter,
} from "@/types/availability";

function AvailabilityPage() {
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );

  const [filters, setFilters] = useState<Filter>([
    "All Status",
    "All Dates",
    ["Date", "down"],
  ]);
  {
    /* number of pages for the table based on the amount of data */
  }
  const [amountOfSections, setAmountOfSections] = useState(1);
  {
    /* current table page */
  }
  const [currentPage, setCurrentPage] = useState(1);

  {
    /* all user availability */
  }
  const [availabilitiesData, setAvailabilitiesData] = useState<
    Availabilities_data_for_page[]
  >([]);
  {
    /* availability for viewing based on filters */
  }
  const [tableDataToView, setTableDataToView] = useState<
    Availabilities_data_for_page[]
  >([]);

  const maxVisible = 3;

  const start_pagination_item = Math.max(
    0,
    Math.min(currentPage - 2, amountOfSections - maxVisible)
  );
  const end_pagination_item = start_pagination_item + maxVisible;

  {
    /* When user changes filters, change state */
  }
  const handleSetFilters = (
    index: number,
    typeOrder: string,
    direction: string
  ) => {
    let newFilters: Filter = ["", "", ["", ""]];
    {
      /* second filter, third filter, [fourth filter type, direction] */
    }
    if (index === 0) {
      newFilters = [typeOrder, filters[1], filters[2]];
    } else if (index === 1) {
      newFilters = [filters[0], typeOrder, filters[2]];
    } else if (index === 2) {
      newFilters = [filters[0], filters[1], [typeOrder, direction]];
    } else {
      newFilters = filters;
    }
    setFilters(newFilters);
  };

  {
    /* clear filters */
  }
  const handleClearFilters = () => {
    setFilters(["All Status", "All Dates", ["Date", "down"]]);
    setTableDataToView(availabilitiesData);
  };

  {
    /* if one of the filters has been modified, call the function to change the table and filter */
  }
  const handleSortRows = (
    selectionIndex: number, // get the filter modified by index from the TableDataToView state
    typeOrder: string, // selected filter value
    direction: string // if direction is changed, return new direction (up or down), if not, return empty string
  ) => {
    handleSetFilters(selectionIndex, typeOrder, direction);

    {
      /* precendence for organizing table */
    }
    const precedence: Record<string, number> = {
      Available: 1,
      Occupied: 2,
      Past: 3,
    };

    let dataToView: Availabilities_data_for_page[] = [];

    if (selectionIndex === 0) {
      switch (typeOrder) {
        case "All Status":
          dataToView = availabilitiesData;
          break;
        case "Available":
          dataToView = tableDataToView.filter(
            (data) => data.fourthColumn.status === "Available"
          );
          break;
        case "Occupied":
          dataToView = tableDataToView.filter(
            (data) => data.fourthColumn.status === "Occupied"
          );
          break;
        case "Past":
          dataToView = tableDataToView.filter(
            (data) => data.fourthColumn.status === "Past"
          );
          break;
      }
    } else if (selectionIndex === 1) {
      const now = new Date();
      const startOfWeek = new Date(now);
      const endOfWeek = new Date(now);
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();

      switch (typeOrder) {
        case "All Dates":
          dataToView = availabilitiesData;
          break;
        case "This Week":
          startOfWeek.setDate(now.getDate() - now.getDay());
          endOfWeek.setDate(startOfWeek.getDate() + 6);

          dataToView = tableDataToView.filter((availabilityData) => {
            const date = new Date(availabilityData.firstColumn.dateFormatted);
            return date >= startOfWeek && date <= endOfWeek;
          });
          break;
        case "This Month":
          dataToView = tableDataToView.filter((availabilityData) => {
            const date = new Date(availabilityData.firstColumn.dateFormatted);
            return (
              date.getMonth() === currentMonth &&
              date.getFullYear() === currentYear
            );
          });
          break;
        case "Past":
          dataToView = tableDataToView.filter((availabilityData) => {
            const date = new Date(availabilityData.firstColumn.dateFormatted);

            return (
              date.getFullYear() < currentYear ||
              (date.getFullYear() === currentYear &&
                date.getMonth() < currentMonth)
            );
          });
          break;
      }
    } else if (selectionIndex === 2) {
      switch (typeOrder) {
        case "Date":
          if (direction === "up") {
            dataToView = tableDataToView.sort(
              (a, b) =>
                new Date(a.firstColumn.dateFormatted).getTime() -
                new Date(b.firstColumn.dateFormatted).getTime()
            );
          } else {
            dataToView = tableDataToView.sort(
              (a, b) =>
                new Date(b.firstColumn.dateFormatted).getTime() -
                new Date(a.firstColumn.dateFormatted).getTime()
            );
          }
          break;
        case "Time":
          if (direction === "up") {
            dataToView = tableDataToView.sort(
              (a, b) =>
                new Date(a.secondColumn.start_time).getTime() -
                new Date(b.secondColumn.start_time).getTime()
            );
          } else {
            dataToView = tableDataToView.sort(
              (a, b) =>
                new Date(b.secondColumn.start_time).getTime() -
                new Date(a.secondColumn.start_time).getTime()
            );
          }
          break;
        case "Duration":
          if (direction === "up") {
            dataToView = tableDataToView.sort(
              (a, b) =>
                a.thirdColumn.slot_duration - b.thirdColumn.slot_duration
            );
          } else {
            dataToView = tableDataToView.sort(
              (a, b) =>
                b.thirdColumn.slot_duration - a.thirdColumn.slot_duration
            );
          }
          break;
        case "Status":
          if (direction === "up") {
            dataToView = tableDataToView.sort(
              (a, b) =>
                precedence[a.fourthColumn.status] -
                precedence[b.fourthColumn.status]
            );
          } else {
            dataToView = tableDataToView.sort(
              (a, b) =>
                precedence[b.fourthColumn.status] -
                precedence[a.fourthColumn.status]
            );
          }
          break;
      }
    }

    setTableDataToView(dataToView);
  };

  useEffect(() => {
    const fetchAvailabilities = async () => {
      try {
        const allAvailabilities = await availabilityListApi(access_token, {});
        allAvailabilities.data.sort(
          (a, b) =>
            new Date(b.start_time).getTime() - new Date(a.start_time).getTime()
        );

        const data: Availabilities_data_for_page[] = [];

        allAvailabilities.data.forEach((availability) => {
          const transformDate = formatDate(availability.start_time);
          const transformStartTime = formatHours(availability.start_time);
          const transformEndTime = formatHours(availability.end_time);
          const customer = availability.appointments?.customer;

          data.push({
            id: availability.id,
            firstColumn: transformDate,
            secondColumn: {
              start_time: transformStartTime,
              end_time: transformEndTime,
            },
            thirdColumn: {
              slot_duration: availability.slot_duration_minutes,
            },
            fourthColumn: {
              status:
                availability.status.charAt(0).toUpperCase() +
                availability.status.slice(1),
            },
            fifthColumn: {
              customer: customer,
            },
          });
        });

        setAvailabilitiesData(data);
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
      {/* Title, description and button of add new availability */}
      <TitleAndDescriptionComponent />

      {/* main section */}
      <section className="flex flex-col justify-center items-center gap-10 px-10 lg:px-20 w-full">
        {/* Cards */}
        <Cards availabilitiesData={availabilitiesData} />

        {/* search section */}
        <Search
          filters={filters}
          handleSortRows={handleSortRows}
          availabilitiesData={availabilitiesData}
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
              <AvailabilitySchedule
                availabilitiesData={availabilitiesData}
                tableDataToView={tableDataToView}
                setTableDataToView={setTableDataToView}
                setAvailabilitiesData={setAvailabilitiesData}
                currentPage={currentPage}
                amountOfSections={amountOfSections}
                filters={filters}
                handleSortRows={handleSortRows}
                access_token={access_token}
              />
            ) : (
              <NoAvailabilitiesFound handleClearFilters={handleClearFilters} />
            )}
          </Card>
        </motion.div>

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
      </section>
    </main>
  );
}

export default AvailabilityPage;

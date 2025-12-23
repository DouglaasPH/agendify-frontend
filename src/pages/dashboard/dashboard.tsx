// react
import { useEffect, useState } from "react";

// motion
import { motion } from "motion/react";

// Redux
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

// lucide
import {
  Calendar,
  CalendarCheck,
  ChartColumn,
  ChevronRight,
  Clock,
  Clock3,
  MessageCircle,
  TrendingUp,
  Users,
} from "lucide-react";

// shadcn/ui
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// components (graphics and user section)
import PieChartGraphicComponent from "./components/pieChartGraphicComponent";
import SimpleLineChartGraphicCompoent from "./components/simpleLineChartGraphicComponent";
import UserSectionComponent from "@/components/user_section/UserSectionComponent";

// types
import type { Appointment } from "@/types/appointment";
import type { Availability } from "@/types/availability";

// API
import { appointmentListApi } from "@/services/appointmentApi";
import { availabilityListApi } from "@/services/availability";

// utils
import { goToErrorPage } from "@/lib/utils";

interface UserData {
  appointments_today: Appointment[] | null;
  available_slots: Availability[] | null;
  next_appointments: Appointment[] | null;
}

interface TodaySchedule {
  customer: string | undefined;
  start_time: string;
  status: string | undefined;
}

interface AvailableSlots {
  start_time: string;
  slot_duration_minutes: number;
}

function DashboardPage() {
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );
  const chat_code = useSelector((state: RootState) => state.userData.chat_code);

  const [userData2, setUserData2] = useState<UserData>({
    appointments_today: [],
    available_slots: [],
    next_appointments: [],
  });
  const cards = [
    {
      label: "Today's Appointments",
      quantity: userData2.appointments_today?.length,
      icon: Calendar,
      gradientColor: "from-blue-600 via-blue-400 to-blue-500",
    },
    {
      label: "Available Slots",
      quantity: userData2.available_slots?.length,
      icon: Clock3,
      gradientColor: "from-green-600 via-green-400 to-green-500",
    },
    {
      label: "Next Appointments",
      quantity: userData2.next_appointments?.length,
      icon: Users,
      gradientColor: "from-purple-600 via-purple-400 to-purple-500",
    },
  ];

  const todaySchedule: TodaySchedule[] = [];
  userData2.appointments_today?.map((current) => {
    if (current.availabilities.start_time) {
      const date = new Date(current.availabilities?.start_time);
      const time = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      todaySchedule.push({
        customer: current.customer,
        start_time: time,
        status: current.status,
      });
    }
  });

  const availableSlots: AvailableSlots[] = [];
  userData2.available_slots?.map((current) => {
    if (current.start_time) {
      const date = new Date(current.start_time);

      const today = new Date();
      const isSameDay =
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate();

      if (isSameDay) {
        const time = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        availableSlots.push({
          start_time: time,
          slot_duration_minutes: current.slot_duration_minutes,
        });
      }
    }
  });

  const [simpleLineData, setSimpleLineData] = useState([
    { day: "Mon", appointments: 0 },
    { day: "Tue", appointments: 0 },
    { day: "Wed", appointments: 0 },
    { day: "Thu", appointments: 0 },
    { day: "Fri", appointments: 0 },
    { day: "Sat", appointments: 0 },
    { day: "Sun", appointments: 0 },
  ]);

  useEffect(() => {
    const fetchAppointments = async () => {
      let todayAppointments: Appointment[] = [];
      let nextAppointment: Appointment[] = [];
      let freeSlotsAvailabilities: Availability[] = [];

      const today = new Date().toISOString().split("T")[0];
      const todayDate = new Date(today);

      try {
        const allAppointmentsResponse = await appointmentListApi(
          access_token,
          {}
        );

        if (allAppointmentsResponse.data.length !== 0) {
          todayAppointments = allAppointmentsResponse.data.filter(
            (appointment: Appointment) =>
              appointment.availabilities?.date === today
          );
          nextAppointment = allAppointmentsResponse.data.filter(
            (appointment: Appointment) => {
              if (!appointment.availabilities?.date) return false;
              return new Date(appointment.availabilities.date) > todayDate;
            }
          );

          {
            /*  data for simple line graphic */
          }
          const todayy = new Date();
          const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          const firstDayOfWeek = new Date(todayy);
          firstDayOfWeek.setDate(todayy.getDate() - todayy.getDay()); // sunday of the current week
          firstDayOfWeek.setHours(0, 0, 0, 0);

          const lastDayOfWeek = new Date(firstDayOfWeek);
          lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6); // saturday of the current week
          lastDayOfWeek.setHours(23, 59, 59, 999);

          const updatedData = simpleLineData.map((dayObj) => {
            const dayIndex = weekDays.indexOf(dayObj.day);

            const appointmentsCount = allAppointmentsResponse.data.filter(
              (appointment: Appointment) => {
                if (!appointment.availabilities?.start_time) return false;
                const appointmentDate = new Date(
                  appointment.availabilities.start_time
                );

                // it only counts if it's within the current week.
                if (
                  appointmentDate < firstDayOfWeek ||
                  appointmentDate > lastDayOfWeek
                )
                  return false;

                return appointmentDate.getDay() === dayIndex;
              }
            ).length;

            return {
              ...dayObj,
              appointments: appointmentsCount,
            };
          });

          setSimpleLineData(updatedData);
          const allAvailabilitiesResponse = await availabilityListApi(
            access_token,
            {}
          );

          if (allAvailabilitiesResponse.data.length !== 0) {
            freeSlotsAvailabilities = allAvailabilitiesResponse.data.filter(
              (availability: Availability) => {
                if (
                  availability.status === "uncoupled" &&
                  new Date(availability.date) >= todayDate
                )
                  return availability;
              }
            );
          }

          setUserData2({
            appointments_today: todayAppointments,
            next_appointments: nextAppointment,
            available_slots: freeSlotsAvailabilities,
          });
        }
      } catch (error) {
        goToErrorPage(error);
      }
    };
    fetchAppointments();
  }, [access_token]);

  return (
    <main className="flex flex-col gap-10">
      {/* header section */}
      <UserSectionComponent />

      {/* main section */}
      <section className="grid lg:grid-cols-1 xl:grid-cols-[75%_25%] gap-10 px-10 lg:px-20">
        {/* quick overviews */}
        <div className="flex flex-col gap-10">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="font-normal text-2xl leading-tight"
          >
            📊 Quick Overview
          </motion.h1>
          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
            {cards.map((card, index) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 1.2 }}
              >
                <Card
                  className={`relative bg-gradient-to-r ${card.gradientColor} text-white px-8 py-5`}
                >
                  <p className="text-sm text-foreground text-white">
                    {card.label}
                  </p>
                  <card.icon className="absolute bottom-12 right-5 -translate-x-1/2 size-10 text-white/80" />
                  <p className="font-small text-5xl">{card.quantity}</p>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* graphics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.6 }}
            >
              <Card className="w-full bg-white p-4 h-80 flex justify-center shadow-xl">
                <h1 className="flex gap-2 text-xl items-center text-gray-700">
                  <ChartColumn className="text-blue-500" /> Availability
                  Overview
                </h1>
                <PieChartGraphicComponent
                  available={
                    userData2.available_slots?.length != undefined
                      ? userData2.available_slots?.length
                      : 0
                  }
                  booked={
                    userData2.appointments_today?.length != undefined &&
                    userData2.next_appointments?.length != undefined
                      ? userData2.appointments_today?.length +
                        userData2.next_appointments?.length
                      : 0
                  }
                />
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.7 }}
            >
              <Card className="w-full bg-white p-4 h-80 flex justify-center shadow-xl">
                <h1 className="flex gap-2 text-xl items-center text-gray-700">
                  <TrendingUp className="text-blue-500" /> Weekly Appointments
                </h1>
                <SimpleLineChartGraphicCompoent graphic_data={simpleLineData} />
              </Card>
            </motion.div>
          </div>
        </div>

        {/* today's Highlights and Quick Actions */}
        <div className="flex flex-col gap-10">
          {/* title */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="font-normal text-2xl leading-tight"
          >
            📅 Today's Highlights
          </motion.h1>
          {/* first card: Today's Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          >
            <Card className="p-4 flex flex-col gap-15">
              <h1 className="font-normal text-xl leading-tight flex gap-2 items-center">
                <CalendarCheck className="text-blue-500 size-6" />
                Today's Schedule
              </h1>
              <div className="flex flex-col gap-5">
                {/* all upcoming appointments of the day */}
                <div className="flex flex-col gap-4 pb-10 border-b-1 border-b-gray-200">
                  <p className="text-foregroud text-sm text-gray-400">
                    Upcoming Appointments
                  </p>
                  {/* container */}
                  <div className="flex flex-col gap-5">
                    {todaySchedule.map((currentSchedule) => (
                      <Card className="border-none bg-gray-50 flex flex-row justify-between px-5">
                        <div className="flex flex-row gap-5 items-center">
                          <p className="text-xl font-medium text-blue-600">
                            {currentSchedule.start_time}
                          </p>
                          <p className="text-md leading-tight">
                            {currentSchedule.customer}
                          </p>
                        </div>
                        <Badge className="text-white bg-blue-600">
                          {currentSchedule.status}
                        </Badge>
                      </Card>
                    ))}
                  </div>
                </div>
                {/* Available Slots */}
                <div className="flex flex-col gap-4">
                  <p className="text-foregroud text-sm text-gray-400">
                    Available Slots
                  </p>
                  {/* container */}
                  <div className="flex flex-col gap-5">
                    {availableSlots.map((currentAvailable) => (
                      <Card className="h-auto border-green-200 bg-green-50 flex flex-row justify-between items-center px-5 py-2">
                        <p className="text-lg font-normal text-green-600 flex items-center gap-2">
                          <Clock className="size-5" />
                          {currentAvailable.start_time}
                        </p>
                        <p className="text-green-600 text-sm">
                          {currentAvailable.slot_duration_minutes} min
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <div className="flex flex-col gap-10">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="font-normal text-2xl leading-tight"
            >
              ⚡ Quick Actions
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.3 }}
            >
              <Card className="px-5">
                <Button
                  variant="outline"
                  className="rounded-2xl flex items-center justify-between cursor-pointer hover:scale-105"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `http://localhost:5173/chat/${chat_code}`
                    )
                  }
                >
                  <span className="flex gap-2 items-center text-gray-600 font-medium">
                    <MessageCircle className="text-purple-600" /> Copy the link
                    to my user chat
                  </span>
                  <ChevronRight />
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DashboardPage;

// react
import { useEffect, useState } from "react";

// shadcn
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// lucide
import { Calendar, Clock, X } from "lucide-react";

// redux
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

// api
import { allAppointmentsApi, cancelAppointmentsApi } from "@/services/customer";
import { formatDate, formatHours } from "@/lib/utils";

// types
import type { Appointment } from "@/types/appointment";
import type { Step } from "@/types/chat";

type ViewAppointmentsProps = {
  handleWithCustomerInteraction: (
    text: string,
    isForComponentData: string,
    step: Step
  ) => void;
};

function ViewAppointments({
  handleWithCustomerInteraction,
}: ViewAppointmentsProps) {
  const access_token = useSelector(
    (state: RootState) => state.customer.auth.accessToken
  );

  const [upComingAppointments, setUpComingAppointments] = useState<
    Appointment[]
  >([]);
  const [pastAppointments, setPastAppointments] = useState<Appointment[]>([]);

  const handleOnCancelButton = (
    appointment_id: number,
    date: string,
    start_time: string,
    end_time: string
  ) => {
    const fetch = async () => {
      await cancelAppointmentsApi(access_token, appointment_id);
    };
    fetch();
    const text =
      "Cancel appointment on " +
      formatDate(date).dateFormatted +
      " at " +
      formatHours(start_time) +
      " - " +
      formatHours(end_time);
    handleWithCustomerInteraction(text, text, "cancelAppointment");

    setTimeout(() => {
      handleWithCustomerInteraction("", "", "schedulingFinalized");
    }, 1000);
  };

  useEffect(() => {
    const fetch = async () => {
      const fetchAPI = await allAppointmentsApi(access_token);

      if (fetchAPI.data.length > 0) {
        fetchAPI.data.map((appointment: Appointment) => {
          if (appointment.status === "confirmed") {
            setUpComingAppointments((prev) => [...prev, appointment]);
          } else {
            setPastAppointments((prev) => [...prev, appointment]);
          }
        });
      }
    };
    fetch();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-5 w-full">
      <div className="flex flex-col justify-center items-center gap-3 w-full">
        <p className="font-semibold text-gray-500">Upcoming Appointments</p>
        <div className="w-full lg:w-2xl flex flex-col gap-2">
          {upComingAppointments.length > 0 ? (
            upComingAppointments.map((appointment) => (
              <Card className="w-full flex-row justify-between p-5 items-center border-2 border-teal-200 shadow-md">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <Calendar className="size-5 text-blue-600" />
                    <p className="font-semibold text-gray-900 text-md">
                      {
                        formatDate(appointment.availabilities.date)
                          .dateFormatted
                      }
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Clock className="size-5 text-purple-600" />
                    <p className="text-sm text-gray-600">
                      {formatHours(appointment.availabilities.start_time)} -{" "}
                      {formatHours(appointment.availabilities.end_time)}
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    className="bg-red-600 hover:bg-red-700 transform transition-transform duration-200 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      handleOnCancelButton(
                        appointment.id,
                        appointment.availabilities.date,
                        appointment.availabilities.start_time,
                        appointment.availabilities.end_time
                      )
                    }
                  >
                    <X />
                    <span>Cancel</span>
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center gap-2 pt-5 pb-20">
              <div className="flex justify-center items-center bg-gray-200 p-2 rounded-full">
                <X className="size-7 text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-400">
                You not have a upcoming appointments
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 w-full lg:w-auto">
        <p className="font-semibold text-gray-500">Past Appointments</p>
        <div className="w-full lg:w-2xl flex flex-col gap-2">
          {pastAppointments.length > 0 ? (
            pastAppointments.map((appointment) => (
              <Card className="w-full flex-row justify-between p-5 items-center border-2 border-gray-200 shadow-md">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <Calendar className="size-5 text-gray-300" />
                    <p className="font-semibold text-gray-400 text-md">
                      {
                        formatDate(appointment.availabilities.date)
                          .dateFormatted
                      }
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Clock className="size-5 text-gray-300" />
                    <p className="text-sm text-gray-400">
                      {formatHours(appointment.availabilities.start_time)} -{" "}
                      {formatHours(appointment.availabilities.end_time)}
                    </p>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center gap-2 pt-5 pb-15">
              <div className="flex justify-center items-center bg-gray-200 p-2 rounded-full">
                <X className="size-7 text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-400">
                You not have a past appointments
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ViewAppointments;

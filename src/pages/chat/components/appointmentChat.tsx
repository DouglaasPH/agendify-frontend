// react
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// lucide
import { User } from "lucide-react";

// motion
import { motion } from "motion/react";

// pages
import cartoonAvatars from "@/assets/cartoonAvatars";

// components
import Initial from "./chat/initial";
import LoadingType from "../../../components/loading/loadingType";
import SelectDate from "./chat/selectDate";
import ButtonBack from "./chat/buttonBack";
import SelectTime from "./chat/selectTime";
import ViewAppointments from "./chat/viewAppointments";
import ConfirmingAppointment from "./chat/confirmingAppointment";

// redux
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

// utils
import { formatDate } from "@/lib/utils";

// types
import type { NewAppointment, Step } from "@/types/chat";

function AppointmentChat() {
  const customerData = useSelector(
    (state: RootState) => state.customer.customerData
  );
  const professionalData = useSelector(
    (state: RootState) => state.customer.professionalData
  );

  const allMessages = {
    firstMessage: (customer_name: string) =>
      `Hello ${customer_name}! Do you want to book an available slot or view your appointments with this professional?`,
    IDidntUnderstand:
      "I'm not sure I understood. Would you like to book an appointment or view your existing appointments?",
    BookAnAppointment: {
      selectDateFromCalendar:
        "Please select a date from the calendar. Only dates with available slots are shown:",
      availableTimes: (date: string) => `Available times for ${date}:`,
      confirmAppointment: (appointment_date: string, time: string) =>
        `You selected ${appointment_date} at ${time}. Please confirm your appointment.`,
      confirmedAppointment: (appointment: string, email: string) =>
        `Your appointment is confirmed for ${appointment}! A confirmation email has been sent to ${email}.`,
      schedulingFinalized:
        "Do you want to book another appointment or view your existing appointments?",
    },
    viewMyAppointment: {
      firstMessage: "Here are your appointments:",
      cancelAppointment: (appointment: string) =>
        `Your appointment on ${appointment} has been canceled succesfully. A confirmation email has been sent.`,
      botDidntUndestand:
        "I'm not sure I understood. Would you like to book an appointment or view your existing appointments?",
    },
  };

  const [messages, setMessages] = useState<
    { from: "bot" | "user"; text: string }[]
  >([]);
  const [isTyping, setIsTyping] = useState(false);
  const [steps, setSteps] = useState<Step[]>([]);
  const [newAppointment, setNewAppointment] = useState<NewAppointment>({
    id: null,
    date: "",
    start_time: "",
    end_time: "",
  });

  function handleWithCustomerInteraction(
    customerMessage: string,
    forBotMessageData: string,
    step: Step
  ) {
    if (customerMessage == "Back") {
      setSteps((prev) => prev.slice(0, -1));
    } else {
      setSteps((prev) => [...prev, step]);
    }
    if (step !== "schedulingFinalized") {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: customerMessage },
        { from: "bot", text: handleBotResponse(step, forBotMessageData) },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: handleBotResponse(step, forBotMessageData) },
      ]);
    }
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  }

  function handleBotResponse(currentStep: Step, forMessageData: string) {
    let botText = "";

    switch (currentStep) {
      case "initial":
        botText = allMessages.firstMessage(customerData.name);
        break;
      case "selectDate":
        botText = allMessages.BookAnAppointment.selectDateFromCalendar;
        break;
      case "selectTime":
        botText = allMessages.BookAnAppointment.availableTimes(forMessageData);
        break;
      case "confirmingAppointment":
        botText = allMessages.BookAnAppointment.confirmAppointment(
          formatDate(newAppointment?.date).dateFormatted,
          forMessageData
        );
        break;
      case "confirmedAppointment":
        botText = allMessages.BookAnAppointment.confirmedAppointment(
          forMessageData,
          customerData.email
        );
        break;
      case "schedulingFinalized":
        botText = allMessages.BookAnAppointment.schedulingFinalized;
        break;
      case "viewAppointments":
        botText = allMessages.viewMyAppointment.firstMessage;
        break;
      case "cancelAppointment":
        botText =
          allMessages.viewMyAppointment.cancelAppointment(forMessageData);
        break;
      case "botDidntUndestand":
        botText = allMessages.viewMyAppointment.botDidntUndestand;
        break;
      default:
        botText = allMessages.IDidntUnderstand;
        break;
    }

    return botText;
  }

  const a = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      a.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [isTyping]);

  useEffect(() => {
    const firstMsg = allMessages.firstMessage(customerData.name);

    setSteps(["initial"]);
    setIsTyping(true); // mostra indicador de digitação
    setMessages([{ from: "bot", text: firstMsg }]); // adiciona mensagem inicial

    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 1000); // 1 segundo de “digitação” do bot

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative flex flex-col pt-15 h-screen w-full justify-between">
      {/* header */}
      <header className="flex flex-row bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 shadow-lg fixed top-0 left-0 w-full py-4 px-10 md:px-15 lg:px-50 z-100000">
        {/* avatar, user name and and small description */}
        <div className="flex gap-3 items-center w-full">
          <motion.div
            key={professionalData.profileAvatarId}
            initial={{ scale: 0.8, opacity: 0, y: -50 }}
            exit={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 1.2,
            }}
            className={`lg:flex justify-center items-center rounded-full select-none relative bg-gradient-to-b ${
              cartoonAvatars[professionalData.profileAvatarId].bgGradient
            } py-2 px-2 text-xl`}
          >
            {cartoonAvatars[professionalData.profileAvatarId].emoji}
          </motion.div>
          <div>
            <p className="text-gray-600 font-medium">{professionalData.name}</p>
            <span className="text-sm text-gray-500">Virtual Assistant</span>
          </div>
        </div>
      </header>

      {/* chat */}
      <section className="pt-30 px-0 lg:pb-10 md:px-15 lg:px-50">
        {messages.map((message, index) => {
          if (message.from === "bot") {
            const currentStepIndex = steps.length - 1;
            const isLastBotMessage = index === messages.length - 1;

            return (
              <div className="w-full flex flex-col gap-10 mt-10">
                <div
                  key={index}
                  className="flex flex-row items-center gap-3 w-full"
                >
                  <div
                    className={`lg:flex justify-center items-center rounded-full select-none relative bg-gradient-to-b ${
                      cartoonAvatars[professionalData.profileAvatarId]
                        .bgGradient
                    } py-2 px-2 text-xl`}
                  >
                    {cartoonAvatars[professionalData.profileAvatarId].emoji}
                  </div>

                  <div className="bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-200 rounded-2xl px-5 py-3 shadow-md max-w-[80%]">
                    {isTyping && isLastBotMessage ? (
                      <LoadingType /> // três pontinhos animados
                    ) : (
                      <p className="text-sm text-gray-700">{message.text}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  {isTyping || !isLastBotMessage ? null : steps[
                      currentStepIndex
                    ] == "initial" ||
                    steps[currentStepIndex] == "schedulingFinalized" ? (
                    <Initial
                      handleWithCustomerInteraction={
                        handleWithCustomerInteraction
                      }
                    />
                  ) : steps[currentStepIndex] == "selectDate" ? (
                    <SelectDate
                      setNewAppointment={setNewAppointment}
                      handleWithCustomerInteraction={
                        handleWithCustomerInteraction
                      }
                    />
                  ) : steps[currentStepIndex] == "selectTime" ? (
                    <SelectTime
                      newAppointment={newAppointment}
                      setNewAppointment={setNewAppointment}
                      handleWithCustomerInteraction={
                        handleWithCustomerInteraction
                      }
                    />
                  ) : steps[currentStepIndex] == "confirmingAppointment" ? (
                    <ConfirmingAppointment
                      newAppointment={newAppointment}
                      handleWithCustomerInteraction={
                        handleWithCustomerInteraction
                      }
                    />
                  ) : steps[currentStepIndex] == "viewAppointments" ? (
                    <ViewAppointments
                      handleWithCustomerInteraction={
                        handleWithCustomerInteraction
                      }
                    />
                  ) : null}
                  {isTyping || !isLastBotMessage ? null : steps[
                      currentStepIndex
                    ] == "selectDate" ||
                    steps[currentStepIndex] == "selectTime" ||
                    steps[currentStepIndex] == "viewAppointments" ? (
                    <ButtonBack
                      handleWithCustomerInteraction={
                        handleWithCustomerInteraction
                      }
                      steps={steps}
                    />
                  ) : null}
                </div>
              </div>
            );
          } else {
            // mensagem do usuário
            return (
              <div key={index} className="flex justify-end items-center gap-3">
                <div className="bg-gradient-to-tr from-blue-200 via-blue-50 to-blue-200 text-blue-900 text-sm rounded-2xl px-5 py-3 shadow-md max-w-[70%]">
                  {message.text}
                </div>
                <div className="lg:flex justify-center items-center rounded-full select-none relative bg-gradient-to-br from-blue-400 to-blue-500 p-3 border-black/20">
                  <User className="size-5 text-white" />
                </div>
              </div>
            );
          }
        })}
      </section>
      {/* info */}
      <section
        className="mt-8 pb-3 text-sm text-gray-500 w-full text-center"
        ref={a}
      >
        Chat session is active • Messages are not stored
      </section>
    </main>
  );
}

export default AppointmentChat;

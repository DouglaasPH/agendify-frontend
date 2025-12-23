// shadcn/ui
import { Card } from "@/components/ui/card";

// lucide
import { CalendarCheck, CalendarX, Timer, Users } from "lucide-react";

// motion
import { motion } from "motion/react";

// type
import type { Availabilities_data_for_page } from "@/types/availability";

type CardsProps = {
  availabilitiesData: Availabilities_data_for_page[];
};

function Cards({ availabilitiesData }: CardsProps) {
  const availableSlots = availabilitiesData.filter(
    (availabilityData) => availabilityData.fourthColumn.status === "Available"
  ).length;
  const occupiedSlots = availabilitiesData.filter(
    (availabilityData) => availabilityData.fourthColumn.status === "Occupied"
  ).length;
  const pastRecords = availabilitiesData.filter(
    (availabilityData) => availabilityData.fourthColumn.status === "Past"
  ).length;
  const totalHoursWeek = () => {
    const now = new Date();
    const startOfWeek = new Date(now);
    const endOfWeek = new Date(now);

    startOfWeek.setDate(now.getDate() - now.getDay());
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    return availabilitiesData.filter((availabilityData) => {
      const date = new Date(availabilityData.firstColumn.dateFormatted);
      return date >= startOfWeek && date <= endOfWeek;
    }).length;
  };

  const cards = [
    {
      label: "Available Slots",
      quantity: availableSlots,
      icon: CalendarCheck,
      gradientColor: "from-green-100 to-emerald-50",
      gradientColorIcon: "bg-green-500",
      absoluteDivColor: "bg-green-600/10",
      labelColor: "text-green-700/70",
      quantityColor: "text-green-700",
    },
    {
      label: "Occupied Slots",
      quantity: occupiedSlots,
      icon: Users,
      gradientColor: "from-blue-100 to-cyan-50",
      gradientColorIcon: "bg-blue-500",
      absoluteDivColor: "bg-blue-600/10",
      labelColor: "text-blue-700/70",
      quantityColor: "text-blue-700",
    },
    {
      label: "Total Hours/Week",
      quantity: totalHoursWeek(),
      icon: Timer,
      gradientColor: "from-purple-100 to-indigo-50",
      gradientColorIcon: "bg-purple-500",
      absoluteDivColor: "bg-purple-600/10",
      labelColor: "text-purple-700/70",
      quantityColor: "text-purple-700",
    },
    {
      label: "Past Records",
      quantity: pastRecords,
      icon: CalendarX,
      gradientColor: "from-gray-100 to-slate-50",
      gradientColorIcon: "bg-gray-500",
      absoluteDivColor: "bg-gray-600/10",
      labelColor: "text-gray-700/70",
      quantityColor: "text-gray-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10 w-full">
      {cards.map((card, index) => (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 1.2 }}
        >
          <Card
            className={`overflow-hidden shadow-lg border-none relative bg-gradient-to-br ${card.gradientColor} text-white px-8 py-5 w-full`}
          >
            <div
              className={`absolute top-0 right-0 w-32 h-32 ${card.absoluteDivColor} rounded-full -translate-y-16 translate-x-16`}
            ></div>
            <p className={`text-sm font-medium ${card.labelColor}`}>
              {card.label}
            </p>
            <div
              className={`absolute bottom-12 right-5 -translate-x-1/2 ${card.gradientColorIcon} h-13 w-13 flex items-center justify-center rounded-xl`}
            >
              <card.icon className={` size-8 text-white`} />
            </div>
            <p className={`text-5xl font-bold ${card.quantityColor}`}>
              {card.quantity}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default Cards;

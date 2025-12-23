// shadcn/ui
import { Card } from "@/components/ui/card";

// lucide
import { Calendar, Clock, Timer, TrendingUp } from "lucide-react";

// motion
import { motion } from "motion/react";

// redux
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

function Cards() {
  const quantityDataCards = useSelector(
    (RootState: RootState) => RootState.createAvailability.dataCards
  );

  const cards = [
    {
      label: "INTERVALS",
      quantity: quantityDataCards.intervals,
      icon: Clock,
      colorIcon: "text-blue-500/70",
      quantityColor: "text-blue-600",
      colorBorder: "border-l-blue-600",
    },
    {
      label: "DAYS",
      quantity: quantityDataCards.days,
      icon: Calendar,
      colorIcon: "text-green-500/70",
      quantityColor: "text-green-600",
      colorBorder: "border-l-green-600",
    },
    {
      label: "TOTAL SLOTS",
      quantity: quantityDataCards.totalSlots,
      icon: TrendingUp,
      colorIcon: "text-purple-500/70",
      quantityColor: "text-purple-600",
      colorBorder: "border-l-purple-600",
    },
    {
      label: "HOURS/DAY",
      quantity: quantityDataCards.hoursDay,
      icon: Timer,
      colorIcon: "text-orange-500/70",
      quantityColor: "text-orange-600",
      colorBorder: "border-l-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 w-full">
      {cards.map((card, index) => (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 1.2 }}
        >
          <Card
            className={`overflow-hidden shadow-lg relative px-2 lg:px-8 py-5 flex flex-col gap-2 w-full border-l-5 ${card.colorBorder}`}
          >
            <p className={`text-sm font-normal text-gray-600/70`}>
              {card.label}
            </p>
            <div
              className={`absolute bottom-9 right-0 -translate-x-1/2 flex items-center justify-center rounded-xl`}
            >
              <card.icon className={` size-8 ${card.colorIcon}`} />
            </div>
            <p
              className={`text-2xl font-bold ${card.quantityColor} leading-none`}
            >
              {card.label !== "HOURS/DAY"
                ? card.quantity
                : `${card.quantity.toFixed(1)}h`}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default Cards;

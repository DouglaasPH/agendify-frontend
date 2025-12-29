// lucide
import { Calendar, Sparkles } from "lucide-react";

// motion
import { motion } from "motion/react";

function TitleAndDescriptionComponent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="pt-40 pb-25 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 w-full grid grid-cols-1 gap-8 place-items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative p-4 sm:p-6 bg-white/20 rounded-xl border-1 border-white/30"
      >
        <Calendar className="size-8 sm:size-10 text-white" />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-2 -right-2"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-900" />
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col items-center justify-center gap-3"
      >
        <h1 className="font-bold text-4xl sm:text-6xl text-white text-center">
          Create New Availability
        </h1>
        <p className="font-normal text-white/70 w-full px-6 sm:px-0 sm:w-3/4 text-center">
          Set up your availability schedule in three simple steps. Define time
          slots, select dates, and review before saving.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default TitleAndDescriptionComponent;

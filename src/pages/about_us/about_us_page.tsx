// lucide
import {
  Calendar,
  CircleCheckBig,
  Globe,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  Star,
  Target,
  Users,
} from "lucide-react";

// motion
import { motion } from "motion/react";

function AboutUsPage() {
  const ourJorney = [
    {
      year: "2024",
      label: "The Idea",
      description:
        "Frustrated with endless scheduling back-and-forth, our founders envisioned a smarter solution.",
    },
    {
      year: "Early 2024",
      label: "First Prototype",
      description:
        "Built and tested our MVP with 50+ beta users, gathering crucial feedback.",
    },
    {
      year: "Mid 2024",
      label: "Official Launch",
      description:
        "Launched Agendify to the public with core scheduling features.",
    },
    {
      year: "Today",
      label: "Growing Fast",
      description:
        "Serving thousands of professionals with advanced AI-powered scheduling.",
    },
  ];

  return (
    <main className="flex flex-col items-center w-full">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className="flex flex-col justify-center items-center w-full gap-8 bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 h-screen"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.5 }}
          className="px-5 bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-3xl md:text-6xl text-center font-bold leading-tight"
        >
          Simplifying Scheduling for{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Everyone
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.6 }}
          className="max-w-3/4 text-center text-md md:text-xl text-gray-500 leading-relaxed"
        >
          We're on a mission to eliminate the friction between professionals and
          their clients. Every appointment should be effortless, every
          connection meaningful.
        </motion.p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.8 }}
        className="px-5 flex flex-col justify-center items-center gap-10 bg-gray-100 h-auto py-40 md:py-0 md:h-screen"
      >
        <div className="flex flex-col items-center gap-5">
          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.1 }}
            className="bg-clip-text text-start text-3xl md:text-5xl font-bold leading-tight"
          >
            Our Journey
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.2 }}
            className="text-center text-md md:text-xl text-gray-500 leading-relaxed"
          >
            From a simple idea to a platform trusted by thousands of
            professionals worldwide.
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:px-40">
          {ourJorney.map((current, index) => (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 2.3 + index * 0.1 }}
              className="relative bg-white border-1 border-gray-300 px-5 py-10 rounded-2xl flex flex-col gap-2 w-full"
            >
              <h4 className="bg-clip-text text-start text-xl md:text-2xl font-bold leading-tight">
                {current.year}
              </h4>
              <h4 className="text-lg font-semibold text-foreground">
                {current.label}
              </h4>
              <p className="text-start text-md md:text-sm text-gray-500 leading-relaxed">
                {current.description}
              </p>
              {index < ourJorney.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
      <section className="px-5 py-20 md:py-40 flex flex-col gap-15 justify-center h-auto md:h-screen">
        <div className="grid grid-cols-1 md:grid-cols-[33%_33%_33%] gap-15 md:gap-5 w-full justify-between py-5">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 2.4 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue p-4 md:p-3 rounded-xl">
              <Target className="size-8 text-blue-600" />
            </div>
            <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-md md:text-lg font-semibold leading-tight">
              Mission
            </h4>
            <p className="max-w-3/5 text-center text-sm md:text-md text-gray-500 leading-relaxed">
              To facilitate seamless connections between professionals and
              clients through intelligent scheduling.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 2.5 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="bg-gradient-to-br from-red-100 via-red-200 to-red p-4 md:p-3 rounded-xl">
              <Rocket className="size-8 text-red-600" />
            </div>
            <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-md md:text-lg font-semibold leading-tight">
              Vision
            </h4>
            <p className="max-w-3/5 text-center text-sm md:text-md text-gray-500 leading-relaxed">
              To become the world's leading intelligent scheduling platform,
              trusted by millions globally.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.6 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="bg-gradient-to-br from-green-100 via-green-200 to-green p-4 md:p-3 rounded-xl">
              <Heart className="size-8 text-green-600" />
            </div>
            <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-md md:text-lg font-semibold leading-tight">
              Values
            </h4>
            <p className="max-w-3/5 text-center text-sm md:text-md text-gray-500 leading-relaxed">
              Innovation, trust, user-centricity, and accessibility guide
              everything we create.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-rows-1 md:grid-cols-2 justify-between w-full gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.7 }}
            className="bg-white border-1 border-gray-300 px-5 py-10 rounded-2xl flex flex-col items-start gap-2"
          >
            <div className="bg-gradient-to-br from-yellow-100 via-yellow-200 to-red p-4 md:p-3 rounded-xl">
              <Lightbulb className="size-6 text-yellow-600" />
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-lg font-medium leading-tight">
              Innovation
            </h4>
            <p className="text-start text-sm md:text-md text-gray-500 leading-relaxed">
              We continuously push boundaries to make scheduling smarter and
              more intuitive.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.8 }}
            className="bg-white border-1 border-gray-300 px-5 py-10 rounded-2xl flex flex-col items-start gap-2"
          >
            <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue p-4 md:p-3 rounded-xl">
              <Shield className="size-6 text-blue-600" />
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-lg font-medium leading-tight">
              Trust
            </h4>
            <p className="text-start text-sm md:text-md text-gray-500 leading-relaxed">
              Your data security and privacy are our top priorities, always.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.9 }}
            className="bg-white border-1 border-gray-300 px-5 py-10 rounded-2xl flex flex-col items-start gap-2"
          >
            <div className="bg-gradient-to-br from-red-100 via-red-200 to-red p-4 md:p-3 rounded-xl">
              <Heart className="size-6 text-red-600" />
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-lg font-medium leading-tight">
              User-Centric
            </h4>
            <p className="text-start text-sm md:text-md text-gray-500 leading-relaxed">
              Every feature is designed with our users' needs and experience at
              heart.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 3 }}
            className="bg-white border-1 border-gray-300 px-5 py-10 rounded-2xl flex flex-col items-start gap-2"
          >
            <div className="bg-gradient-to-br from-green-100 via-green-200 to-green p-4 md:p-3 rounded-xl">
              <Globe className="size-6 text-green-600" />
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-lg font-medium leading-tight">
              Accesibility
            </h4>
            <p className="text-start text-sm md:text-md text-gray-500 leading-relaxed">
              Making professional scheduling tools available to everyone,
              everywhere.
            </p>
          </motion.div>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 3.1 }}
        className="px-5 flex flex-col py-20 md:py-0 md:h-screen justify-center items-center gap-40 bg-gray-100 w-full"
      >
        <div className="flex flex-col items-center gap-5">
          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 3.4 }}
            className="bg-clip-text text-start text-3xl md:text-5xl font-bold leading-tight"
          >
            How Agendify Works
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 3.5 }}
            className="text-center text-md md:text-xl text-gray-500 leading-relaxed"
          >
            A simple, intelligent flow that connects professionals with their
            clients effortlessly.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[33%_33%_33%] gap-15 md:gap-5 w-full justify-between px-20">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 3.6 }}
            className="flex flex-col items-center gap-3 w-full"
          >
            <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue px-4 py-2  md:px-5 md:py-3 rounded-xl text-blue-600 text-xl font-bold">
              1
            </div>
            <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-lg md:text-xl font-semibold leading-tight">
              Professional Sets Availability
            </h4>
            <p className="text-center text-sm md:text-md text-gray-500 leading-relaxed">
              Define your schedule, services, and preferences in minutes.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 3.7 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="bg-gradient-to-br from-red-100 via-red-200 to-red px-4 py-2 md:px-5 md:py-3 rounded-xl text-red-600 text-xl font-bold">
              2
            </div>
            <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-lg md:text-xl font-semibold leading-tight">
              Client Books Appointment
            </h4>
            <p className="text-center text-sm md:text-md text-gray-500 leading-relaxed">
              Clients choose from available slots with a simple, intuitive
              interface.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 3.8 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="bg-gradient-to-br from-green-100 via-green-200 to-green px-4 py-2 md:px-5 md:py-3 rounded-xl text-green-600 text-xl font-bold">
              3
            </div>
            <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-lg md:text-xl font-semibold leading-tight">
              Automatic Confirmation
            </h4>
            <p className="text-center text-sm md:text-md text-gray-500 leading-relaxed">
              Both parties receive instant confirmations and calendar updates.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="flex flex-col py-20 md:py-0 md:h-screen justify-center items-center gap-30 w-full">
        <div className="flex flex-col items-center gap-5">
          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 3.9 }}
            className="bg-clip-text text-start text-3xl md:text-5xl font-bold leading-tight"
          >
            Our Impact
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 4 }}
            className="text-center text-md md:text-xl text-gray-500 leading-relaxed"
          >
            Numbers that reflect our commitment to making scheduling better for
            everyone.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-[25%_25%_25%_25%] gap-15 md:gap-5 w-full justify-between px-20">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 4.1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 p-4 md:px-4 md:py-3 rounded-xl font-bold">
              <Users className="size-10 text-blue-600" />
            </div>
            <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-2xl md:text-3xl font-bold leading-tight">
              50K+
            </h4>
            <p className="text-center text-md md:text-lg font-medium text-gray-500 leading-relaxed">
              Active Users
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 4.2 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 p-4 md:px-4 md:py-3 rounded-xl font-bold">
              <Calendar className="size-10 text-blue-600" />
            </div>
            <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-2xl md:text-3xl font-bold leading-tight">
              1M+
            </h4>
            <p className="text-center text-md md:text-lg font-medium text-gray-500 leading-relaxed">
              Appointments
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 4.3 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 p-4 md:px-4 md:py-3 rounded-xl font-bold">
              <CircleCheckBig className="size-10 text-blue-600" />
            </div>
            <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-2xl md:text-3xl font-bold leading-tight">
              99.9%
            </h4>
            <p className="text-center text-md md:text-lg font-medium text-gray-500 leading-relaxed">
              Uptime
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 4.4 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 p-4 md:px-4 md:py-3 rounded-xl font-bold">
              <Star className="size-10 text-blue-600" />
            </div>
            <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-2xl md:text-3xl font-bold leading-tight">
              4.9/5
            </h4>
            <p className="text-center text-md md:text-lg font-medium text-gray-500 leading-relaxed">
              Rating
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default AboutUsPage;

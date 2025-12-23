// react
import { useNavigate } from "react-router-dom";

// motion
import { motion, useScroll, useTransform } from "motion/react";

// shadcn/ui
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// lucide
import {
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  Check,
  CirclePlay,
  Clock,
  Globe,
  Heart,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  Timer,
  TrendingUp,
  UserCheck,
  Zap,
} from "lucide-react";

// recharts
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function HomePage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const featuresY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      label: "Smart Scheduling",
      description:
        "Automated system that synchronizes with your calendar and optimizes available times  ",
      gradient: "from-gray-800 to-gray-900",
    },
    {
      icon: Bell,
      label: "Personalized Notifications",
      description:
        "Automatic SMS, email, and push reminders to reduce absences",
      gradient: "from-gray-700 to-gray-800",
    },
    {
      icon: BarChart3,
      label: "Detailed Reports",
      description:
        "Complete analysis of your business with performance metrics",
      gradient: "from-gray-600 to-gray-700",
    },
    {
      icon: Smartphone,
      label: "Multi-Platform",
      description: "Access from anywhere via the mobile or web app",
      gradient: "from-gray-500 to-gray-600",
    },
  ];

  // Chart data
  const revenueData = [
    { month: "Jan", beforeAgendify: 15000, afterAgendify: 15000 },
    { month: "Fev", beforeAgendify: 16000, afterAgendify: 18000 },
    { month: "Mar", beforeAgendify: 14500, afterAgendify: 20500 },
    { month: "Abr", beforeAgendify: 15800, afterAgendify: 22800 },
    { month: "Mai", beforeAgendify: 16200, afterAgendify: 25200 },
    { month: "Jun", beforeAgendify: 15900, afterAgendify: 27400 },
  ];

  const efficiencyData = [
    { metric: "Appointment Fee", beforeAgendify: 65, afterAgendify: 92 },
    { metric: "Customer Satisfaction", beforeAgendify: 78, afterAgendify: 96 },
    { metric: "Scheduling Time", beforeAgendify: 45, afterAgendify: 85 },
    { metric: "Absence Reduction", beforeAgendify: 25, afterAgendify: 75 },
  ];

  const noShowData = [
    { month: "Jan", faltas: 28 },
    { month: "Feb", faltas: 32 },
    { month: "Mar", faltas: 25 },
    { month: "Apr", faltas: 18 },
    { month: "May", faltas: 12 },
    { month: "Jun", faltas: 8 },
  ];

  const professionalTypesData = [
    { name: "Doctors", value: 35, color: "#1f2937" },
    { name: "Dentists", value: 25, color: "#374151" },
    { name: "Aesthetics", value: 20, color: "#4b5563" },
    { name: "Therapists", value: 12, color: "#6b7280" },
    { name: "Others", value: 8, color: "#9ca3af" },
  ];

  const kpiData = [
    {
      title: "Time Saved",
      value: "4.2h",
      subtitle: "per day",
      growth: "+65%",
      icon: Timer,
      gradient: "from-gray-800 to-gray-900",
    },
    {
      title: "Increased Revenue",
      value: "35%",
      subtitle: "on average",
      growth: "+35%",
      icon: TrendingUp,
      gradient: "from-gray-700 to-gray-800",
    },
    {
      title: "Absence Reduction",
      value: "60%",
      subtitle: "fewer no-shows",
      growth: "-60%",
      icon: UserCheck,
      gradient: "from-gray-600 to-gray-700",
    },
    {
      title: "Satisfaction",
      value: "98%",
      subtitle: "of users",
      growth: "+23%",
      icon: Heart,
      gradient: "from-gray-500 to-gray-600",
    },
  ];

  const forProfessionalsData = [
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description: "Optimize your schedule and reduce downtime",
      stats: "+35% average revenue",
    },
    {
      icon: Timer,
      title: "Time Savings",
      description: "Automate scheduling and confirmations",
      stats: "4 hours saved per day",
    },
    {
      icon: UserCheck,
      title: "Reduced Absences",
      description: "Intelligent Reminder System",
      stats: "-60% No-Shows",
    },
  ];

  const forCustomers = [
    {
      icon: Smartphone,
      title: "24/7 Scheduling",
      description: "Book appointments anytime, anywhere",
      badge: "Available 24/7",
    },
    {
      icon: Clock,
      title: "Total Flexibility",
      description: "Reschedule or cancel with ease",
      badge: "In just a few clicks",
    },
    {
      icon: Heart,
      title: "Personalized Experience",
      description: "Complete history and saved preferences",
      badge: "98% satisfaction",
    },
  ];

  const testimonials = [
    {
      avatar: "👩‍⚕️",
      username: "Dr. Ana Silva",
      role: "Dermatologist",
      company: "Bella Pele Clinic",
      content:
        "Agendify has transformed my practice. I no longer have to worry about scheduling, and my patients love the convenience.",
      rating: 5,
    },
    {
      avatar: "✂️",
      username: "Carlos Santos",
      role: "Owner",
      company: "Modern Barber Shop",
      content:
        "Since implementing the system, my revenue has increased by 40%. Clients can easily schedule appointments and rarely miss appointments.",
      rating: 5,
    },
    {
      avatar: "🧘‍♀️",
      username: "Marina Costa",
      role: "Therapist",
      company: "Zen Space",
      content:
        "It's incredible how it simplified my routine. Now I can focus on what really matters: taking care of my patients.",
      rating: 5,
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center gap-30">
      <motion.section
        style={{ y: heroY }}
        className="pt-40 flex flex-col justify-center items-center gap-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-center items-center gap-10"
        >
          <Badge
            variant="outline"
            className="bg-gray-100 py-1 px-3 md:py-2 md:px-5 flex md:gap-3 text-gray-400 font-normal md:font-medium text-ws md:text-sm"
          >
            <Sparkles /> Revolutionize your scheduling
          </Badge>

          <h1 className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-3xl md:text-6xl leading-tight">
            Turn appointments into
            <span className="block bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">
              incredible experiences
            </span>
          </h1>
          <p className="max-w-6/7 md:max-w-4xl mx-auto text-center text-sm md:text-xl text-gray-600 leading-relaxed">
            The all-in-one platform professionals use to automate scheduling,
            reduce no-shows, and increase revenue while delivering the best
            customer experience.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-5 w-full md:w-auto px-10"
        >
          <Button
            variant="outline"
            className="w-auto md:w-md h-12 rounded-xl flex justify-center gap-5 text-sm font-semibold cursor-pointer"
            onClick={() => navigate("login")}
          >
            Start for free <ArrowRight className="size-4" />
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10"
        >
          <p className="text-[0.7rem] md:text-sm flex gap-2 md:gap-3 items-center text-gray-500 font-normal">
            <Check className="text-green-500 size-3 md:size-4" /> 14-day free
            trial
          </p>
          <p className="text-[0.7rem] md:text-sm flex gap-2 md:gap-3 items-center text-gray-500 font-normal">
            <Check className="text-green-500 size-3 md:size-4" /> No card
            required
          </p>
          <p className="text-[0.7rem] md:text-sm flex gap-2 md:gap-3 items-center text-gray-500 font-normal">
            <Check className="text-green-500 size-3 md:size-4" /> 24/7 Support
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        style={{ y: featuresY }}
        className="flex flex-col items-center gap-15 md:gap-20 bg-gray-200 py-20 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex flex-col items-center gap-8 w-full"
        >
          <Badge className="py-1 px-3 md:py-2 md:px-5 flex md:gap-3 md:font-medium text-ws md:text-sm text-white">
            <Zap />
            Powerful Features
          </Badge>
          <h1 className="max-w-2/3 md:max-w-2xl mx-auto bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-xl md:text-4xl leading-tight">
            Everything you need to revolutionize your scheduling
          </h1>
        </motion.div>
        <div className="w-full h-auto md:h-170 flex justify-center items-center px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col items-start gap-2 md:gap-5 px-6 py-8 md:px-5 md:py-10 overflow-hidden group hover:scale-105 rounded-3xl select-none cursor-pointer transition-all duration-300 bg-gradient-to-b ${feature.gradient}`}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-xl flex justify-center items-center rounded-xl">
                  <feature.icon className="text-white size-6 md:size-8" />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 w-full text-white">
                  <div className="w-full flex justify-between items-center">
                    <h1 className="text-lg md:text-xl font-regular">
                      {feature.label}
                    </h1>
                  </div>
                  <p className="max-w-4/5 text-sm md:text-md font-normal text-start text-gray-200">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="flex flex-col items-center justify-center gap-10 md:gap-20">
        <div className="flex flex-col items-center gap-8 w-full">
          <Badge className="border-ws bg-green-200 text-green-800 backdrop-blur-xl py-1 px-3 md:py-2 md:px-5 flex md:gap-3 font-normal md:font-medium text-ws md:text-sm">
            <Heart className="size-8" />
            Unique Benefits
          </Badge>
          <h1 className="max-w-sm md:max-w-3xl mx-auto bg-clip-text text-center text-xl md:text-4xl leading-tight">
            Real Advantages for professinals and clients
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center gap-2 w-full"
          >
            <h1 className="max-w-2xl mx-auto bg-clip-text text-center text-xl md:text-2xl leading-tight">
              For Professinals
            </h1>
            <p className="max-w-xl mx-auto text-gray-600 leading-relaxed text-center text-sm sm:text-base md:text-md px-2 sm:px-4">
              Transform your management and maximize your results
            </p>
          </motion.div>
          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-7 px-4">
            {forProfessionalsData.map((forProfessional, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-200 backdrop-blur-xl rounded-3xl p-5 md:p-10 transition-all duration-300 hover:scale-102 hover:shadow-md flex flex-col justify-start items-start gap-2 md:gap-3 select-none"
              >
                <div className="w-12 h-12 md:w-15 md:h-15 flex justify-center items-center rounded-xl bg-gradient-to-b from-black/80 to-gray-900">
                  <forProfessional.icon className="text-white size-6 md:size-9" />
                </div>
                <h4 className="bg-clip-text text-start text-md md:text-lg leading-tight">
                  {forProfessional.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-start sm:text-base text-sm md:text-md">
                  {forProfessional.description}
                </p>
                <small className="py-1 px-3 font-semibold text-green-800 leading-relaxed text-start sm:text-base text-[0.7rem] md:text-sm bg-green-200 rounded-lg">
                  {forProfessional.stats}
                </small>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center gap-2 w-full"
          >
            <h1 className="max-w-2xl mx-auto bg-clip-text text-center text-xl md:text-2xl leading-tight">
              For Customers
            </h1>
            <p className="max-w-xl mx-auto text-gray-600 leading-relaxed text-center text-sm sm:text-base md:text-md px-2 sm:px-4">
              Simple, fast, and personalized experience
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-7 px-4 w-full">
            {forCustomers.map((forCustomers, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-100 backdrop-blur-xl rounded-3xl p-5 md:p-10 transition-all duration-300 hover:scale-102 hover:shadow-md flex flex-col justify-start items-start gap-2 md:gap-3 select-none"
              >
                <div className="w-12 h-12 md:w-15 md:h-15 flex justify-center items-center rounded-xl bg-gradient-to-b from-blue-600 to-blue-700">
                  <forCustomers.icon className="text-white size-6 md:size-9" />
                </div>
                <h4 className="bg-clip-text text-start text-md md:text-lg leading-tight">
                  {forCustomers.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-start text-sm sm:text-base md:text-md">
                  {forCustomers.description}
                </p>
                <small className="py-1 px-3 font-semibold text-blue-800 leading-relaxed text-start text-[0.7rem] sm:text-base md:text-sm bg-blue-200 rounded-lg">
                  {forCustomers.badge}
                </small>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-15 md:gap-20 py-0 pt-20 md:py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white w-full">
        <div className="flex flex-col items-center gap-8 w-full text-white">
          <Badge className="border-ws border-gray-500 bg-white/20 backdrop-blur-xl py-1 px-3 md:py-2 md:px-5 flex md:gap-3 font-normal md:font-medium text-ws md:text-sm">
            <BarChart3 />
            Real Data
          </Badge>
          <h1 className="max-w-sm md:max-w-3xl mx-auto bg-clip-text text-center text-xl md:text-4xl leading-tight">
            Proven results in numbers
          </h1>
          <p className="max-w-sm md:max-w-md mx-auto leading-relaxed text-center text-[0.8rem] sm:text-base md:text-lg px-2 sm:px-4">
            Over 10,000 professionals have already transformed their businesses
            with Agendify. See real results in metrics that matter.
          </p>
        </div>

        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] gap-5 md:gap-10 px-5 md:px-0">
          {kpiData.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col justify-start items-start gap-3 select-none"
            >
              <div
                className={`w-12 h-12 flex justify-center items-center rounded-xl bg-gradient-to-b ${kpi.gradient}`}
              >
                <kpi.icon className="text-white size-6" />
              </div>
              <small className="font-small text-ws text-gray-300">
                {kpi.title}
              </small>
              <h2 className="font-medium text-[1.5rem]">{kpi.value}</h2>
              <small className="font-small text-[0.7rem] text-gray-400">
                {kpi.subtitle}
              </small>
              <small className="font-small text-ws bg-green-900 text-green-300 rounded-lg px-2 py-1">
                {kpi.growth}
              </small>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="w-full md:w-3/4 grid lg:grid-cols-2 gap-5 md:gap-8 mb-16 px-5 md:px-0">
          {/* Revenue Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
          >
            <div className="mb-6">
              <h3 className="text-white mb-2">Revenue Growth</h3>
              <p className="text-white/70 text-sm">
                Before vs After Comparison of Agendify
              </p>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.1)"
                  />
                  <XAxis
                    dataKey="month"
                    stroke="rgba(255,255,255,0.7)"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,0.7)"
                    fontSize={12}
                    tickFormatter={(value) => `$ ${value.toLocaleString()}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "12px",
                      color: "white",
                    }}
                    formatter={(value) => [`R$ ${value.toLocaleString()}`, ""]}
                  />
                  <Line
                    type="monotone"
                    dataKey="beforeAgendify"
                    stroke="#9ca3af"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: "#9ca3af", r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="afterAgendify"
                    stroke="#ffffff"
                    strokeWidth={3}
                    dot={{ fill: "#ffffff", r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-gray-400"></div>
                <span className="text-white/70 text-sm">Before</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-white"></div>
                <span className="text-white text-sm">With Agendify</span>
              </div>
            </div>
          </motion.div>

          {/* Efficiency Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
          >
            <div className="mb-6">
              <h3 className="text-white mb-2">Improved Efficiency</h3>
              <p className="text-white/70 text-sm">
                Comparison of operational metrics
              </p>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={efficiencyData} layout="horizontal">
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.1)"
                  />
                  <XAxis
                    type="number"
                    stroke="rgba(255,255,255,0.7)"
                    fontSize={12}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <YAxis
                    type="category"
                    dataKey="metric"
                    stroke="rgba(255,255,255,0.7)"
                    fontSize={11}
                    width={100}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "12px",
                      color: "white",
                    }}
                    formatter={(value) => [`${value}%`, ""]}
                  />
                  <Bar
                    dataKey="beforeAgendify"
                    fill="rgba(156, 163, 175, 0.7)"
                    radius={[0, 4, 4, 0]}
                  />
                  <Bar
                    dataKey="afterAgendify"
                    fill="rgba(255, 255, 255, 0.9)"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded"></div>
                <span className="text-white/70 text-sm">Before</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded"></div>
                <span className="text-white text-sm">With Agendify</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Charts Row */}
        <div className="w-full md:w-3/4 grid lg:grid-cols-2 gap-5 md:gap-8 mb-16 px-5 md:px-0">
          {/* No-Show Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
          >
            <div className="mb-6">
              <h3 className="text-white mb-2">Absence Reduction</h3>
              <p className="text-white/70 text-sm">
                Percentage of no-shows per month
              </p>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={noShowData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.1)"
                  />
                  <XAxis
                    dataKey="month"
                    stroke="rgba(255,255,255,0.7)"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,0.7)"
                    fontSize={12}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "12px",
                      color: "white",
                    }}
                    formatter={(value) => [`${value}%`, "Taxa de Faltas"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="faltas"
                    stroke="rgba(239, 68, 68, 0.8)"
                    fill="rgba(239, 68, 68, 0.2)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 text-center">
              <p className="text-white/70 text-sm">
                Agendify Implementation in March
              </p>
            </div>
          </motion.div>

          {/* Professional Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
          >
            <div className="mb-6">
              <h3 className="text-white mb-2">Professionals Served</h3>
              <p className="text-white/70 text-sm">Distribution by category</p>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={professionalTypesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {professionalTypesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "12px",
                      color: "white",
                    }}
                    formatter={(value) => [`${value}%`, ""]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              {professionalTypesData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-white/70 text-sm">{item.name}</span>
                  <span className="text-white text-sm ml-auto">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-15 md:w-3/4 w-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center gap-5 w-full"
        >
          <Badge className="border-ws border-yellow-200 text-yellow-500 bg-yellow-100 py-1 px-3 md:py-2 md:px-5 flex md:gap-3 font-medium text-ws md:text-sm">
            <Star />
            Testimonials
          </Badge>
          <h1 className="max-w-2/3 md:max-w-2xl mx-auto bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-xl md:text-4xl leading-tight">
            What our customers say about Agendify
          </h1>
          <p className="max-w-2/3 md:max-w-xl mx-auto leading-relaxed text-gray-600 text-center text-[0.8rem] sm:text-base md:text-lg px-2 sm:px-4">
            Real stories from professionals who transformed their businesses
          </p>
        </motion.div>
        <div className="w-full grid grid-cols-1 xl:grid-cols-[1fr_1fr_1fr] gap-7 px-3 md:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white backdrop-blur-xl rounded-3xl p-7 md:p-10 border border-gray-200 shadow-lg hover:bg-white/15 transition-all duration-300 flex flex-col justify-start items-start gap-5"
            >
              <div className="font-regular text-md flex justify-start items-center gap-1">
                {Array.from({ length: 5 }, () => (
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-normal text-[0.8rem] md:text-ws text-gray-500">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-2 w-full">
                <div className="bg-gray-200 p-2 rounded-full text-lg">
                  {testimonial.avatar}
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-normal text-ws">{testimonial.username}</p>
                  <small className="font-regular text-ws text-gray-400">
                    {testimonial.role} • {testimonial.company}
                  </small>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="flex justify-center items-center py-15 md:py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-10 md:gap-15 w-full"
        >
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            <h1 className="max-w-2/3 md:max-w-2xl mx-auto text-white bg-clip-text text-center text-xl md:text-4xl leading-tight">
              Ready to transform your business?
            </h1>
            <p className="max-w-2/3 md:max-w-xl mx-auto leading-relaxed text-center text-[0.8rem] sm:text-base md:text-lg px-2 sm:px-4">
              Join thousands of professionals who have already revolutionized
              their scheduling. Start your free trial today.
            </p>
          </div>

          <div className="flex items-center  justify-center">
            <Button
              variant="secondary"
              className="h-12 rounded-xl flex justify-center gap-5 text-sm font-semibold w-auto md:w-sm cursor-pointer"
              onClick={() => navigate("login")}
            >
              <CirclePlay className="size-4" /> Start for free
            </Button>
          </div>
          <div className="h-25 md:h-auto flex flex-col md:flex-row gap-5 items-center">
            <small className="flex items-center gap-1 text-[0.8rem] md:text-sm text-gray-400">
              <Shield className="text-gray-400 size-3 md:size-4" /> Secure data
            </small>
            <small className="flex items-center gap-1 text-[0.8rem] md:text-sm text-gray-400">
              <Globe className="text-gray-400 size-3 md:size-4" /> 24/7 Support
            </small>
            <small className="flex items-center gap-1 text-[0.8rem] md:text-sm text-gray-400">
              <Zap className="text-gray-400 size-3 md:size-4" /> Setup in 5 min
            </small>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default HomePage;

// motion
import { motion } from "motion/react";

// shadcn/ui
import { Button } from "../ui/button";

//lucide
import { Plus } from "lucide-react";

// redux
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

// cartoon avatars
import cartoonAvatars from "@/assets/cartoonAvatars";

// utils
import { formatDate } from "@/lib/utils";

function UserSectionComponent() {
  const user_data = useSelector((state: RootState) => state.userData);
  const today = new Date();

  const transformDate = formatDate(today);

  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 1.1 }}
      className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between pt-25 pb-10 px-10 lg:px-20 bg-white border-b-1 border-b-gray-200 shadow-sm"
    >
      <div className="flex items-center gap-5">
        <div className="flex justify-center items-center rounded-full select-none relative bg-gradient-to-r from-blue-600 to-purple-600 border-1 py-2 px-1 text-4xl border-black/20">
          {cartoonAvatars[user_data.profileAvatarId].emoji}
        </div>
        <div>
          <h1 className="font-normal text-4xl leading-tight">
            Welcome back, {user_data.name.split(" ")[0]}!
          </h1>
          <p className="text-gray-500 text-md leading-tight">
            {transformDate.weekday}, {transformDate.dateFormatted}
          </p>
        </div>
      </div>
      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
        <Plus /> New Appointment
      </Button>
    </motion.section>
  );
}

export default UserSectionComponent;

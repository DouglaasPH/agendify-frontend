// react
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// cartoonAvatar
import cartoonAvatars from "@/assets/cartoonAvatars";

// logo component
import LogoComponent from "@/components/logo/Logo";

// Redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { resetUserData } from "@/features/auth/userDataSlice";
import { logout } from "@/features/auth/authSlice";

// API
import { logoutApi } from "@/services/authApi";

// motion
import { motion } from "motion/react";

// shadcn/ui
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

// lucide
import {
  Calendar,
  CalendarCheck,
  CircleUser,
  House,
  LogOut,
  Menu,
  User,
} from "lucide-react";

type NavLink = {
  label: string;
  address: string;
  icon: React.ElementType;
};

function LoggedInNavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState("Dashboard");

  const user_data = useSelector((state: RootState) => state.userData);
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );

  const navLinks: NavLink[] = [
    { label: "Dashboard", address: "/user/dashboard", icon: House },
    {
      label: "Availabilities",
      address: "/user/availability",
      icon: Calendar,
    },
    {
      label: "Appointments",
      address: "/user/appointment",
      icon: CalendarCheck,
    },
    {
      label: "View Profile",
      address: "/user/profile",
      icon: CircleUser,
    },
  ];

  const handleLogout = async () => {
    try {
      await logoutApi(access_token);
      dispatch(resetUserData());
      dispatch(logout());
    } catch (error) {
      return error;
    }
  };

  return (
    <nav className="flex justify-between px-10 lg:px-25 items-center h-full">
      <LogoComponent />

      {/* desktop layout */}
      <section className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <motion.a
            key={link.label}
            onClick={() => {
              setCurrentPage(link.label);
              navigate(link.address);
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.2 }}
            className={`cursor-pointer relative p-4 rounded-2xl transition-all duration-300 group py-2 ${
              location.pathname.includes(link.address)
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "text-gray-600 hover:text-black hover:bg-gray-100"
            }`}
          >
            <span className="relative z-10 flex gap-2 items-center">
              <link.icon className="w-4 h-4" /> {link.label}
            </span>
          </motion.a>
        ))}
      </section>

      {/* desktop layout */}
      <motion.div
        key={user_data.profileAvatarId}
        initial={{ scale: 0.8, opacity: 0, y: -50 }}
        exit={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          delay: 1.2,
        }}
        className={`hidden lg:flex justify-center items-center rounded-full select-none relative bg-gradient-to-br ${
          cartoonAvatars[user_data.profileAvatarId].bgGradient
        } py-2 px-2 text-xl border-black/20 border-1`}
      >
        {cartoonAvatars[user_data.profileAvatarId].emoji}
      </motion.div>

      {/* mobile layout */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.3 }}
        className="flex lg:hidden"
      >
        <Sheet>
          <SheetTrigger>
            <Button className="bg-transparent hover:bg-gray-50 shadow-none text-black w-10">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent className="flex flex-col border-none bg-gradient-to-b from-white to-gray-200 [&>button]:text-gray-600">
            <SheetHeader className="flex flex-row gap-4 justify-start items-start border-b-1 border-b-gray-200 h-20">
              <motion.div
                key={user_data.profileAvatarId}
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                exit={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 1.2,
                }}
                className={`justify-center items-center rounded-full select-none relative bg-gradient-to-br ${
                  cartoonAvatars[user_data.profileAvatarId].bgGradient
                } py-2 px-2 text-xl flex border-black/20 border-1`}
              >
                {cartoonAvatars[user_data.profileAvatarId].emoji}
              </motion.div>
              <motion.div
                key={user_data.profileAvatarId}
                initial={{ opacity: 0, y: 50 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.3,
                  duration: 0.4,
                }}
                className="text-black"
              >
                <p className="font-medium">{user_data.name}</p>
                <p className="text-sm text-muted-foreground">
                  {user_data.email}
                </p>
              </motion.div>
            </SheetHeader>
            <section className="flex flex-col gap-3 border-b-1 border-b-gray-200 h-50">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  onClick={() => navigate(link.address)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.4 }}
                  className="text-gray-600 hover:bg-red transition-all duration-300 hover:bg-white/5 rounded-lg pl-5 w-full  flex justify-start items-center px-4"
                >
                  <span
                    className={`relative z-10 text-sm font-semibold flex gap-2 items-center p-2 pl-4 w-full rounded-2xl ${
                      location.pathname.includes(link.address)
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-gray-600 hover:text-black hover:bg-gray-100"
                    }`}
                  >
                    {" "}
                    <link.icon className="w-4 h-4" strokeWidth={3} />
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </section>
            <section className="flex flex-col gap-3">
              <motion.a
                key="Profile"
                onClick={() => navigate("user/profile")}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 4 * 0.2, duration: 0.4 }}
                className="text-gray-600 hover:bg-red transition-all duration-300 hover:bg-white/5 rounded-lg pl-5 w-full  flex justify-start items-center px-4"
              >
                <span
                  className={`relative z-10 text-sm font-semibold flex gap-2 items-center p-2 pl-4 w-full rounded-2xl ${
                    currentPage === "Profile"
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-gray-600 hover:text-black hover:bg-gray-100"
                  }`}
                >
                  <User className="w-4 h-4" strokeWidth={3} />
                  Profile
                </span>
              </motion.a>
              <motion.a
                key="Logout"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 5 * 0.2, duration: 0.4 }}
                onClick={() => handleLogout()}
                className="text-gray-600 hover:bg-red transition-all duration-300 hover:bg-white/5 rounded-lg pl-5 w-full  flex justify-start items-center px-4"
              >
                <span
                  className={`relative z-10 text-sm font-semibold flex gap-2 items-center p-2 pl-4 w-full rounded-2xl text-red-600 `}
                >
                  <LogOut className="w-4 h-4" strokeWidth={3} />
                  Logout
                </span>
              </motion.a>
            </section>
          </SheetContent>
        </Sheet>
      </motion.section>
    </nav>
  );
}

export default LoggedInNavBar;

/*
{"[&>button>svg]:w-8 [&>button>svg]:h-8 ";}
 */

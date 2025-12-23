// react
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Redux
import type { RootState } from "../../store";
import { resetUserData } from "../../features/auth/userDataSlice";
import { logout } from "../../features/auth/authSlice";

// API
import { deleteApi, logoutApi } from "../../services/authApi";

// cartoonAvatars
import cartoonAvatars from "../../assets/cartoonAvatars";

// motion
import { motion } from "motion/react";

// shadcn/ui
import { Button } from "@/components/ui/button";

// lucide
import {
  Briefcase,
  Camera,
  LogOut,
  Mail,
  Phone,
  Shield,
  SquarePen,
  Trash2,
  User,
} from "lucide-react";

// utils
import { goToErrorPage } from "@/lib/utils";

function UserProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data_user = useSelector((state: RootState) => state.userData);
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );

  const handleDeleteAccount = async () => {
    try {
      await deleteApi(access_token);
      dispatch(resetUserData());
      dispatch(logout());
    } catch (error) {
      goToErrorPage(error);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutApi(access_token);
      dispatch(resetUserData());
      dispatch(logout());
    } catch (error) {
      goToErrorPage(error);
    }
  };

  return (
    <main className="flex flex-col items-center">
      <section className="h-screen flex flex-col justify-center items-center gap-12">
        <div className="w-full flex flex-col gap-3 justify-center items-center">
          <motion.div
            key={data_user.profileAvatarId}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            exit={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 1,
            }}
            className={`flex justify-center items-center rounded-full select-none relative bg-gradient-to-br ${
              cartoonAvatars[data_user.profileAvatarId].bgGradient
            } border-3 py-10 px-5 text-8xl border-black/20`}
          >
            {cartoonAvatars[data_user.profileAvatarId].emoji}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 1.4 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-4xl md:text-4xl leading-tight text-center"
          >
            {data_user.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 1.5 }}
            className="max-w-6/7 md:max-w-4xl mx-auto text-center text-xl md:text-2xl text-gray-600 leading-relaxed"
          >
            {data_user.profession}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1.6 }}
          className="flex flex-col gap-3 w-ws"
        >
          <Button
            variant="outline"
            className="py-6 md:py-5 w-2xs cursor-pointer"
            onClick={() => navigate("edit/avatar")}
          >
            <Camera /> Change Avatar
          </Button>
          <Button
            className="py-6 md:py-5 w-2xs cursor-pointer"
            onClick={() => handleLogout()}
          >
            <LogOut /> Log Out
          </Button>
        </motion.div>
      </section>

      {/* Account data */}
      <section className="h-screen flex flex-col justify-center gap-15">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center gap-5 w-full "
        >
          <h1 className="max-w-2xl mx-auto bg-clip-text text-center text-4xl md:text-5xl leading-tight">
            Account Data
          </h1>
          <p className="max-w-xl mx-auto text-gray-600 leading-relaxed text-center text-xl sm:text-base md:text-md px-2 sm:px-4">
            Your personal and contact information
          </p>
        </motion.div>
        {/* grid section of account data */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5 md:px-100 gap-10">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 2 }}
            className="bg-gray-300/20 p-5 rounded-2xl hover:shadow-md"
          >
            <div className="grid grid-cols-[12%_85%] justify-between">
              <div className="flex justify-center items-center bg-gradient-to-b from-blue-600 to-blue-700 p-3 rounded-md">
                <User className="text-white size-9" />
              </div>
              <div className="flex flex-col justify-between items-start">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg text-muted-foreground mb-1">Name</p>
                  <div>
                    <SquarePen
                      className="size-6 md:size-4.5 cursor-pointer"
                      onClick={() => navigate("edit/user-data")}
                    />
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-foreground">
                  {data_user.name}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Profession */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 2 }}
            className="bg-gray-300/20 p-5 rounded-2xl hover:shadow-md"
          >
            <div className="grid grid-cols-[12%_83%] justify-between">
              <div className="flex justify-center items-center bg-gradient-to-b from-blue-600 to-blue-700 p-3 rounded-md">
                <Briefcase className="text-white size-9" />
              </div>
              <div className="flex flex-col justify-between items-start">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg text-muted-foreground mb-1">
                    Profession
                  </p>
                  <div>
                    <SquarePen
                      className="size-6 md:size-4.5 cursor-pointer"
                      onClick={() => navigate("edit/user-data")}
                    />
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-foreground">
                  {data_user.profession}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phone Number */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 2 }}
            className="bg-gray-300/20 p-5 rounded-2xl hover:shadow-md"
          >
            <div className="grid grid-cols-[12%_83%] justify-between">
              <div className="flex justify-center items-center bg-gradient-to-b from-blue-600 to-blue-700 p-3 rounded-md">
                <Phone className="text-white size-9" />
              </div>
              <div className="flex flex-col justify-between items-start">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg text-muted-foreground mb-1">
                    Phone Number
                  </p>
                  <div>
                    <SquarePen
                      className="size-6 md:size-4.5 cursor-pointer"
                      onClick={() => navigate("edit/user-data")}
                    />
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-foreground">
                  {data_user.phoneNumber}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 2 }}
            className="bg-gray-300/20 p-5 rounded-2xl hover:shadow-md"
          >
            <div className="grid grid-cols-[12%_83%] justify-between">
              <div className="flex justify-center items-center bg-gradient-to-b from-blue-600 to-blue-700 p-3 rounded-md">
                <Mail className="text-white size-9" />
              </div>
              <div className="flex flex-col justify-between items-start">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg text-muted-foreground mb-1">E-mail</p>
                  <div>
                    <SquarePen
                      className="size-6 md:size-4.5 cursor-pointer"
                      onClick={() => navigate("edit/email")}
                    />
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-foreground">
                  {data_user.email}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-40 md:h-screen flex flex-col justify-center gap-15">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 2 }}
          className="flex flex-col items-center justify-center gap-5 w-full "
        >
          <h1 className="max-w-2xl mx-auto bg-clip-text text-center text-4xl md:text-5xl leading-tight">
            Account Security
          </h1>
          <p className="max-w-xl mx-auto text-gray-600 leading-relaxed text-center text-xl sm:text-base md:text-md px-2 sm:px-4">
            Manage your security preferences, such as changing your password or
            permanently deleting your account
          </p>
        </motion.div>
        {/* grid section of account security */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5 md:px-100 gap-10">
          {/* Password Protection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 2.1 }}
            className="flex flex-col justify-center items-center gap-6 bg-gradient-to-br from-blue-600 via-blue-400 to-purple-400 p-5 rounded-2xl hover:shadow-md"
          >
            <Shield className="text-white size-20" />
            <h4 className="text-xl md:text-3xl text-white">
              Password Protection
            </h4>
            <p className="w-5/6 text-center text-xl md:text-lg text-gray-200">
              Keep your account secure with a strong, up-to-date password
            </p>
            <Button
              variant="secondary"
              className="text-blue-700 text-md"
              onClick={() => navigate("edit/password")}
            >
              <Shield className="size-4" /> Change Password
            </Button>
          </motion.div>
          {/* Delete account */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 2.2 }}
            className="flex flex-col justify-center items-center gap-6 bg-gradient-to-br from-red-600 via-red-400 to-red-500 p-5 rounded-2xl hover:shadow-md"
          >
            <Trash2 className="text-white size-20" />
            <h4 className="text-xl md:text-3xl text-white">Danger Zone</h4>
            <p className="w-5/6 text-center text-xl md:text-lg text-gray-200">
              This action cannot be undone. All your data will be permanently
              removed.
            </p>
            <Button
              variant="secondary"
              className="text-red-700 text-md"
              onClick={() => handleDeleteAccount()}
            >
              <Trash2 className="size-4" /> Delete Account
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default UserProfilePage;

// react
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// API
import { modifyUserPassword } from "../../services/authApi";

// Redux
import type { RootState } from "../../store";

// motion
import { motion } from "motion/react";

// lucide
import { ArrowLeft, Lock, LockOpen, Save, Shield } from "lucide-react";

// shadcn/ui
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// utils
import { goToErrorPage } from "@/lib/utils";

function ResetPasswordWithLoginPage() {
  const navigate = useNavigate();
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [validateNewPassword, setValidateNewPassword] = useState<
    null | boolean
  >(null);
  const [validateConfirmNewPassword, setValidateConfirmNewPassword] = useState<
    null | boolean
  >(null);
  const [validatePassword, setValidatePassword] = useState<null | boolean>(
    null
  );

  const handleCurrentPassword = (inputValue: string) => {
    setCurrentPassword(inputValue);
    if (inputValue != "") {
      setValidatePassword(true);
    } else {
      setValidatePassword(false);
    }
  };

  const handleNewPassword = (inputValue: string) => {
    setNewPassword(inputValue);
    if (inputValue != "" && inputValue != currentPassword) {
      setValidateNewPassword(true);
    } else {
      setValidateNewPassword(false);
    }
  };

  const handleConfirmNewPassword = (inputValue: string) => {
    setConfirmNewPassword(inputValue);
    if (inputValue != "" && inputValue == newPassword) {
      setValidateConfirmNewPassword(true);
    } else {
      setValidateConfirmNewPassword(false);
    }
  };

  const handleSave = async () => {
    if (validatePassword && validateNewPassword && validateConfirmNewPassword) {
      try {
        await modifyUserPassword(access_token, {
          currentPassword: currentPassword,
          newPassword: newPassword,
        });
        navigate("/user/profile");
      } catch (error) {
        goToErrorPage(error);
      }
    } else return;
  };

  return (
    <main className="py-30 flex flex-col gap-25 items-center">
      <section className="flex flex-col gap-3">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-5xl md:text-6xl text-center font-semibold leading-tight"
        >
          Change Email
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="px-10 md:px-0 text-center text-md md:text-xl text-gray-500 leading-relaxed"
        >
          Update your password securely. Enter your current password to confirm
          the change.
        </motion.p>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        className="w-8/9 md:w-2/5 bg-white rounded-xl shadow-2xl flex flex-col gap-15 justify-center"
      >
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 flex flex-col items-center justify-center gap-5 py-10 rounded-t-3xl">
          <div className="text-white p-4 bg-white/20 rounded-full">
            <Shield className="size-8" />
          </div>
          <h4 className="bg-gradient-to-r text-white text-2xl md:text-3xl text-center font-semibold leading-tight">
            Change Password
          </h4>
          <p className="px-10 md:px-0 text-center text-md md:text-md text-white/70 leading-relaxed">
            Secure verification required
          </p>
        </div>
        <form>
          <div className="flex flex-col gap-8 px-5 md:px-15">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid gap-2"
            >
              <Label htmlFor="currentPassword" className="font-medium text-lg">
                <Lock className="text-blue-600 size-5" /> Current password
              </Label>
              <Input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => handleCurrentPassword(e.target.value)}
                className={`bg-[#F0F2F5] rounded-xl p-3 w-full py-4 md:py-0 ${
                  validatePassword == null || validatePassword
                    ? "border-none"
                    : "border-2 border-red-800 focus:border-red-800"
                }`}
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid gap-2"
            >
              <Label htmlFor="newPassword" className="font-medium text-lg">
                <Lock className="text-blue-600 size-5" /> New password
              </Label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => handleNewPassword(e.target.value)}
                className={`bg-[#F0F2F5] rounded-xl p-3 w-full py-4 md:py-0 ${
                  validateNewPassword == null || validateNewPassword
                    ? "border-none"
                    : "border-2 border-red-800 focus:border-red-800"
                }`}
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid gap-2"
            >
              <Label
                htmlFor="confirmNewPassword"
                className="font-medium text-lg"
              >
                <Lock className="text-blue-600 size-5" /> Confirm new password
              </Label>
              <Input
                id="confirmNewPassword"
                type="password"
                value={confirmNewPassword}
                onChange={(e) => handleConfirmNewPassword(e.target.value)}
                className={`bg-[#F0F2F5] rounded-xl p-3 w-full py-4 md:py-0 ${
                  validateConfirmNewPassword == null ||
                  validateConfirmNewPassword
                    ? "border-none"
                    : "border-2 border-red-800 focus:border-red-800"
                }`}
                required
              />
            </motion.div>
          </div>
        </form>
        <div className="px-5 md:px-15 pb-5 flex flex-col gap-5">
          <Button
            className="w-full py-6 md:py-5 rounded-xl text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700"
            onClick={() => handleSave()}
          >
            <Save /> Save Changes
          </Button>
          <Button
            className="w-full py-6 md:py-5 rounded-xl text-xl"
            variant="outline"
            onClick={() => navigate("/user/profile")}
          >
            <ArrowLeft className="size-4" /> Back to Profile
          </Button>
          <div className="flex flex-col gap-3 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 p-5 rounded-xl">
            <div className="flex flex-row items-center gap-3">
              <LockOpen className="size-6 text-blue-600" />
              <h4 className="bg-clip-text text-start text-sm md:text-lg font-semibold leading-tight">
                Security Notice
              </h4>
            </div>
            <p className="pl-9 text-start text-sm md:text-md text-gray-500 leading-relaxed">
              For your security, we require your current password to verify this
              change.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default ResetPasswordWithLoginPage;

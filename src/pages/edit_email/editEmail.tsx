// react
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// motion
import { motion } from "motion/react";

// lucide
import { ArrowLeft, LockOpen, Mail } from "lucide-react";

// shadcn
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// redux
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

// API
import { sendEmailToChangeEmail } from "../../services/authApi";

// components
import VerificationEmailModal from "./verificationEmailModal/verificationEmailModal";

function EditEmailPage() {
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );
  const user_email = useSelector((state: RootState) => state.userData.email);
  const navigate = useNavigate();
  const [newEmail, setNewEmail] = useState("");
  const [validateNewEmail, setValidateNewEmail] = useState<null | boolean>(
    null
  );
  const [seeModal, setSeeModal] = useState(false);

  const handleInsertNewEmail = (inputValue: string) => {
    setNewEmail(inputValue);

    const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

    if (inputValue.length !== 0 && !regex.test(inputValue))
      setValidateNewEmail(false);
    if (inputValue.length === 0) setValidateNewEmail(null);
    else if (user_email === inputValue) setValidateNewEmail(false);
    else setValidateNewEmail(true);
  };

  const handleSendInstructions = async () => {
    await sendEmailToChangeEmail(access_token, newEmail);
    setSeeModal(true);
    console.log(seeModal);
  };

  return (
    <>
      {seeModal ? <VerificationEmailModal newEmail={newEmail} /> : null}
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
            Update your email address securely. We'll send a verification link
            to confirm the change.
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
              <Mail className="size-8" />
            </div>
            <h4 className="bg-gradient-to-r text-white text-2xl md:text-3xl text-center font-semibold leading-tight">
              Update Email Address
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
                <Label htmlFor="email" className="font-medium text-lg">
                  <Mail className="text-blue-600 size-5" /> New Email Address
                </Label>
                <Input
                  placeholder="example@email.com"
                  id="email"
                  type="text"
                  value={newEmail}
                  onChange={(e) => handleInsertNewEmail(e.target.value)}
                  className={`bg-[#F0F2F5] rounded-xl p-3 w-full py-4 md:py-0${
                    validateNewEmail == null || validateNewEmail
                      ? "border-none"
                      : "border-2 border-red-800 focus:border-red-800"
                  } bg-[#F0F2F5] rounded-md p-3 w-full`}
                  required
                />
              </motion.div>
            </div>
          </form>
          <div className="px-5 md:px-15 pb-5 flex flex-col gap-5">
            <Button
              className="w-full py-6 md:py-5 rounded-xl text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 cursor-pointer"
              onClick={() => handleSendInstructions()}
            >
              Send Instructions
            </Button>
            <Button
              className="w-full py-6 md:py-5 rounded-xl text-xl  cursor-pointer"
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
                For your security, we need to send a confirmation link to your
                email address.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}

export default EditEmailPage;

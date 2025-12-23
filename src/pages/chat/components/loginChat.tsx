// react
import { useState } from "react";

// motion
import { motion } from "motion/react";

// shadcn
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// lucide
import { MessageCircle, User } from "lucide-react";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTokenCustomer,
  updateCustomerData,
} from "@/features/auth/customerSlice";
import type { RootState } from "@/store";

// api
import { registerOrLoginWithtoutCustomerIdApi } from "@/services/customer";

// utils
import { goToErrorPage, handleValidateEmail } from "@/lib/utils";

function LoginChat() {
  const userData = useSelector(
    (state: RootState) => state.customer.professionalData
  );
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState<null | boolean>(null);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);

    if (e.target.value.length === 0) {
      setIsValidEmail(null);
    } else {
      const condition = handleValidateEmail(e.target.value);
      setIsValidEmail(condition);
    }
  };

  const handleCickButton = async () => {
    if (name.length > 0 && isValidEmail) {
      try {
        const fetchAPI = await registerOrLoginWithtoutCustomerIdApi({
          name,
          email,
        });
        localStorage.setItem(
          "customer_id",
          String(fetchAPI.data.customer_data.id)
        );
        dispatch(updateCustomerData(fetchAPI.data.customer_data));
        dispatch(setAccessTokenCustomer(fetchAPI.data.access_token));
      } catch (error) {
        goToErrorPage(error);
      }
    } else return;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="w-full h-full flex justify-center items-center py-10"
    >
      <section>
        <Card className="justify-between items-center pt-10 pb-5 px-10 lg:w-md shadow-md">
          {/* title and description */}
          <section className="flex flex-col items-center gap-2">
            <div className="p-4 rounded-2xl bg-gradient-to-bl from-blue-500 to-indigo-500 text-white">
              <MessageCircle className="size-9" />
            </div>
            <p className="font-medium text-lg text-gray-600">
              Virtual Assistant Chat
            </p>
            <p className="text-muted-foreground text-sm">
              Schedule or manage your appointments easily
            </p>
          </section>

          {/* chat with */}
          <Card className="w-full flex-row pl-5 py-4 gap-3 bg-blue-50 border-2 border-blue-100 shadow-lg">
            <div className="p-3 bg-gradient-to-t from-blue-600 to-indigo-500 rounded-full">
              <User className="size-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-md text-gray-700">
                Chat with
              </span>
              <span className="text-muted-foreground text-sm">
                {userData.name}
              </span>
            </div>
          </Card>

          {/* inputs */}
          <section className="flex flex-col w-full gap-3">
            <div>
              <span className="font-medium text-sm text-gray-800">
                First and last name
              </span>
              <Input
                placeholder="Enter your first and last name"
                className="bg-gray-50 border-2 h-11"
                value={name}
                onChange={(prev) => setName(prev.target.value)}
              />
            </div>
            <div>
              <span
                className={`font-medium text-sm ${
                  isValidEmail == null || isValidEmail
                    ? "text-gray-800"
                    : "text-red-600"
                }`}
              >
                Email
              </span>
              <Input
                placeholder="your.email@example.com"
                className={`bg-gray-50 border-2 h-11 ${
                  isValidEmail == null || isValidEmail ? null : "border-red-600"
                }`}
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
          </section>

          <Button
            className="w-full py-6 bg-gradient-to-bl from-blue-600 to-indigo-700 cursor-pointer"
            onClick={handleCickButton}
          >
            Start Chat
          </Button>

          <span className="text-muted-foreground text-sm">
            🔒 We will remember you for next time on this device
          </span>
        </Card>
      </section>
    </motion.div>
  );
}

export default LoginChat;

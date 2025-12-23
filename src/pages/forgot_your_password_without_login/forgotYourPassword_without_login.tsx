// react
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// shadcn/ui
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgotYourPasswordApi } from "@/services/authApi";
import { TriangleAlert } from "lucide-react";

// motion
import { motion } from "motion/react";

function ForgotYourPasswordWithoutLoginPage() {
  const navigate = useNavigate();
  const [submited, setSubmited] = useState(false);
  const [email, setEmail] = useState("");

  const redirectToLogin = () => {
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  const submit = async () => {
    setSubmited(true);
    await forgotYourPasswordApi(email);
    redirectToLogin();
  };

  return (
    <>
      {submited ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full h-screen flex flex-col justify-center items-center p-5 py-5 sm:py-5 md:py-30"
        >
          <Card className="w-full max-w-screen-sm flex flex-col justify-between items-center">
            <CardHeader className="w-full">
              <div className="w-full flex items-center justify-center">
                <div className="p-5 rounded-full bg-orange-100 text-orange-600">
                  <TriangleAlert size={30} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="w-full text-center flex flex-col items-center gap-5">
              <p className="font-medium text-gray-600">
                If this email address is registered, we will send you a recovery
                link.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center items-center">
              <div className=" text-center text-sm leading-relaxed">
                Remember your password?{" "}
                <a
                  href="/login"
                  className="hover:underline hover:underline-offset-4 font-medium text-blue-600"
                >
                  Back to Login
                </a>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="w-full h-screen flex flex-col justify-center items-center p-5 py-5 sm:py-5 md:py-30"
        >
          <Card className="w-full max-w-screen-sm flex flex-col justify-between items-center">
            <CardHeader className="w-full">
              <div className="w-full flex flex-col items-center text-center gap-2">
                <h1 className="text-3xl font-normal w-full">
                  Forgot your password?
                </h1>
                <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                  Enter your email to receive password reset instructions.
                </p>
              </div>
            </CardHeader>
            <CardContent className="w-full">
              <div className="flex flex-col gap-10">
                <form className="flex flex-col justify-start gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </form>
                <Button
                  variant="default"
                  className="w-full cursor-pointer"
                  onClick={() => submit()}
                >
                  Send Instructions
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center items-center">
              <div className=" text-center text-sm leading-relaxed">
                Remember your password?{" "}
                <a
                  href="/login"
                  className="hover:underline hover:underline-offset-4 font-medium text-blue-600"
                >
                  Back to Login
                </a>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </>
  );
}

export default ForgotYourPasswordWithoutLoginPage;

/*



*/

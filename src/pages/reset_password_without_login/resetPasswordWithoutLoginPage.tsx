// motion
import { motion } from "motion/react";

// shadcn
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { forgotYourPasswordResetPasswordApi } from "@/services/authApi";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

function ResetPasswordWithoutLoginPage() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isTheSamePassword, setIsTheSamePassword] = useState<
    null | false | true
  >(null);
  const [viewPasswordChangedSuccesfully, setViewPasswordChangedSuccesfully] =
    useState(false);

  const changeInputConfirm = (inputValue: string) => {
    setConfirmNewPassword(inputValue);

    if (inputValue == newPassword) setIsTheSamePassword(true);
    else setIsTheSamePassword(false);
  };

  const changeInputNew = (inputValue: string) => {
    setNewPassword(inputValue);

    if (inputValue == confirmNewPassword) setIsTheSamePassword(true);
    else setIsTheSamePassword(false);
  };

  const submit = async () => {
    if (!isTheSamePassword || token == undefined) return;

    try {
      await forgotYourPasswordResetPasswordApi(newPassword, token);
      setViewPasswordChangedSuccesfully(true);
    } catch {
      return;
    }
  };

  return (
    <>
      {viewPasswordChangedSuccesfully ? (
        <div className="fixed h-screen w-screen flex justify-center items-center bg-white/30 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card className="rounded-none md:rounded-4xl w-screen h-screen md:w-xl md:h-auto flex flex-col gap-8 bg-white pt-30 px-5 md:py-10 md:px-10">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-12 h-24 md:h-22 text-green-600" />
              </div>
              <h1 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-5xl md:text-5xl text-center font-normal leading-tight">
                Password Changed
              </h1>
              <p className="px-10 md:px-0 text-center text-md md:text-xl text-gray-500 leading-relaxed">
                Your new password has been successfully changed. You can now use
                it to access your account.
              </p>
              <Button
                className="w-full py-6 md:py-5 rounded-xl text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white items-center hover:text-white"
                variant="outline"
                onClick={() => navigate("/user/profile")}
              >
                Go to Login <ArrowRight className="size-4" />
              </Button>
            </Card>
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full h-screen flex flex-col justify-center items-center p-5 py-5 sm:py-5 md:py-30"
        >
          <Card className="w-full max-w-screen-sm flex flex-col justify-between items-center">
            <CardHeader className="w-full">
              <div className="w-full flex flex-col items-center text-center gap-2">
                <h1 className="text-3xl font-normal w-full">Reset password</h1>
                <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                  Enter your email to receive password reset instructions.
                </p>
              </div>
            </CardHeader>
            <CardContent className="w-full">
              <div className="flex flex-col gap-10">
                <form className="flex flex-col justify-start gap-5">
                  <div className="flex flex-col justify-start gap-2">
                    <Label htmlFor="text">New password</Label>
                    <Input
                      id="newPassword"
                      type="text"
                      placeholder="Enter your new password"
                      required
                      value={newPassword}
                      onChange={(e) => changeInputNew(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-2">
                    <Label htmlFor="email">Confirm new password</Label>
                    <Input
                      id="confirmPassword"
                      type="text"
                      placeholder="Confirm password"
                      required
                      value={confirmNewPassword}
                      className={
                        isTheSamePassword == false
                          ? "border-1 border-red-600"
                          : ""
                      }
                      onChange={(e) => changeInputConfirm(e.target.value)}
                    />
                  </div>
                </form>
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => submit()}
                >
                  Reset Password
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

export default ResetPasswordWithoutLoginPage;

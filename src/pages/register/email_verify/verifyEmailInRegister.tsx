// react
import { useNavigate, useParams } from "react-router-dom";

// motion
import { motion } from "motion/react";

//lucide
import { ArrowRight, CheckCircle, CircleX } from "lucide-react";

// shadcn
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import LoadingType from "@/components/loading/loadingType";
import { registerApi } from "@/services/authApi";

function CheckEmailDuringRegistrationPage() {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [status, setStatus] = useState<undefined | number>();

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    const api = async () => {
      try {
        await registerApi(token);
        setStatus(0);
      } catch (error) {
        setStatus(1);
      }
    };

    api();
  }, [token, navigate]);

  const allStatus = [
    {
      type: "Successfully",
      title: "Account Verified Successfully!",
      paragraph:
        "Your email has been verified and your account has been successfully created. You can now log in and start using Agendify.",
      icon: CheckCircle,
      descriptionButton: "Start Using",
    },
    {
      type: "Error",
      title: "Oops! Something went wrong",
      paragraph:
        "We encountered an unexpected issue while processing your request. Please try again, or contact support if the problem persists. Don’t worry, your data is safe.",
      icon: CircleX,
      descriptionButton: "Try again",
    },
  ];

  return (
    <>
      {status == undefined ? (
        <div className="h-screen w-screen flex justify-center items-center">
          <LoadingType />
        </div>
      ) : (
        <div className="fixed h-screen w-screen flex justify-center items-center bg-white/30 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card className="rounded-none md:rounded-4xl w-screen h-screen md:w-xl md:h-auto flex flex-col gap-8 bg-white pt-30 px-5 md:py-10 md:px-10">
              <div
                className={`w-24 h-24 ${
                  status == 0 ? "bg-green-100" : "bg-red-100"
                } rounded-full flex items-center justify-center mx-auto mb-5`}
              >
                {status == 0 ? (
                  <CheckCircle className="w-12 h-24 md:h-22 text-green-600" />
                ) : (
                  <CircleX className="w-12 h-24 md:h-22 text-red-600" />
                )}
              </div>
              <h1 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-5xl md:text-5xl text-center font-normal leading-tight">
                {allStatus[status].title}
              </h1>
              <p className="px-10 md:px-0 text-center text-md md:text-xl text-gray-500 leading-relaxed">
                {allStatus[status].paragraph}
              </p>
              <Button
                className="w-full py-6 md:py-5 rounded-xl text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white items-center hover:text-white cursor-pointer"
                variant="outline"
                onClick={() => navigate("/user/profile")}
              >
                {allStatus[status].descriptionButton}{" "}
                <ArrowRight className="size-4" />
              </Button>
            </Card>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default CheckEmailDuringRegistrationPage;

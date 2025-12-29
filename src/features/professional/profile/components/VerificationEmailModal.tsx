// react
import { useNavigate } from "react-router-dom";

// shadcn
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// motion
import { motion } from "motion/react";

// lucide
import { ArrowLeft, CheckCircle } from "lucide-react";

type Props = {
  newEmail: string;
};

function VerificationEmailModal({ newEmail }: Props) {
  const navigate = useNavigate();

  return (
    <div className="fixed h-screen w-screen flex justify-center items-center bg-white/30 backdrop-blur-md">
      <Card className="rounded-none md:rounded-4xl w-screen h-screen md:w-xl md:h-auto flex flex-col gap-10 bg-white pt-30 px-5 md:py-10 md:px-10">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-5xl md:text-5xl text-center font-normal leading-tight"
        >
          Verification Email Sent
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="px-10 md:px-0 text-center text-md md:text-xl text-gray-500 leading-relaxed"
        >
          We've sent a confirmation link to your current email address. Please
          check your inbox and click the link to verify your new email address.
        </motion.p>
        <p className="w-full p-5 rounded-xl bg-blue-50 border-1 border-blue-300 text-center font-semibold text-blue-700">
          New email: <span className="font-normal">{newEmail}</span>
        </p>
        <Button
          className="w-full py-6 md:py-5 rounded-xl text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white cursor-pointer hover:text-white hover:scale-105"
          variant="outline"
          onClick={() => navigate("/user/profile")}
        >
          <ArrowLeft className="size-4" /> Back to Profile
        </Button>
      </Card>
    </div>
  );
}

export default VerificationEmailModal;

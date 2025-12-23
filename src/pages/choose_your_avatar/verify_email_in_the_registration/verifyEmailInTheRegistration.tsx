import { Card } from "@/components/ui/card";
import { CircleAlert, Mail } from "lucide-react";
import { motion } from "motion/react";

function VerifyEmailInTheRegistrationPage() {
  return (
    <main className="min-h-screen w-full px-5 md:px-0 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full h-full flex justify-center items-center "
      >
        <Card className="w-full max-w-md items-center gap-10 px-10">
          <section className="flex flex-col items-center text-center gap-5">
            <div className="h-20 w-20 bg-blue-100 flex items-center justify-center rounded-full">
              <Mail size={40} className="text-blue-600" />
            </div>
            <h1 className="font-bold text-3xl text-gray-500">
              Verify Your Email
            </h1>
            <p className="text-md text-gray-500">
              To complete your registration, please check your inbox and confirm
              your email address.
            </p>
          </section>
          <section className="text-center bg-gray-100 p-2 rounded-xl text-md font-normal text-gray-600">
            <p>
              We've sent a confirmation link to your email. Click the button
              inside the message to activate your account.
            </p>
          </section>
          <section className="flex items-start gap-3 bg-orange-100 p-2 rounded-xl text-md font-normal text-orange-800">
            <CircleAlert className="text-orange-600" size={30} />
            <p>
              Didn't receive the email? Check your spam folder or request a new
              link.
            </p>
          </section>
        </Card>
      </motion.div>
    </main>
  );
}

export default VerifyEmailInTheRegistrationPage;

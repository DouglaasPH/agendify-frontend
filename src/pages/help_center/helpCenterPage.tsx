// react
import { useState } from "react";

// lucide
import { ChevronDown } from "lucide-react";

// motion
import { motion } from "motion/react";

// shadcn
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// radix
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

function HelpCenterPage() {
  const [questionClicked, setQuestionClicked] = useState(0);

  const accordions = [
    {
      question: "How do I create my first appointment?",
      response:
        "To create your first appointment, go to your dashboard and click the 'New Appointment' button. Fill in the required details like date, time, client information, and any specific notes. Click 'Save' to confirm your appointment.",
    },
    {
      question: "Can I integrate Agendify with my calendar?",
      response:
        "Yes! Agendify supports integration with Google Calendar, Outlook, and Apple Calendar. Go to Settings > Integrations to connect your preferred calendar application. All appointments will sync automatically.",
    },
    {
      question: "How do I set up payment methods?",
      response:
        "Navigate to Settings > Payments to add your preferred payment methods. We support credit cards, PayPal, and bank transfers. You can also set up automatic billing for recurring appointments.",
    },
    {
      question: "What notification options are available?",
      response:
        "You can receive notifications via email, SMS, or push notifications. Set up reminders for upcoming appointments, payment confirmations, and client messages in Settings > Notifications.",
    },
    {
      question: "Is my data secure with Agendify?",
      response:
        "Absolutely! We use enterprise-grade encryption to protect your data. All information is stored securely and we comply with GDPR and other privacy regulations. Your data is never shared with third parties.",
    },
    {
      question: "How do I cancel or reschedule an appointment?",
      response:
        "To cancel or reschedule, go to your appointments list, find the specific appointment, and click on it. You'll see options to 'Reschedule' or 'Cancel'. Your clients will be automatically notified of any changes.",
    },
    {
      question: "Can I customize my booking page?",
      response:
        "Yes! You can customize your booking page with your brand colors, logo, and custom messaging. Go to Settings > Branding to personalize your client-facing booking experience.",
    },
    {
      question: "What if I forget my password?",
      response:
        "Click 'Forgot Password' on the login page and enter your email address. We'll send you a secure link to reset your password. For additional security, you can also enable two-factor authentication.",
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center gap-30 w-full pt-40 px-5 md:px-120">
      <section className="flex flex-col justify-center items-center w-full gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-5xl md:text-6xl text-center font-bold leading-tight"
        >
          Help Center
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-center text-lg md:text-xl text-gray-500 leading-relaxed"
        >
          Find quick answers or reach out to our support team for assistance.
        </motion.p>
      </section>
      <section className="flex flex-col justify-center items-center w-full gap-10">
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="bg-clip-text text-center text-3xl md:text-3xl font-normal leading-tight"
        >
          Frequently Asked Questions
        </motion.h4>
        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-5"
          >
            {accordions.map((accordion, index) => (
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                <Card className="w-full px-5">
                  <AccordionItem
                    value={`item-${index + 1}`}
                    className="w-full flex flex-col gap-5"
                  >
                    <AccordionTrigger
                      className="w-full flex justify-between items-center"
                      onClick={() =>
                        questionClicked !== index + 1
                          ? setQuestionClicked(index + 1)
                          : setQuestionClicked(0)
                      }
                    >
                      <span className="font-semibold text-sm ">
                        {accordion.question}
                      </span>
                      <div>
                        <ChevronDown
                          className={`size-5 text-gray-400 transition-transform duration-300 ease-in-out ${
                            questionClicked === index + 1 ? "rotate-45" : ""
                          }`}
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <p className="text-start text-foreground text-lg md:text-sm text-gray-500 leading-relaxed">
                        {accordion.response}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
          className="w-full"
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle>
                <h4 className="bg-clip-text text-center text-3xl md:text-2xl font-normal leading-tight">
                  Still need help?
                </h4>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg md:text-lg text-gray-500 leading-relaxed">
                Our team is ready to assist you.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="px-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Get Support
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}

export default HelpCenterPage;

// lucide
import { Instagram, Linkedin, Mail } from "lucide-react";

// motion
import { motion } from "motion/react";

// shadcn/ui
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ContactPage() {
  return (
    <main className="flex flex-col justify-center items-center gap-30 w-full pt-40 px-5 md:px-40">
      <section className="flex flex-col justify-center items-center w-full gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-5xl md:text-6xl text-center font-bold leading-tight"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-center text-lg md:text-xl text-gray-500 leading-relaxed"
        >
          Have questions about Agendify? We're here to help you streamline your
          scheduling and make the most of our platform. Reach out anytime!
        </motion.p>
      </section>
      <section className="grid grid-rows-2 md:grid-cols-[50%_50%] items-start gap-10 w-full justify-center">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>
                <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-lg md:text-xl text-start font-medium leading-tight">
                  Send us a message
                </h4>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-md md:text-sm text-start font-medium leading-tight">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="bg-gray-100 p-3 rounded-md text-md md:text-sm font-normal leading-tight"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-md md:text-sm text-start font-medium leading-tight">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="your.email@example.com"
                    className="bg-gray-100 p-3 rounded-md text-md md:text-sm font-normal leading-tight"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-md md:text-sm text-start font-medium leading-tight">
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="bg-gray-100 p-3 rounded-md text-md md:text-sm font-normal leading-tight"
                  ></textarea>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="py-5 w-full">Send Message</Button>
            </CardFooter>
          </Card>
        </motion.div>

        <div className="grid grid-rows-1 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-200 p-2 rounded-md">
                      <Mail className="size-5 text-black/90" />
                    </div>
                    <p className="text-lg"> Email Support</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <div className="flex flex-col gap-2">
                  <p className="text-md md:text-md text-black/80 font-medium leading-relaxed">
                    support@agendify.com
                  </p>
                  <p className="text-sm md:text-md text-gray-500 leading-relaxed">
                    We typically respond within 24 hours
                  </p>
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  <p className="text-lg"> Follow us</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <Instagram className="size-5" />
                  <Linkedin className="size-5" />
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm md:text-md text-gray-500 leading-relaxed">
                  Stay updated with the latest features and tips for better
                  scheduling.
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;

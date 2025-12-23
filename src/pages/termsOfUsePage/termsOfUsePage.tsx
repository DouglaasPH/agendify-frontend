// lucide
import {
  FileText,
  Shield,
  Users,
  Lock,
  Mail,
  Calendar,
  TriangleAlert,
} from "lucide-react";

// motion
import { motion } from "motion/react";

function TermsOfUsePage() {
  return (
    <main className="flex flex-col items-center gap-20 pt-50 w-full">
      {/* Title */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className="flex flex-col items-center gap-5 w-full px-10 md:px-40"
      >
        <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue p-4 md:p-3 rounded-2xl">
          <FileText className="size-8 md:size-12 text-blue-600" />
        </div>
        <h1 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-3xl md:text-6xl text-center font-semibold leading-tight">
          Agendify Terms of Service
        </h1>
        <p className="text-center text-md md:text-xl text-gray-500 leading-relaxed">
          These terms of service govern your use of the Agendify platform. By
          using our services, you agree to comply with these terms.
        </p>
      </motion.section>
      {/* Terms of Use by Topic */}
      <section className="flex flex-col items-start gap-15 md:gap-20 px-10 md:px-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.3 }}
          className="flex flex-col gap-5"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue px-3.5 py-1 rounded-lg text-xl font-semibold text-blue-600">
              1
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              Acceptance of Terms
            </h4>
          </div>
          <div className="pl-11">
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              By accessing and using Agendify, you accept and agree to comply
              with these Terms of Service. If you do not agree with any part of
              these terms, you should not use our platform.
              <br /> <br />
              These terms constitute a legal agreement between you and Agendify.
              We reserve the right to modify these terms at any time, and
              changes will take effect immediately upon publication.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.35 }}
          className="flex flex-col gap-5"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-purple-100 via-purple-200 to-purple px-3.5 py-1 rounded-lg text-xl font-semibold text-purple-600">
              2
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              System Usage
            </h4>
          </div>
          <div className="pl-11 flex flex-col items-start gap-4">
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              Agendify is an online scheduling platform that allows users to
              manage appointments, schedules, and commitments. You may use the
              system to:
            </p>
            <ul className="list-disc pl-5 flex flex-col items-start gap-1 text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              <li>Create and manage appointments</li>
              <li>Configure your availability</li>
              <li>Receive appointment notifications</li>
              <li>Share your calendar with clients</li>
              <li>Generate activity reports</li>
            </ul>
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              System usage must be done responsibly and in compliance with
              applicable laws.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.4 }}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-green-100 via-green-200 to-green px-3.5 py-1 rounded-lg text-xl font-semibold text-green-600">
              3
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              User Responsibilities
            </h4>
          </div>
          <div className="pl-11 flex flex-col gap-10 items-start">
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              As an Agendify user, you are responsible for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-5 w-full justify-between">
              <div className="flex flex-col gap-3 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 p-5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div>
                    <Users className="size-6 text-blue-600" />
                  </div>
                  <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-xl md:text-xl font-semibold leading-tight">
                    Account & Access
                  </h4>
                </div>
                <ul className="flex flex-col gap-1 list-disc pl-6 text-start text-sm md:text-md text-gray-700 leading-relaxed">
                  <li>Keeping information up to date</li>
                  <li>Protecting your credentials</li>
                  <li>Reporting unauthorized access</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 p-5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div>
                    <Shield className="size-6 text-green-600" />
                  </div>
                  <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-xl md:text-xl font-semibold leading-tight">
                    Appropriate Use
                  </h4>
                </div>
                <ul className="flex flex-col gap-1 list-disc pl-6 text-start text-sm md:text-md text-gray-700 leading-relaxed">
                  <li>Using the system appropriately</li>
                  <li>Not violating third-party rights</li>
                  <li>Respecting other users</li>
                </ul>
              </div>
            </div>
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              You also agree not to use the system for illegal activities, spam,
              or any purpose that could harm the platform's functionality.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.45 }}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue px-3.5 py-1 rounded-lg text-xl font-semibold text-blue-600">
              4
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              Privacy & Data Protection
            </h4>
          </div>
          <div className="pl-11 flex flex-col items-start gap-4">
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              We respect your privacy and are committed to protecting your
              personal data in accordance with GDPR and other applicable
              legislation.
            </p>
            <div className="flex flex-col gap-3 bg-blue-100 w-full p-5 rounded-xl border-1 border-blue-300">
              <div className="flex items-center gap-3">
                <Lock className="size-6 text-blue-600" />
                <h4 className="text-blue-600 text-center text-xl md:text-xl font-semibold leading-tight">
                  Your Rights
                </h4>
              </div>
              <ul className="flex flex-col gap-1 list-disc pl-6 text-start text-sm md:text-md text-blue-600 leading-relaxed">
                <li>Access your personal information</li>
                <li>Request correction of incorrect data</li>
                <li>Delete your account and data</li>
                <li>Data portability</li>
              </ul>
            </div>
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              For more details on how we handle your data, please refer to our
              Privacy Policy.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.5 }}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-orange-100 via-orange-200 to-orange px-3.5 py-1 rounded-lg text-xl font-semibold text-orange-600">
              5
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              Limitation of Liability
            </h4>
          </div>
          <div className="pl-11 flex flex-col gap-4">
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              Agendify is provided "as is" and we do not guarantee that the
              service will be uninterrupted or error-free. Our liability is
              limited to the maximum extent permitted by law.
            </p>
            <div className="flex flex-col gap-3 bg-orange-100 w-full p-5 rounded-xl border-1 border-orange-300">
              <div className="flex items-center gap-3">
                <TriangleAlert className="size-6 text-orange-600" />
                <h4 className="text-orange-600 text-center text-xl md:text-xl font-semibold leading-tight">
                  Important
                </h4>
              </div>
              <p className="text-start text-sm md:text-md text-orange-600 leading-relaxed">
                We are not responsible for indirect losses, consequential
                damages, or loss of profits arising from the use or inability to
                use the platform.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.55 }}
          className="flex flex-col gap-5"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-green-100 via-green-200 to-green px-3.5 py-1 rounded-lg text-xl font-semibold text-green-600">
              6
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              Intellectual Property
            </h4>
          </div>
          <div className="pl-11">
            <p className="mx-auto text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              All content, design, functionality, and technologies of Agendify
              are owned by us or licensed to us, and are protected by copyright
              and other intellectual property laws.
              <br /> <br />
              You retain rights to the content you create on the platform, but
              grant us a limited license to process and display that content as
              necessary to provide our services.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.6 }}
          className="flex flex-col gap-5"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-red-100 via-red-200 to-red px-3.5 py-1 rounded-lg text-xl font-semibold text-red-600">
              7
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              Termination & Suspension
            </h4>
          </div>
          <div className="pl-11">
            <p className="mx-auto text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              You may terminate your account at any time through the platform
              settings. We also reserve the right to suspend or terminate
              accounts that violate these terms.
              <br /> <br />
              In case of termination, your data will be handled according to our
              Privacy Policy and you will have a period to export your
              information before permanent deletion.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.65 }}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray px-3.5 py-1 rounded-lg text-xl font-semibold text-gray-600">
              8
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              General Provisions
            </h4>
          </div>
          <div className="pl-11 flex flex-col gap-6">
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              These terms are governed by applicable laws. Any disputes will be
              resolved preferably through mediation or arbitration, according to
              applicable regulations.
              <br /> <br />
              If any provision of these terms is deemed invalid, the remaining
              provisions will remain in full force and effect.
            </p>

            <div className="flex flex-col gap-3 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 p-5 rounded-xl">
              <div className="flex flex-row items-center gap-3">
                <Mail className="size-6 text-blue-600" />
                <h4 className="bg-clip-text text-start text-md md:text-xl font-semibold leading-tight">
                  Contact
                </h4>
              </div>
              <p className="pl-9 text-start text-sm md:text-md text-gray-500 leading-relaxed">
                For questions about these terms:{" "}
                <span className="text-blue-700">support@agendify.com</span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* update data */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.7 }}
        className="border-t-1 w-full flex items-center justify-center pt-10"
      >
        <div className="flex gap-2 items-center">
          <Calendar className="text-gray-500 size-5" />
          <p className="text-start text-sm md:text-md text-gray-500 leading-relaxed">
            Last updated: September 24, 2025
          </p>
        </div>
      </motion.section>
    </main>
  );
}

export default TermsOfUsePage;

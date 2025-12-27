// lucide
import {
  Shield,
  Users,
  Lock,
  Mail,
  Calendar,
  TriangleAlert,
  Eye,
  Database,
  Settings,
  Globe,
} from "lucide-react";

// motion
import { motion } from "motion/react";

function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col items-center gap-20 pt-50 w-full">
      {/* Title */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className="flex flex-col items-center gap-5 w-full px-10 px-10 md:px-40"
      >
        <div className="bg-gradient-to-br from-green-100 via-green-200 to-green p-4 md:p-3 rounded-2xl">
          <Shield className="size-8 md:size-12 text-green-600" />
        </div>
        <h1 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-3xl md:text-6xl text-center font-semibold leading-tight">
          Agendify Privacy Policy
        </h1>
        <p className="text-center text-md md:text-xl text-gray-500 leading-relaxed">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your personal information when you use Agendify.
        </p>
      </motion.section>
      {/* Terms of Use by Topic */}
      <section className="flex flex-col items-start gap-15 md:gap-20 px-10 md:px-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.3 }}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue px-3.5 py-1 rounded-lg text-xl font-semibold text-blue-600">
              1
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              Acceptance of Terms
            </h4>
          </div>
          <div className="pl-11 flex flex-col items-start gap-4">
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              We respect your privacy and are committed to protecting your
              personal data in accordance with GDPR and other applicable
              legislation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-5 w-full justify-between">
              <div className="flex flex-col gap-3 bg-blue-100 w-full p-5 rounded-xl border-1 border-blue-300">
                <div className="flex items-center gap-3">
                  <Users className="size-6 text-blue-600" />
                  <h4 className="text-blue-600 text-center text-xl md:text-xl font-semibold leading-tight">
                    Personal Information
                  </h4>
                </div>
                <ul className="flex flex-col gap-1 list-disc pl-6 text-start text-sm md:text-md text-blue-600 leading-relaxed">
                  <li>Name and email address</li>
                  <li>Profile information and preferences</li>
                  <li>Contact details for appointments</li>
                  <li>Account credentials (encrypted)</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 bg-purple-100 w-full p-5 rounded-xl border-1 border-purple-300">
                <div className="flex items-center gap-3">
                  <Users className="size-6 text-purple-600" />
                  <h4 className="text-purple-600 text-center text-xl md:text-xl font-semibold leading-tight">
                    Usage Data
                  </h4>
                </div>
                <ul className="flex flex-col gap-1 list-disc pl-6 text-start text-sm md:text-md text-purple-600 leading-relaxed">
                  <li>How you interact with our platform</li>
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Usage patterns and preferences</li>
                </ul>
              </div>
            </div>
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              We only collect information that is necessary to provide our
              services and improve your experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.35 }}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-green-100 via-green-200 to-green px-3.5 py-1 rounded-lg text-xl font-semibold text-green-600">
              2
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              How We Use Your Information
            </h4>
          </div>
          <div className="pl-11 flex flex-col items-start gap-6">
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              We use your information to provide, maintain, and improve our
              services. Specifically, we use your data to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-8 md:gap-4 w-full">
              <div className="flex flex-col gap-3">
                <h5 className="bg-clip-text text-start text-lg md:text-md font-semibold leading-tight">
                  Service Delivery
                </h5>
                <ul className="list-disc pl-5 flex flex-col items-start gap-1 text-start text-sm md:text-lg text-gray-500 leading-relaxed">
                  <li>Manage your appointments and schedules</li>
                  <li>Send notifications and reminders</li>
                  <li>Process payments and billing</li>
                  <li>Provide customer support</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="bg-clip-text text-start text-lg md:text-md font-semibold leading-tight">
                  Platform Improvement
                </h5>
                <ul className="list-disc pl-5 flex flex-col items-start gap-1 text-start text-sm md:text-lg text-gray-500 leading-relaxed">
                  <li>Analyze usage patterns</li>
                  <li>Develop new features</li>
                  <li>Enhance security measures</li>
                  <li>Personalize your experience</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-green-100 w-full p-5 rounded-xl border-1 border-green-300">
              <div className="flex items-center gap-3">
                <Eye className="size-6 text-green-600" />
                <h4 className="text-green-600 text-start text-xl md:text-xl font-semibold leading-tight ">
                  Transparency Commitment
                </h4>
              </div>
              <p className="text-start text-sm md:text-md text-green-600 leading-relaxed">
                We will never sell your personal information to third parties or
                use it for purposes other than those described in this policy
                without your explicit consent.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.4 }}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-purple-100 via-purple-200 to-purple px-3.5 py-1 rounded-lg text-xl font-semibold text-purple-600">
              3
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              Data Security & Protection
            </h4>
          </div>
          <div className="pl-11 flex flex-col gap-10 items-start">
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, or destruction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[33%_33%_33%] gap-5 md:gap-5 w-full justify-between">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue p-4 md:p-3 rounded-xl">
                  <Lock className="size-6 text-blue-600" />
                </div>
                <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-md md:text-md font-semibold leading-tight">
                  Encryption
                </h4>
                <p className="text-center text-sm md:text-md text-gray-500 leading-relaxed">
                  End-to-end encryption for all sensitive data
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="bg-gradient-to-br from-red-100 via-red-200 to-red p-4 md:p-3 rounded-xl">
                  <Shield className="size-6 text-red-600" />
                </div>
                <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-md md:text-md font-semibold leading-tight">
                  Access Control
                </h4>
                <p className="text-center text-sm md:text-md text-gray-500 leading-relaxed">
                  Strict access controls and authentication
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="bg-gradient-to-br from-green-100 via-green-200 to-green p-4 md:p-3 rounded-xl">
                  <Database className="size-6 text-green-600" />
                </div>
                <h4 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-center text-md md:text-md font-semibold leading-tight">
                  Secure Storage
                </h4>
                <p className="text-center text-sm md:text-md text-gray-500 leading-relaxed">
                  Protected servers and regular security audits
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 bg-orange-100 w-full p-5 rounded-xl border-1 border-orange-300">
              <div className="flex items-center gap-3">
                <TriangleAlert className="size-6 text-orange-600" />
                <h4 className="text-orange-600 text-start text-xl md:text-xl font-semibold leading-tight">
                  Security Incident Response
                </h4>
              </div>
              <p className="text-start text-sm md:text-md text-orange-600 leading-relaxed">
                In the unlikely event of a data breach, we will notify affected
                users within 72 hours and take immediate steps to secure the
                affected information.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.45 }}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-pink-100 via-pink-200 to-pink px-3.5 py-1 rounded-lg text-xl font-semibold text-pink-600">
              4
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              Your Privacy Rights
            </h4>
          </div>
          <div className="pl-11 flex flex-col items-start gap-6">
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              You have full control over your personal data. Under applicable
              privacy laws, including GDPR and CCPA, you have the following
              rights:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-8 md:gap-5 w-full">
              <div className="flex flex-col gap-8 md:gap-5">
                <div className="flex flex-row gap-2 items-start">
                  <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue px-2.5 py-1 rounded-lg text-sm font-semibold text-blue-600">
                    1
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="bg-clip-text text-start text-sm md:text-md font-semibold leading-tight">
                      Right to Access
                    </h5>
                    <p className="text-start text-sm md:text-sm text-gray-500 leading-relaxed">
                      Request a copy of all personal data we hold about you
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <div className="bg-gradient-to-br from-green-100 via-green-200 to-green px-2.5 py-1 rounded-lg text-sm font-semibold text-green-600">
                    2
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="bg-clip-text text-start text-sm md:text-md font-semibold leading-tight">
                      Right to Rectification
                    </h5>
                    <p className="text-start text-sm md:text-sm text-gray-500 leading-relaxed">
                      Correct any inaccurate or incomplete information
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <div className="bg-gradient-to-br from-purple-100 via-purple-200 to-purple px-2.5 py-1 rounded-lg text-sm font-semibold text-purple-600">
                    3
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="bg-clip-text text-start text-sm md:text-md font-semibold leading-tight">
                      Right to Erasure
                    </h5>
                    <p className="text-start text-sm md:text-sm text-gray-500 leading-relaxed">
                      Request deletion of your personal data
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 md:gap-5">
                <div className="flex flex-row gap-2 items-start">
                  <div className="bg-gradient-to-br from-orange-100 via-orange-200 to-orange px-2.5 py-1 rounded-lg text-sm font-semibold text-orange-600">
                    4
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="bg-clip-text text-start text-sm md:text-md font-semibold leading-tight">
                      Right to Portability
                    </h5>
                    <p className="text-start text-sm md:text-sm text-gray-500 leading-relaxed">
                      Export your data in a machine-readable format
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <div className="bg-gradient-to-br from-red-100 via-red-200 to-red px-2.5 py-1 rounded-lg text-sm font-semibold text-red-600">
                    5
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="bg-clip-text text-start text-sm md:text-md font-semibold leading-tight">
                      Right to Object
                    </h5>
                    <p className="text-start text-sm md:text-sm text-gray-500 leading-relaxed">
                      Opt-out of certain data processing activities
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <div className="bg-gradient-to-br from-green-100 via-green-200 to-green px-2.5 py-1 rounded-lg text-sm font-semibold text-green-600">
                    6
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="bg-clip-text text-start text-sm md:text-md font-semibold leading-tight">
                      Right to Restrict
                    </h5>
                    <p className="text-start text-sm md:text-sm text-gray-500 leading-relaxed">
                      Limit how we process your information
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-blue-100 w-full p-5 rounded-xl border-1 border-blue-300">
              <div className="flex items-start">
                <h4 className="text-blue-600 text-start text-xl md:text-xl font-semibold leading-tight">
                  How to Exercise Your Rights
                </h4>
              </div>
              <p className="text-start text-sm md:text-md text-blue-600 leading-relaxed">
                To exercise any of these rights, simply contact us at{" "}
                <span className="text-blue-700 font-semibold">
                  privacy@agendify.com
                </span>{" "}
                or use the privacy controls in your account settings. We will
                respond to your request within 30 days.
              </p>
            </div>
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
              Cookies & Tracking
            </h4>
          </div>
          <div className="pl-11 flex flex-col gap-4">
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your
              experience, analyze usage patterns, and provide personalized
              content.
            </p>
            <div className="flex flex-col gap-5 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 p-5 rounded-xl">
              <h4 className="bg-clip-text text-start text-lg md:text-md font-semibold leading-tight">
                Types of Cookies We Use:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-8 md:gap-5 w-full">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row gap-2 items-start">
                    <div className="flex flex-col gap-1">
                      <h5 className="bg-clip-text text-start text-sm md:text-md font-semibold leading-tight">
                        Essential Cookies
                      </h5>
                      <p className="text-start text-sm md:text-sm text-gray-500 leading-relaxed">
                        Required for basic platform functionality and cannot be
                        disabled
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-start">
                    <div className="flex flex-col gap-1">
                      <h5 className="bg-clip-text text-start text-sm md:text-md font-semibold leading-tight">
                        Functional Cookies
                      </h5>
                      <p className="text-start text-sm md:text-sm text-gray-500 leading-relaxed">
                        Remember your preferences and settings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 md:gap-5">
                  <div className="flex flex-row gap-2 items-start">
                    <div className="flex flex-col gap-1">
                      <h5 className="bg-clip-text text-start text-sm md:text-md font-semibold leading-tight">
                        Performance Cookies
                      </h5>
                      <p className="text-start text-sm md:text-sm text-gray-500 leading-relaxed">
                        Help us understand how users interact with our platform
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-start">
                    <div className="flex flex-col gap-1">
                      <h5 className="bg-clip-text text-start text-sm md:text-md font-semibold leading-tight">
                        Marketing Cookies
                      </h5>
                      <p className="text-start text-sm md:text-sm text-gray-500 leading-relaxed">
                        Used to deliver relevant advertisements (optional)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-orange-100 w-full p-5 rounded-xl border-1 border-orange-300">
              <div className="flex items-center gap-3">
                <Settings className="size-6 text-orange-600" />
                <h4 className="text-orange-600 text-center text-xl md:text-xl font-semibold leading-tight">
                  Coookie Control
                </h4>
              </div>
              <p className="text-start text-sm md:text-md text-orange-600 leading-relaxed">
                You can manage your cookie preferences at any time through your
                browser settings or our privacy preferences center in your
                account.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.55 }}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-green-100 via-green-200 to-green px-3.5 py-1 rounded-lg text-xl font-semibold text-green-600">
              6
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              Data Sharing & Third Parties
            </h4>
          </div>
          <div className="pl-11 flex flex-col gap-5">
            <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              We do not sell your personal information. We may share your data
              only in limited circumstances with trusted partners who help us
              provide our services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-5 w-full justify-between">
              <div className="flex flex-col gap-3 bg-green-100 w-full p-5 rounded-xl border-1 border-green-300">
                <h4 className="text-green-600 text-start text-xl md:text-xl font-semibold leading-tight">
                  ✓ When We May Share Data
                </h4>
                <ul className="flex flex-col gap-1 list-disc pl-6 text-start text-sm md:text-md text-green-600 leading-relaxed">
                  <li>With service providers who process payments</li>
                  <li>With cloud hosting providers for data storage</li>
                  <li>With analytics providers (anonymized data only)</li>
                  <li>When required by law or legal process</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 bg-red-100 w-full p-5 rounded-xl border-1 border-red-300">
                <h4 className="text-red-600 text-start text-xl md:text-xl font-semibold leading-tight">
                  ✗ When We Never Share Data
                </h4>
                <ul className="flex flex-col gap-1 list-disc pl-6 text-start text-sm md:text-md text-red-600 leading-relaxed">
                  <li>For marketing purposes by third parties</li>
                  <li>To data brokers or advertising networks</li>
                  <li>For commercial purposes unrelated to our services</li>
                  <li>Without proper data protection agreements</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.6 }}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-red-100 via-red-200 to-red px-3.5 py-1 rounded-lg text-xl font-semibold text-red-600">
              7
            </div>
            <h4 className="bg-clip-text text-start text-lg md:text-2xl font-semibold leading-tight">
              Termination & Suspension
            </h4>
          </div>
          <div className="pl-11 flex flex-col gap-5">
            <p className="  text-start text-sm md:text-lg text-gray-500 leading-relaxed">
              We retain your personal information only for as long as necessary
              to provide our services and comply with legal obligations.
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
              International Transfers & Updates
            </h4>
          </div>
          <div className="pl-11 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="bg-clip-text text-start text-lg md:text-md font-semibold leading-tight">
                International Data Transfers
              </h4>
              <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
                Your data may be processed in countries outside your residence.
                We ensure adequate protection through appropriate safeguards and
                compliance with international standards.
              </p>
              <div className="flex flex-col gap-3 bg-blue-100 w-full p-5 rounded-xl border-1 border-blue-300">
                <div className="flex items-center gap-3">
                  <Globe className="size-6 text-blue-600" />
                  <h4 className="text-blue-600 text-center text-xl md:text-xl font-semibold leading-tight">
                    Data Protection Measures
                  </h4>
                </div>
                <ul className="flex flex-col gap-1 list-disc pl-6 text-start text-sm md:text-md text-blue-600 leading-relaxed">
                  <li>Standard Contractual Clauses (SCCs)</li>
                  <li>Adequacy decisions by data protection authorities</li>
                  <li>Binding Corporate Rules where applicable</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="bg-clip-text text-start text-lg md:text-md font-semibold leading-tight">
                Policy Updates
              </h4>
              <p className="text-start text-sm md:text-lg text-gray-500 leading-relaxed">
                We may update this privacy policy from time to time. We will
                notify you of significant changes via email or through our
                platform, and the updated policy will include the revision date.
              </p>
              <div className="flex flex-col gap-3 bg-gray-100 w-full p-5 rounded-xl border-1 border-gray-300">
                <div className="flex items-center gap-3">
                  <Mail className="size-6 text-gray-600" />
                  <h4 className="text-gray-600 text-center text-xl md:text-xl font-semibold leading-tight">
                    Contact Our Privacy Team
                  </h4>
                </div>
                <ul className="flex flex-col gap-1 list-none pl-9 text-start text-sm md:text-md text-gray-600 leading-relaxed">
                  <li>
                    For privacy-related questions or to exercise your rights:
                  </li>
                  <li>Email: privacy@agendify.com</li>
                  <li>Data Protection Officer: dpo@agendify.com</li>
                </ul>
              </div>
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

export default PrivacyPolicyPage;

// shadcn/ui
import { Badge } from "@/components/ui/badge";

// lucide-react
import { Lock } from "lucide-react";

function ThirdSectionComponent() {
  return (
    <div className="flex flex-col h-125 sm:h-125 md:h-85 gap-5">
      <section className="flex flex-col items-center gap-3">
        <div className="flex flex-row items-center gap-2 w-full">
          <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center">
            <Lock strokeWidth={2.5} className="w-5 h-5 text-purple-600" />
          </div>
          <div className="flex flex-col items-start">
            <small className="leading-7 [&:not(:first-child)]:mt-6">
              License & Usage Rights
            </small>
            <Badge
              variant="secondary"
              className="p-1 text-[0.6rem] leading-none"
            >
              Required Section
            </Badge>
          </div>
        </div>
        <div className="grid md:grid-cols-[49%_49%] gap-4 w-full">
          <div className="bg-muted/100 rounded-lg p-4">
            <h4 className="mb-3 scroll-m-20 text-sm font-small tracking-tight">
              🔒 Data We Collect
            </h4>
            <ul className="foreground space-y-2">
              <li className="text-xs leading-none font-small text-gray-400">
                • Basic registration info (name, email, phone) number
              </li>
              <li className="text-xs leading-none font-small text-gray-400">
                • Appointment and usage data
              </li>
              <li className="text-xs leading-none font-small text-gray-400">
                • Technical details (IP, device)
              </li>
              <li className="text-xs leading-none font-small text-gray-400">
                • User preferences and settings
              </li>
            </ul>
          </div>
          <div className="bg-muted/100 rounded-lg p-4">
            <h4 className="mb-3 scroll-m-20 text-sm font-small tracking-tight">
              🛡️ How We Protect It
            </h4>

            <ul className="foreground space-y-2">
              <li className="text-xs leading-none font-small text-gray-400">
                • Encryption for sensitive data
              </li>
              <li className="text-xs leading-none font-small text-gray-400">
                • Limited internal access
              </li>
              <li className="text-xs leading-none font-small text-gray-400">
                • Suspicious activity monitoring access
              </li>
              <li className="text-xs leading-none font-small text-gray-400">
                • Regular security updates
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col gap-2">
          <h4 className="text-blue-600 scroll-m-20 text-sm font-small tracking-tight">
            Your Privacy Rights
          </h4>
          <p className="text-xs leading-none font-small text-blue-600">
            You have the right to access, modify, or delete your personal data
            at any time. We will never sell your personal information to third
            parties.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ThirdSectionComponent;

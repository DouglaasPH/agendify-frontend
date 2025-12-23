// shadcn/ui
import { Badge } from "@/components/ui/badge";

// lucide-react
import { Shield } from "lucide-react";

function SecondSectionComponent() {
  return (
    <div className="flex flex-col h-auto gap-5 pb-5">
      <section className="flex flex-col items-center gap-3">
        <div className="flex flex-row items-center gap-2 w-full">
          <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
            <Shield strokeWidth={2.5} className="w-5 h-5 text-blue-600" />
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
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 w-full">
          <h4 className="text-green-800 mb-2 scroll-m-20 text-sm font-semibold tracking-tight">
            ✓ What you can do
          </h4>
          <ul className="text-green-700 space-y-2">
            <li className="text-sm leading-none font-small">
              • Create and manage your user account with accurate information
            </li>
            <li className="text-sm leading-none font-small">
              • Use the platform to book, cancel, or track appointments
            </li>
            <li className="text-sm leading-none font-small">
              • Configure your privacy and communication preferences
            </li>
            <li className="text-sm leading-none font-small">
              • Contact support for questions or issues
            </li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 w-full">
          <h4 className="text-red-800 mb-2 scroll-m-20 text-sm font-semibold tracking-tight">
            ✗ What you cannot do
          </h4>
          <ul className="text-red-700 space-y-2">
            <li className="text-sm leading-none font-small">
              • Provide false information or impersonate another person
            </li>
            <li className="text-sm leading-none font-small">
              • Use the platform for illegal, abusive, or fraudulent purposes
            </li>
            <li className="text-sm leading-none font-small">
              • Access, modify, or attempt to violate restricted areas of the
              application
            </li>
            <li className="text-sm leading-none font-small">
              • Distribute viruses, malware, or any content that compromises
              security
            </li>
          </ul>
        </div>
      </section>
      <p className="text-muted-foreground text-xs">
        This license grants you the right to use our platform according to these
        terms. The license is personal to you and cannot be transferred to
        others.
      </p>
    </div>
  );
}

export default SecondSectionComponent;

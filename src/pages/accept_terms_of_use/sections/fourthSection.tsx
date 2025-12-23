// shadcn/ui
import { Badge } from "@/components/ui/badge";

// lucide-react
import { TriangleAlert } from "lucide-react";

function FourthSectionComponent() {
  return (
    <div className="flex flex-col h-120 sm:h-120 md:h-110 gap-5">
      <section className="flex flex-col items-center gap-3">
        <div className="flex flex-row items-center gap-2 w-full">
          <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center">
            <TriangleAlert
              strokeWidth={2}
              className="w-5 h-5 text-orange-600"
            />
          </div>
          <div className="flex flex-col items-start">
            <small className="leading-7 [&:not(:first-child)]:mt-6">
              Your Responsibilities
            </small>
            <Badge
              variant="secondary"
              className="p-1 text-[0.6rem] leading-none"
            >
              Required Section
            </Badge>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <h4 className="scroll-m-20 text-sm font-small tracking-tight">
              🔐 Account Security
            </h4>
            <p className="text-xs leading-none font-small text-gray-400">
              You're responsible for keeping your account secure and notifying
              us of any unauthorized access.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Badge
              variant="outline"
              className="p-1 pl-2 pr-2 text-[0.6rem] leading-none"
            >
              Strong passwords
            </Badge>
            <Badge
              variant="outline"
              className="p-1 pl-2 pr-2 text-[0.6rem] leading-none"
            >
              Two-factor auth
            </Badge>
            <Badge
              variant="outline"
              className="p-1 pl-2 pr-2 text-[0.6rem] leading-none"
            >
              Regular updates
            </Badge>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <h4 className="scroll-m-20 text-sm font-small tracking-tight">
              📝 Content Guidelines
            </h4>
            <p className="text-xs leading-none font-small text-gray-400">
              Ensure your content complies with our community standards and
              applicable laws.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Badge
              variant="outline"
              className="p-1 pl-2 pr-2 text-[0.6rem] leading-none"
            >
              No harmful content
            </Badge>
            <Badge
              variant="outline"
              className="p-1 pl-2 pr-2 text-[0.6rem] leading-none"
            >
              Respect copyrights
            </Badge>
            <Badge
              variant="outline"
              className="p-1 pl-2 pr-2 text-[0.6rem] leading-none"
            >
              Follow local laws
            </Badge>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <h4 className="scroll-m-20 text-sm font-small tracking-tight">
              🤝 Fair Usage
            </h4>
            <p className="text-xs leading-none font-small text-gray-400">
              Use our platform reasonably and don't attempt to overwhelm our
              systems.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Badge
              variant="outline"
              className="p-1 pl-2 pr-2 text-[0.6rem] leading-none"
            >
              Reasonable usage
            </Badge>
            <Badge
              variant="outline"
              className="p-1 pl-2 pr-2 text-[0.6rem] leading-none"
            >
              No system abuse
            </Badge>
            <Badge
              variant="outline"
              className="p-1 pl-2 pr-2 text-[0.6rem] leading-none"
            >
              Respect others
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FourthSectionComponent;

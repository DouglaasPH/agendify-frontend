// lucide-react
import { CircleCheckBig, FileText, Users } from "lucide-react";

function FirstSectionComponent() {
  return (
    <div className="flex flex-col h-100">
      <section className="flex flex-col items-center gap-8 h-full">
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-[10rem] bg-gray-200 w-13 h-13 flex justify-center items-center">
            <Users className="w-7 h-7" />
          </div>
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
            Welcome to Our Platform
          </h3>
          <p className="text-muted-foreground text-sm text-center">
            We're excited to have you join our community. Before you begin,
            let's walk through our terms of service together to ensure you
            understand your rights and responsibilities.
          </p>
        </div>
        <div className="bg-gray-100 border-none p-4 pt-6 pb-6 flex flex-col gap-4 w-full rounded-lg">
          <div className="flex gap-2 items-end">
            <FileText className="w-[17px] h-[17px]" />
            <small className="text-sm leading-none font-md">
              What We Will Cover
            </small>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2.5 items-end">
              <CircleCheckBig className="w-[14px] h-[14px] text-green-500 text-[16px]" />
              <p className="text-muted-foreground text-xs">
                Rules for using the platform and user responsibilities.
              </p>
            </div>
            <div className="flex gap-2.5 items-end">
              <CircleCheckBig className="w-[14px] h-[14px] text-green-500 text-[16px]" />
              <p className="text-muted-foreground text-xs">
                Availability of services, bookings, and provided features.
              </p>
            </div>
            <div className="flex gap-2.5 items-end">
              <CircleCheckBig className="w-[14px] h-[14px] text-green-500 text-[16px]" />
              <p className="text-muted-foreground text-xs">
                Rights and duties of both professionals and clients.
              </p>
            </div>
            <div className="flex gap-2.5 items-end">
              <CircleCheckBig className="w-[14px] h-[14px] text-green-500 text-[16px]" />
              <p className="text-muted-foreground text-xs">
                Limitations of liability and legal clarifications regarding
                usage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FirstSectionComponent;

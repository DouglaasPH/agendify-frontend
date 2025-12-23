// shadcn
import { Button } from "@/components/ui/button";

// lucide
import { ArrowLeft } from "lucide-react";

// types
import type { Step } from "@/types/chat";

type ButtonBackProps = {
  handleWithCustomerInteraction: (
    text: string,
    isForComponentData: string,
    step: Step
  ) => void;
  steps: Step[];
};

function ButtonBack({ handleWithCustomerInteraction, steps }: ButtonBackProps) {
  const onButton = () => {
    const backStep = steps[steps.length - 2];

    handleWithCustomerInteraction("Back", "", backStep);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <Button
        className="gap-3 border-2 shadow-sm bg-white text-gray-900 hover:border-gray-200 hover:bg-gray-100 transform transition-transform duration-200 hover:scale-105 cursor-pointer"
        onClick={() => onButton()}
      >
        <ArrowLeft />
        <span className="font-medium">Back</span>
      </Button>
    </div>
  );
}

export default ButtonBack;

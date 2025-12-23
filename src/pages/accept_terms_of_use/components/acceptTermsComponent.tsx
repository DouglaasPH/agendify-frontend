// react
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { updateAcceptedTermsOfUse } from "../../../features/auth/registerSlice";

// shadcn/ui
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CardContent } from "@/components/ui/card";

// lucide-react
import { CircleCheckBig } from "lucide-react";

// motion
import { motion } from "motion/react";

function AcceptTermsSectionComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstCheckbox, setFirstCheckbox] = useState(false);

  const handleAccepted = () => {
    dispatch(updateAcceptedTermsOfUse({ acceptedTermsOfUse: true }));
    navigate("/register/choose-your-avatar");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <CardContent>
        <div className="h-95 sm:h-90 md:h-80 w-full max-w-screen-md p-0 flex flex-col">
          <section className="flex flex-col items-center justify-evenly h-full">
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-[10rem] bg-green-100 w-13 h-13 flex justify-center items-center">
                <CircleCheckBig className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
                You're All Set!
              </h3>
              <p className="text-muted-foreground text-sm text-center">
                Thank you for reviewing our terms. Now let's finalize your
                agreement.
              </p>
            </div>
            <div className="bg-gray-100 border-none p-4 pt-6 pb-6 flex flex-col gap-4 w-full rounded-lg">
              <div className="flex flex-row gap-3 items-center">
                <Checkbox
                  checked={firstCheckbox}
                  onCheckedChange={() => setFirstCheckbox(!firstCheckbox)}
                />
                <small
                  className="text-sm leading-none font-medium cursor-pointer select-none"
                  onClick={() => setFirstCheckbox(!firstCheckbox)}
                >
                  I have read and agree to the Terms of Use and Privacy Policy *
                </small>
              </div>
            </div>
            <div className="grid grid-cols-[49%_49%] gap-4 w-full">
              <Button
                variant="outline"
                className="h-7 text-[12px] flex flex-row items-center gap-1 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Decline
              </Button>
              <Button
                variant="default"
                disabled={!firstCheckbox}
                className="h-7 text-[12px] flex flex-row items-center gap-1 cursor-pointer"
                onClick={() => handleAccepted()}
              >
                Accept & Continue
              </Button>
            </div>
          </section>
        </div>
      </CardContent>
    </motion.div>
  );
}

export default AcceptTermsSectionComponent;

// react
import { useState } from "react";

// shadcn/ui
import { Card } from "@/components/ui/card";

// motion
import { motion } from "motion/react";

// components
import AcceptTermsSectionComponent from "./components/acceptTermsComponent";
import ReadTermsComponent from "./components/readTermsComponent";

function AcceptTermsOfUsePage() {
  const [changeComponent, setChangeComponent] = useState(false);

  const handleChangeComponent = (condition: boolean) => {
    setChangeComponent(condition);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="w-full min-h-screen flex flex-col justify-center items-center p-5 py-5 sm:py-5 md:py-30"
    >
      <Card className="w-full max-w-screen-md p-0 flex flex-col justify-between gap-0">
        {!changeComponent ? (
          <ReadTermsComponent onChangeComponent={handleChangeComponent} />
        ) : (
          <AcceptTermsSectionComponent />
        )}
      </Card>
    </motion.div>
  );
}

export default AcceptTermsOfUsePage;

// react
import { useState } from "react";

// motion
import { motion } from "motion/react";

// lucide-react
import { ChevronLeft, ChevronRight } from "lucide-react";

// shadcn/ui
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Sections
import FirstSectionComponent from "../sections/firstSection";
import SecondSectionComponent from "../sections/secondSection";
import ThirdSectionComponent from "../sections/thirdSection";
import FourthSectionComponent from "../sections/fourthSection";

interface ReadTermsProps {
  onChangeComponent: (condition: boolean) => void;
}

function ReadTermsComponent({ onChangeComponent }: ReadTermsProps) {
  const [animationContent, setAnimationContent] = useState<any>(null);
  const [currentSection, setCurrentSection] = useState(0);

  const handleNext = () => {
    if (animationContent) {
      animationContent.scrollNext();
    }
    if (currentSection < 3) {
      setCurrentSection(currentSection + 1);
    } else {
      onChangeComponent(true);
    }
  };

  const handlePrevious = () => {
    if (animationContent) {
      animationContent.scrollPrev();
    }
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <CardHeader className="bg-gray-50 pt-7 border-b mb-3 rounded-t-xl">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight leading-none">
              Terms of Service
            </h3>
            <div className="flex justify-end items-center">
              <Badge
                variant={currentSection === 0 ? "secondary" : "default"}
                className="pt-1 pb-1 text-[0.6rem] leading-none"
              >
                {currentSection > 0 ? "Required" : "Info"}
              </Badge>
            </div>
            <CardDescription className="leading-none">
              {currentSection + 1} of 4 • Welcome
            </CardDescription>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="w-full flex flewx-row justify-between items-center">
              <p className="text-muted-foreground text-xs">Progress</p>
              <p className="text-muted-foreground text-sm">
                {25 + currentSection * 25}%
              </p>
            </div>
            <Progress value={25 + currentSection * 25} />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Carousel setApi={setAnimationContent}>
          <CarouselContent>
            <CarouselItem>
              <FirstSectionComponent />
            </CarouselItem>
            <CarouselItem>
              <SecondSectionComponent />
            </CarouselItem>
            <CarouselItem>
              <ThirdSectionComponent />
            </CarouselItem>
            <CarouselItem>
              <FourthSectionComponent />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </CardContent>

      <CardFooter className="flex justify-between items-center bg-gray-50 h-15 border-t-1 rounded-b-xl">
        <Button
          variant="outline"
          className="h-7 flex flex-row items-center gap-0.5 text-[11px] text-muted-foreground cursor-pointer"
          onClick={() => handlePrevious()}
        >
          <ChevronLeft size={11} color="gray" />
          Previous
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentSection
                  ? "bg-primary"
                  : i < currentSection
                  ? "bg-primary/60"
                  : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <Button
          variant="default"
          className="h-7 text-[12px] flex flex-row items-center gap-1 cursor-pointer"
          onClick={() => handleNext()}
        >
          <p>{currentSection === 3 ? "Complete" : "Next"}</p>
          <ChevronRight size={11} />
        </Button>
      </CardFooter>
    </motion.div>
  );
}

export default ReadTermsComponent;

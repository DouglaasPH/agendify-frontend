// redux
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";

//shadcn-ui
import { Button } from "@/components/ui/button";

// lucide-react
import {
  ArrowRight,
  ChevronLeftIcon,
  ChevronRightIcon,
  Heart,
  Shuffle,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// motion
import { AnimatePresence, motion } from "motion/react";

// cartoonAvatars
import cartoonAvatars from "../../../assets/cartoonAvatars";

// hooks
import { useChooseAvatar } from "../hooks/useChooseAvatar";
import { useEffect } from "react";

type Props = {
  mode: "register" | "updateAccount";
};

function ChooseYourAvatarDesktop({ mode }: Props) {
  const user_data = useSelector((state: RootState) => {
    if (mode == "register") {
      return {
        name: state.register.fullName,
        email: state.register.email,
        password: state.register.password,
        profession: state.register.profession,
        phoneNumber: state.register.phoneNumber,
        profileAvatarId:
          state.register.profileAvatarId !== null
            ? state.register.profileAvatarId
            : 0,
      };
    } else {
      return {
        profileAvatarId: state.userData.profileAvatarId,
      };
    }
  });

  const {
    selectedAvatar,
    setSelectedAvatar,
    currentSection,
    setCurrentSection,
    avatarLimiterDisplayedStart,
    avatarLimiterDisplayedEnd,
    handleSaveToRegisterAccount,
    handleUpdateAccount,
    handleSurpriseMe,
  } = useChooseAvatar(user_data);

  useEffect(() => {
    if (mode == "updateAccount") {
      setSelectedAvatar(cartoonAvatars[user_data.profileAvatarId]);

      if (user_data.profileAvatarId > 5) setCurrentSection(2);
    }
  }, []);

  return (
    <div className="w-full grid grid-cols-[2fr_3fr] h-[100vh] max-h-screen overflow-y-auto">
      <div className="border-r-1 bg-gray-50 flex flex-col justify-center gap-15">
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-[10rem] bg-black w-20 h-20 flex justify-center items-center">
            <Sparkles className="w-9 h-9 text-white" />
          </div>
          <h6 className="scroll-m-20 text-md font-normal tracking-tight">
            Choose Your Character
          </h6>
          <p className="text-muted-foreground text-md">
            Pick a character that matches your vibe
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedAvatar.id}
            initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 200,
            }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`rounded-full border-3 border-gray-500 w-40 h-40 flex justify-center items-center bg-gradient-to-br ${selectedAvatar.bgGradient}`}
              >
                <span className="text-[4rem] select-none">
                  {selectedAvatar.emoji}
                </span>
                {/* Floating animation elements */}
              </motion.div>
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-15 inset-0 rounded-full border-2 border-dashed border-gray-300 h-70"
              />
              {/* Sparkle effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gray-600 rounded-full"
                  style={{
                    top: `${
                      20 + Math.sin((i * 60 * Math.PI) / 180) * 60 + 50
                    }%`,
                    left: `${
                      20 + Math.cos((i * 60 * Math.PI) / 180) * 60 + 50
                    }%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="scroll-m-20 text-md font-normal tracking-tight">
                {selectedAvatar.character}
              </p>
              <Badge
                className={`pt-1 pb-1 text-xs leading-none bg-gradient-to-br ${selectedAvatar.bgGradient}`}
              >
                {selectedAvatar.personality}
              </Badge>
              <p className="text-muted-foreground text-sm">
                {selectedAvatar.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-col gap-3 items-center">
          <Button
            variant="outline"
            className="text-sm flex flex-row items-center gap-2 w-full h-9 max-w-xs cursor-pointer"
            onClick={() => handleSurpriseMe()}
          >
            <Shuffle className="size-4" />
            Surprise Me!
          </Button>
          <Button
            variant="default"
            className="text-sm flex flex-row items-center gap-2 w-full h-9 max-w-xs cursor-pointer"
            onClick={() =>
              mode == "register"
                ? handleSaveToRegisterAccount()
                : handleUpdateAccount()
            }
          >
            Continue Adventure
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-rows-[1fr_7fr_1fr]">
        <div className="border-b-1 flex flex-row justify-between px-5 p-6 items-center">
          <div className="h-full flex flex-col justify-center gap-1">
            <h6 className="scroll-m-20 text-md font-normal tracking-tight">
              Character Gallery
            </h6>
            <p className="text-muted-foreground text-md">
              Each character has its own unique personality and style
            </p>
          </div>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="size-9 cursor-pointer"
              disabled={currentSection === 1 ? true : false}
              onClick={() => setCurrentSection(1)}
            >
              <ChevronLeftIcon />
            </Button>
            <small className="text-muted-foreground text-ws w-14 flex justify-center">
              {currentSection} of 2
            </small>
            <Button
              variant="outline"
              size="icon"
              className="size-9 cursor-pointer"
              disabled={currentSection === 2 ? true : false}
              onClick={() => setCurrentSection(2)}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>

        <div className="border-b-1 bg-gray-100 grid grid-cols-3 items-center gap-7 p-8">
          {cartoonAvatars
            .slice(avatarLimiterDisplayedStart, avatarLimiterDisplayedEnd)
            .map((avatar, index) => (
              <motion.div
                key={avatar.id}
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                exit={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.2 },
                  backgroundColor: "#e5e7eb",
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center gap-3 rounded-xl max-w-ws cursor-pointer select-none relative ${
                  selectedAvatar.id === avatar.id ? "p-9" : "p-8"
                }`}
                style={{
                  backgroundColor:
                    selectedAvatar.id === avatar.id ? "#FFFFFF" : "#f9fafb",
                  border:
                    selectedAvatar.id === avatar.id
                      ? "4px solid #9ca3af"
                      : "none",
                }}
                onClick={() => setSelectedAvatar(avatar)}
              >
                {/* Selection Indicator */}
                {selectedAvatar.id === avatar.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-2 -right-2"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-black rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                )}
                <div
                  className={`rounded-[10rem] w-20 h-20 flex justify-center items-center bg-gradient-to-br ${avatar.bgGradient} `}
                >
                  <span className="text-[2rem] select-none">
                    {avatar.emoji}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="scroll-m-20 text-md font-normal tracking-tight">
                    {avatar.character}
                  </p>
                  <Badge className="pt-1 pb-1 text-xs leading-none bg-gray-100 text-gray-700">
                    {avatar.personality}
                  </Badge>
                  <p className="text-muted-foreground text-xs text-center">
                    {avatar.description}
                  </p>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="h-full flex flex-row justify-between pl-5 pr-5 items-center">
          <div className="h-full flex flex-col justify-center gap-0">
            <p className="text-muted-foreground text-md flex items-center gap-2">
              <Heart size={5} className="size-5" />
              Your character reflects your unique personality
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <Button
              variant="default"
              className="cursor-pointer"
              onClick={() =>
                mode == "register"
                  ? handleSaveToRegisterAccount()
                  : handleUpdateAccount()
              }
            >
              Continue
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseYourAvatarDesktop;

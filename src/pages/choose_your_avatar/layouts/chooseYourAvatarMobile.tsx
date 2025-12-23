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

type Props = {
  mode: "register" | "updateAccount";
};

function ChooseYourAvatarMobile({ mode }: Props) {
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
  return (
    <div className="w-full grid grid-row-[1fr_3fr_1fr] h-[100vh] max-h-screen overflow-y-auto">
      <div className="bg-gray-50 flex flex-col justify-between items-center py-5 px-5 gap-5">
        <div className="">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="rounded-[10rem] bg-black w-13 h-13 flex justify-center items-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h6 className="scroll-m-20 text-md font-normal tracking-tight">
                Choose Your Character
              </h6>
              <small className="text-muted-foreground text-sm">
                Pick a character that matches your vibe
              </small>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-full">
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
              className="flex flex-row justify-center items-center gap-4 w-full bg-white shadow-lg rounded-lg py-4"
            >
              <div className="relative">
                <motion.div
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`rounded-full w-17 h-17 flex justify-center items-center bg-gradient-to-br ${selectedAvatar.bgGradient}`}
                >
                  <span className="text-[1.65rem] select-none">
                    {selectedAvatar.emoji}
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p className="scroll-m-20 text-md font-normal tracking-tight text-start">
                  {selectedAvatar.character}
                </p>
                <Badge
                  className={`pt-1 pb-1 text-xs leading-none bg-gradient-to-br ${selectedAvatar.bgGradient}`}
                >
                  {selectedAvatar.personality}
                </Badge>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="bg-gray-100 grid grid-cols-2 items-center gap-5 p-4">
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
                  scale: 1.0,
                  y: -10,
                  transition: { duration: 0.2 },
                  backgroundColor: "#e5e7eb",
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center gap-3 rounded-xl max-w-ws cursor-pointer select-none relative ${
                  selectedAvatar.id === avatar.id ? "p-3" : "p-2"
                }`}
                style={{
                  backgroundColor:
                    selectedAvatar.id === avatar.id ? "#FFFFFF" : "#f9fafb",
                  border:
                    selectedAvatar.id === avatar.id
                      ? "2px solid #9ca3af"
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
                    <div className="w-7 h-7 bg-gradient-to-br from-gray-700 to-black rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="w-3 h-3 text-white" />
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
                </div>
              </motion.div>
            ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="size-9 cursor-pointer"
              disabled={currentSection === 1 ? true : false}
              onClick={() => setCurrentSection(1)}
            >
              <ChevronLeftIcon />
            </Button>
            <small className="text-muted-foreground text-ws flex justify-center">
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
          <div className="w-full flex flex-row justify-between px-5 pb-10 items-center">
            <Button
              variant="outline"
              className="text-sm flex flex-row items-center w-4/9 gap-2 h-9 cursor-pointer"
              onClick={() => handleSurpriseMe()}
            >
              <Shuffle className="size-4" />
              Surprise Me!
            </Button>
            <Button
              variant="default"
              className="text-sm flex flex-row items-center w-4/9 gap-2 h-9 cursor-pointer"
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

export default ChooseYourAvatarMobile;

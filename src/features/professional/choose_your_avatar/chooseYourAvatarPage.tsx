// react
import { useEffect, useState } from "react";

// redux
import type { RootState } from "@/app/store";
import { useSelector } from "react-redux";

// layouts
import ChooseYourAvatarMobile from "./layouts/ChooseYourAvatarMobile";
import ChooseYourAvatarDesktop from "./layouts/ChooseYourAvatarDesktop";

// utils
import { useChooseAvatar } from "./utils/utils_for_choose_avatar";
import all_cartoon_avatars from "@/shared/assets/all_cartoon_avatars";

type Props = {
  mode: "register" | "updateAccount";
};

interface ProfessionalData {
  name: string;
  email: string;
  password: string;
  profession: string;
  phone_number: string;
  profile_avatar_id: number;
}

function ChooseYourAvatarPage({ mode }: Props) {
  const [professsionalData, setProfessionalData] = useState<ProfessionalData>({
    name: "",
    email: "",
    password: "",
    profession: "",
    phone_number: "",
    profile_avatar_id: 0,
  });

  useSelector((state: RootState) => {
    if (mode == "register") {
      setProfessionalData({
        name: state.register_professional.name,
        email: state.register_professional.email,
        password: state.register_professional.password,
        profession: state.register_professional.profession,
        phone_number: state.register_professional.phone_number,
        profile_avatar_id:
          state.register_professional.profile_avatar_id !== null
            ? state.register_professional.profile_avatar_id
            : 0,
      });
    } else {
      setProfessionalData((prev) => ({
        ...prev,
        profile_avatar_id: state.professional.profile_avatar_id,
      }));
    }
  });

  const { setSelectedAvatar, setCurrentSection } =
    useChooseAvatar(professsionalData);

  useEffect(() => {
    if (mode == "updateAccount") {
      setSelectedAvatar(
        all_cartoon_avatars[professsionalData.profile_avatar_id]
      );

      if (professsionalData.profile_avatar_id > 5) setCurrentSection(2);
    }
  }, []);

  return (
    <div>
      <div className="hidden md:block">
        <ChooseYourAvatarDesktop
          mode={mode}
          professional_data={professsionalData}
        />
      </div>
      <div className="block md:hidden">
        <ChooseYourAvatarMobile
          mode={mode}
          professional_data={professsionalData}
        />
      </div>
    </div>
  );
}

export { ChooseYourAvatarPage, type ProfessionalData };

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
  const registerProfessional = useSelector(
    (state: RootState) => state.register_professional
  );
  const professional_profile_avatar_id = useSelector(
    (state: RootState) => state.professional.id
  );
  const [professsionalData, setProfessionalData] = useState<ProfessionalData>({
    name: "",
    email: "",
    password: "",
    profession: "",
    phone_number: "",
    profile_avatar_id: 0,
  });

  const { setSelectedAvatar, setCurrentSection } =
    useChooseAvatar(professsionalData);

  useEffect(() => {
    if (mode == "updateAccount") {
      setSelectedAvatar(
        all_cartoon_avatars[professsionalData.profile_avatar_id]
      );

      setProfessionalData((prev) => ({
        ...prev,
        profile_avatar_id:
          professional_profile_avatar_id !== null
            ? professional_profile_avatar_id
            : 0,
      }));

      if (professsionalData.profile_avatar_id > 5) setCurrentSection(2);
    } else {
      setProfessionalData({
        name: registerProfessional.name,
        email: registerProfessional.email,
        password: registerProfessional.password,
        profession: registerProfessional.profession,
        phone_number: registerProfessional.phone_number,
        profile_avatar_id:
          registerProfessional.profile_avatar_id !== null
            ? registerProfessional.profile_avatar_id
            : 0,
      });
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

// react
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// redux
import type { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { update_professional_data } from "../../slice";
import { update_data as update_data_of_register } from "../../auth/slice_register_professional";

// API
import {
  request_to_generate_a_registration_token_for_register_professional,
  request_to_modify_data_of_professional,
} from "../../services_professional";

// cartoonAvatars
import all_cartoon_avatars from "@/shared/assets/all_cartoon_avatars";

// utils
import { go_to_error_page } from "@/shared/utils/utils";

interface ProfessionalRegistrationData {
  name: string;
  email: string;
  password: string;
  profession: string;
  phone_number: string;
  profile_avatar_id: number;
}

export const useChooseAvatar = (
  professional_data: ProfessionalRegistrationData
) => {
  const dispatch = useDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState(all_cartoon_avatars[0]);
  const [currentSection, setCurrentSection] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const access_token = useSelector(
    (state: RootState) => state.professional.access_token
  );

  const avatarLimiterDisplayedStart = currentSection === 1 ? 0 : 6;
  const avatarLimiterDisplayedEnd = currentSection === 1 ? 6 : 12;

  const handle_generate_token_for_register = async () => {
    setLoading(true);
    try {
      await request_to_generate_a_registration_token_for_register_professional(
        professional_data
      );
      dispatch(
        update_data_of_register({ profile_avatar_id: selectedAvatar.id })
      );
      navigate("/register/verify-email");
    } catch (error) {
      go_to_error_page(error);
    } finally {
      setLoading(false);
    }
  };

  const handle_save_to_register_account = async () => {
    dispatch(
      update_professional_data({ profile_avatar_id: selectedAvatar.id })
    );
    await handle_generate_token_for_register();
  };

  const handle_surprise_me = () => {
    const n = 12;
    const randomNum = Math.floor(Math.random() * n);
    setSelectedAvatar(all_cartoon_avatars[randomNum]);
    setCurrentSection(randomNum > 5 ? 2 : 1);
  };

  const handle_update_account = async () => {
    setLoading(true);
    try {
      await request_to_modify_data_of_professional(access_token, {
        profile_avatar_id: selectedAvatar.id,
      });
      dispatch(
        update_professional_data({ profile_avatar_id: selectedAvatar.id })
      );
      navigate("/professional/profile");
    } catch (error) {
      go_to_error_page(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    selectedAvatar,
    setSelectedAvatar,
    currentSection,
    setCurrentSection,
    avatarLimiterDisplayedStart,
    avatarLimiterDisplayedEnd,
    handle_save_to_register_account,
    handle_update_account,
    handle_surprise_me,
  };
};

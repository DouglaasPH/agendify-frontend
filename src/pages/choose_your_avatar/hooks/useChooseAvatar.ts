// react
import { useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAvatarId } from "../../../features/auth/registerSlice";
import {
  modifyUserData,
  registerGenerationTokenApi,
} from "../../../services/authApi";

// cartoonAvatars
import cartoonAvatars from "../../../assets/cartoonAvatars";

// utils
import { goToErrorPage } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import type { RootState } from "@/store";
import { updateUserData } from "@/features/auth/userDataSlice";

interface UserRegistrationData {
  name?: string;
  email?: string;
  password?: string;
  profession?: string;
  phoneNumber?: string;
  profileAvatarId: number;
}

export const useChooseAvatar = (userData: UserRegistrationData) => {
  const dispatch = useDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState(cartoonAvatars[0]);
  const [currentSection, setCurrentSection] = useState(1);
  const navigate = useNavigate();
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );

  const avatarLimiterDisplayedStart = currentSection === 1 ? 0 : 6;
  const avatarLimiterDisplayedEnd = currentSection === 1 ? 6 : 12;

  const handleRegisterApi = async () => {
    try {
      await registerGenerationTokenApi(userData);
    } catch (error) {
      goToErrorPage(error);
    }
  };

  const handleSaveToRegisterAccount = async () => {
    dispatch(updateProfileAvatarId({ profileAvatarId: selectedAvatar.id }));
    await handleRegisterApi();
  };

  const handleSurpriseMe = () => {
    const n = 12;
    const randomNum = Math.floor(Math.random() * n);
    setSelectedAvatar(cartoonAvatars[randomNum]);
    setCurrentSection(randomNum > 5 ? 2 : 1);
  };

  const handleUpdateAccount = async () => {
    console.log(selectedAvatar.id);
    try {
      await modifyUserData(access_token, {
        profileAvatarId: selectedAvatar.id,
      });
      dispatch(updateUserData({ profileAvatarId: selectedAvatar.id }));
      navigate("/user/profile");
    } catch (error) {
      navigate(`/error/${error.response?.status}`);
    }
  };

  return {
    selectedAvatar,
    setSelectedAvatar,
    currentSection,
    setCurrentSection,
    avatarLimiterDisplayedStart,
    avatarLimiterDisplayedEnd,
    handleSaveToRegisterAccount,
    handleUpdateAccount,
    handleSurpriseMe,
  };
};

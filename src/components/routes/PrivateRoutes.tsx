import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Navigate, Outlet } from "react-router-dom";

function AcceptTermsOfUsePagePrivateRoute() {
  const user_data_for_registration = useSelector((state: RootState) => {
    return {
      fullName: state.register.fullName,
      email: state.register.email,
      phoneNumber: state.register.phoneNumber,
      profession: state.register.profession,
      password: state.register.password,
    };
  });

  return user_data_for_registration.fullName !== "" &&
    user_data_for_registration.email !== "" &&
    user_data_for_registration.phoneNumber !== "" &&
    user_data_for_registration.profession !== "" &&
    user_data_for_registration.password !== "" ? (
    <Outlet />
  ) : (
    <Navigate to={"/register"} replace />
  );
}

function ChooseYourAvatarPagePrivateRoute() {
  const user_data_for_registration = useSelector((state: RootState) => {
    return {
      fullName: state.register.fullName,
      email: state.register.email,
      phoneNumber: state.register.phoneNumber,
      profession: state.register.profession,
      password: state.register.password,
      acceptedTermsOfUse: state.register.acceptedTermsOfUse,
    };
  });

  return user_data_for_registration.acceptedTermsOfUse === true ? (
    <Outlet />
  ) : (
    <Navigate to={"/register"} replace />
  );
}

function VerifyEmailInTheRegistrationPrivateRoute() {
  const profile_avatar_id = useSelector(
    (state: RootState) => state.register.profileAvatarId
  );

  return profile_avatar_id !== null ? (
    <Outlet />
  ) : (
    <Navigate to={"/register"} replace />
  );
}

export {
  AcceptTermsOfUsePagePrivateRoute,
  ChooseYourAvatarPagePrivateRoute,
  VerifyEmailInTheRegistrationPrivateRoute,
};

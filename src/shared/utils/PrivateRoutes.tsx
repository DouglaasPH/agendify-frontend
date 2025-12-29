import type { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AcceptTermsOfUsePagePrivateRoute() {
  const user_data_for_registration = useSelector(
    (state: RootState) => state.register_professional
  );

  return user_data_for_registration.name !== "" &&
    user_data_for_registration.email !== "" &&
    user_data_for_registration.phone_number !== "" &&
    user_data_for_registration.profession !== "" &&
    user_data_for_registration.password !== "" ? (
    <Outlet />
  ) : (
    <Navigate to={"/register"} replace />
  );
}

function ChooseYourAvatarPagePrivateRoute() {
  const is_accepted_terms_of_use = useSelector(
    (state: RootState) => state.register_professional.accepted_terms_of_use
  );

  return is_accepted_terms_of_use === true ? (
    <Outlet />
  ) : (
    <Navigate to={"/register"} replace />
  );
}

function VerifyEmailInTheRegistrationPrivateRoute() {
  const profile_avatar_id = useSelector(
    (state: RootState) => state.register_professional.profile_avatar_id
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

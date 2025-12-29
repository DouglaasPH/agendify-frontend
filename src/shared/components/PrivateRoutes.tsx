import type { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AcceptTermsOfUsePagePrivateRoute() {
  const user_data_for_registration = useSelector((state: RootState) => {
    return {
      name: state.register_professional.name,
      email: state.register_professional.email,
      phone_number: state.register_professional.phone_number,
      profession: state.register_professional.profession,
      password: state.register_professional.password,
    };
  });

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
  const user_data_for_registration = useSelector((state: RootState) => {
    return {
      name: state.register_professional.name,
      email: state.register_professional.email,
      phone_number: state.register_professional.phone_number,
      profession: state.register_professional.profession,
      password: state.register_professional.password,
      accepted_terms_of_use: state.register_professional.accepted_terms_of_use,
    };
  });

  return user_data_for_registration.accepted_terms_of_use === true ? (
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

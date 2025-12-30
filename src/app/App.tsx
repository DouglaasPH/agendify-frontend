// react
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import {
  reset,
  update_professional_data,
} from "../features/professional/slice";
import { update_loading } from "../shared/components/loading/slice";

// API
import { request_to_get_data_by_id_via_access_token_for_professional } from "../features/professional/services_professional";
import { refresh_token_request } from "../features/professional/auth/services";

// Private Routes
import {
  VerifyAuthentication,
  VerifyNotAuthentication,
} from "../shared/utils/VerifyAuthentication";
import {
  AcceptTermsOfUsePagePrivateRoute,
  ChooseYourAvatarPagePrivateRoute,
  VerifyEmailInTheRegistrationPrivateRoute,
} from "../shared/utils/PrivateRoutes";

// Components
import NavBar from "../shared/components/NavBar";
import FooterBar from "../shared/components/FooterBar";

// Pages
// features/marketing
import HomePage from "../features/marketing/pages/Home";
import AboutUsPage from "../features/marketing/pages/AboutUs";
import HelpCenterPage from "../features/marketing/pages/HelpCenter";
import ContactPage from "../features/marketing/pages/Contact";
import TermsOfUsePage from "../features/marketing/pages/TermsOfUse";
import ErrorPage from "../features/marketing/pages/Error";
import PrivacyPolicyPage from "../features/marketing/pages/PrivacyPolicy";
import PasswordChangedSuccessfullyPage from "../features/marketing/pages/PasswordChangedSuccessfully";

// features/professional/auth
import AcceptTermsOfUsePage from "../features/professional/auth/pages/AcceptTermsOfUsePage";
import LoginPage from "../features/professional/auth/pages/Login";
import ForgotYourPasswordWithoutLoginPage from "../features/professional/auth/pages/ForgotYourPasswordPage";
import ResetPasswordWithoutLoginPage from "../features/professional/auth/pages/ModifyPasswordWithoutLoginPage";
import VerifyEmailInTheRegistrationPage from "../features/professional/auth/pages/VerifyEmailInTheRegistration";
import ConfirmRegistrationPage from "../features/professional/auth/pages/ConfirmRegistration";
import RegisterPage from "../features/professional/auth/pages/Register";

// features/professional/choose_your_avatar
import { ChooseYourAvatarPage } from "../features/professional/choose_your_avatar/chooseYourAvatarPage";

// features/professional/profile
import EditDataPage from "../features/professional/profile/pages/EditData";
import EditEmailPage from "../features/professional/profile/pages/EditEmail";
import EmailVerifiedSuccesfullyPage from "../features/professional/profile/pages/EmailVerifiedSuccessfully";
import ResetPasswordWithLoginPage from "../features/professional/profile/pages/ResetPasswordWithLoginPage";
import ProfessionalProfilePage from "../features/professional/profile/pages/ProfessionalProfile";

// /features/professional/dashboard
import DashboardPage from "../features/professional/dashboard/pages/dashboard";

// /features/professional/availability
import AvailabilityPage from "../features/professional/availability/pages/availability";
import CreateNewAvailabilityPage from "../features/professional/availability/pages/CreateNewAvailability";

// /features/professional/appointment
import AppointmentsPage from "../features/professional/appointment/pages/appointments";

// /features/professional/chat
import ChatPage from "../features/chat/pages/chat";
import LoadingScreen from "@/shared/components/loading/LoadingScreen";

// URLs
// /terms-of-use
// privacy-policy
// /about-us
// /contact
// /help-center
// /error/:error_http

// /login

// /register
// /register/accept-terms-of-use
// /register/choose-your-avatar
// /register/verify-email

// /forgot-your-password
// /forgot-your-password/reset-password

// /professional/profile
// /professional/edit/data
// /professional/edit/email
// /professional/edit/password
// /professional/password-changed-succesfully-notice
// /change-email/:token

// /professional/dashboard
// /professional/availability
// /professional/availability/create
// /professional/appointment

// chat

const browserRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <>
            <NavBar /> <HomePage /> <FooterBar />
          </>
        }
      />
      <Route
        path="about-us"
        element={
          <>
            <NavBar /> <AboutUsPage /> <FooterBar />
          </>
        }
      />
      <Route
        path="help-center"
        element={
          <>
            <NavBar /> <HelpCenterPage /> <FooterBar />
          </>
        }
      />
      <Route
        path="contact"
        element={
          <>
            <NavBar /> <ContactPage /> <FooterBar />
          </>
        }
      />
      <Route
        path="terms-of-use"
        element={
          <>
            <NavBar /> <TermsOfUsePage /> <FooterBar />
          </>
        }
      />
      <Route
        path="privacy-policy"
        element={
          <>
            <NavBar /> <PrivacyPolicyPage /> <FooterBar />
          </>
        }
      />
      <Route
        path="error/:error_http"
        element={
          <>
            <ErrorPage />
          </>
        }
      />
      <Route element={<VerifyNotAuthentication />}>
        <Route
          path="login"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        <Route path="register">
          <Route
            index
            element={
              <>
                <RegisterPage />
              </>
            }
          />
          <Route element={<AcceptTermsOfUsePagePrivateRoute />}>
            <Route
              path="accept-terms-of-use"
              element={
                <>
                  <AcceptTermsOfUsePage />
                </>
              }
            />
            <Route element={<ChooseYourAvatarPagePrivateRoute />}>
              <Route
                path="choose-your-avatar"
                element={
                  <>
                    <ChooseYourAvatarPage mode="register" />
                  </>
                }
              />
            </Route>
            <Route element={<VerifyEmailInTheRegistrationPrivateRoute />}>
              <Route
                path="verify-email"
                element={<VerifyEmailInTheRegistrationPage />}
              />
            </Route>
          </Route>
        </Route>
        <Route path="forgot-your-password">
          <Route
            index
            element={
              <>
                <ForgotYourPasswordWithoutLoginPage />
              </>
            }
          />
          <Route
            path="reset-password/:token"
            element={
              <>
                <ResetPasswordWithoutLoginPage />
              </>
            }
          />
        </Route>
      </Route>
      <Route path="professional" element={<VerifyAuthentication />}>
        <Route path="profile">
          <Route
            index
            element={
              <>
                <NavBar /> <ProfessionalProfilePage /> <FooterBar />
              </>
            }
          />
          <Route path="edit">
            <Route
              index
              path="data"
              element={
                <>
                  <NavBar /> <EditDataPage /> <FooterBar />
                </>
              }
            />
            <Route path="email">
              <Route
                index
                element={
                  <>
                    <NavBar /> <EditEmailPage /> <FooterBar />
                  </>
                }
              />
            </Route>
            <Route path="password">
              <Route
                index
                element={
                  <>
                    <NavBar /> <ResetPasswordWithLoginPage /> <FooterBar />
                  </>
                }
              />
              <Route
                path="succesfully"
                element={
                  <>
                    <NavBar /> <PasswordChangedSuccessfullyPage /> <FooterBar />
                  </>
                }
              />
            </Route>
            <Route
              path="avatar"
              element={
                <>
                  <ChooseYourAvatarPage mode="updateAccount" />
                </>
              }
            />
          </Route>
        </Route>
        <Route
          path="dashboard"
          element={
            <>
              <NavBar /> <DashboardPage /> <FooterBar />
            </>
          }
        />
        <Route path="availability">
          <Route
            index
            element={
              <>
                <NavBar /> <AvailabilityPage /> <FooterBar />
              </>
            }
          />
          <Route
            path="create"
            element={
              <>
                <NavBar /> <CreateNewAvailabilityPage /> <FooterBar />
              </>
            }
          />
        </Route>
        <Route
          path="appointment"
          element={
            <>
              <NavBar /> <AppointmentsPage /> <FooterBar />
            </>
          }
        />
      </Route>
      <Route
        path="chat/:chat_code"
        element={
          <>
            <ChatPage />
          </>
        }
      />
      <Route
        path="/validate-email-in-register/:token"
        element={<ConfirmRegistrationPage />}
      />
      <Route
        path="change-email/:token"
        element={<EmailVerifiedSuccesfullyPage />}
      />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    dispatch(update_loading());
    const refreshAccessToken = async () => {
      try {
        const refreshTokenResponse = await refresh_token_request();
        dispatch(
          update_professional_data({
            access_token: refreshTokenResponse.data.access_token,
            is_authenticated: true,
          })
        );
        const response =
          await request_to_get_data_by_id_via_access_token_for_professional(
            refreshTokenResponse.data.access_token
          );
        dispatch(update_professional_data(response));
      } catch (error) {
        if (error.response.status == 401) {
          dispatch(reset());
        } else {
          window.location.href = `error/${error.repsonse.status}`;
        }
      } finally {
        setLoadingState(false);
        dispatch(update_loading());
      }
    };

    refreshAccessToken();
  }, []);

  if (loadingState) {
    return <LoadingScreen />;
  }

  return (
    <>
      <RouterProvider router={browserRoutes} />
    </>
  );
}

export default App;

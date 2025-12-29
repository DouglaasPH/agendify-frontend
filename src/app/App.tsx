// react
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import {
  logout,
  update_professional_data,
} from "./slices_of_redux/professional/professional_slice";
import { update_loading } from "./slices_of_redux/loading/loading_slice";

// API
import { request_to_get_data_by_id_via_access_token_for_professional } from "./services/professional_request";
import { refresh_token_request } from "./services/refresh_token_request";

// Private Routes
import {
  VerifyAuthentication,
  VerifyNotAuthentication,
} from "./components/routes/VerifyAuthentication";
import {
  AcceptTermsOfUsePagePrivateRoute,
  VerifyEmailInTheRegistrationPrivateRoute,
} from "./components/routes/PrivateRoutes";

// Components
import NavBar from "./components/navbar/navBar";
import FooterBar from "./components/footerbar/footerBar";

// Pages
import HomePage from "./pages/home/home_page";
import AboutUsPage from "./pages/about_us/about_us_page";
import HelpCenterPage from "./pages/help_center/help_center_page";
import ContactPage from "./pages/contact/contact_page";
import TermsOfUsePage from "./pages/terms_of_use/terms_of_use_page";
import AcceptTermsOfUsePage from "./pages/accept_terms_of_use/acceptTermsOfUsePage";
import LoginPage from "./pages/login_for_professional/login_page";
import EditDataPage from "./pages/edit_data/edit_data_page";
import EditEmailPage from "./pages/edit_email/editEmail";
import EmailVerifiedSuccesfullyPage from "./pages/email_verified_successfully/emailVerifiedSuccessfully";
import ForgotYourPasswordWithoutLoginPage from "./pages/forgot_your_password_without_login/forgotYourPassword_without_login";
import ResetPasswordWithoutLoginPage from "./pages/reset_password_without_login_for_professional/resetPasswordWithoutLoginPage";
import ResetPasswordWithLoginPage from "./pages/reset_password_with_login_for_professional/resetPasswordWithLoginPage";
import PasswordChangedSuccessfullyPage from "./pages/password_changed_successfully_message/passwordChangedSuccessfully";
import DashboardPage from "./pages/dashboard/dashboard";
import AvailabilityPage from "./pages/availability/availability";
import AppointmentsPage from "./pages/appointments/appointments";
import ChatPage from "./pages/chat/chat";
import PrivacyPolicyPage from "./pages/privacy_policy/privacy_policy_page";
import ErrorPage from "./pages/error/error_page";
import VerifyEmailInTheRegistrationPage from "./pages/choose_your_avatar/verify_email_in_the_registration/verifyEmailInTheRegistration";
import ProfessionalProfilePage from "./pages/professional_profile/professional_profile_page";
import RegisterPage from "./pages/register_for_professional/registration_page_for_professional";
import { ChooseYourAvatarPage } from "./pages/choose_your_avatar/chooseYourAvatarPage";
import CreateNewAvailabilityPage from "./pages/create_new_availability/createNewAvailability";
import CheckEmailDuringRegistrationPage from "./pages/register_for_professional/confirm_registration/confirm_registration_page_for_professional";

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
            <Route
              path="choose-your-avatar"
              element={
                <>
                  <ChooseYourAvatarPage mode="register" />
                </>
              }
            />
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
        element={<CheckEmailDuringRegistrationPage />}
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

  useEffect(() => {
    dispatch(update_loading());
    const refreshAccessToken = async () => {
      try {
        const refreshTokenResponse = await refresh_token_request();
        dispatch(
          update_professional_data({
            access_token: refreshTokenResponse.data.access_token,
          })
        );
        const response =
          await request_to_get_data_by_id_via_access_token_for_professional(
            refreshTokenResponse.data.access_token
          );
        dispatch(update_professional_data(response.data));
      } catch (error) {
        if (error.response.status == 401) {
          dispatch(logout());
        } else {
          window.location.href = `error/${error.repsonse.status}`;
        }
      }
    };

    refreshAccessToken();
    dispatch(update_loading());
  }, []);

  return (
    <>
      <RouterProvider router={browserRoutes} />
    </>
  );
}

export default App;

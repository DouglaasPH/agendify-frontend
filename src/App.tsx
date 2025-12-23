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
import { logout, setAccessToken } from "./features/auth/authSlice";
import { resetUserData, updateUserData } from "./features/auth/userDataSlice";
import { updateLoading } from "./features/loadingSlice";

// API
import { getUserDataApi, refreshTokenApi } from "./services/authApi";

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
import HomePage from "./pages/home/homePage";
import AboutUsPage from "./pages/about_us/aboutUsPage";
import HelpCenterPage from "./pages/help_center/helpCenterPage";
import ContactPage from "./pages/contact/contactPage";
import TermsOfUsePage from "./pages/termsOfUsePage/termsOfUsePage";
import AcceptTermsOfUsePage from "./pages/accept_terms_of_use/acceptTermsOfUsePage";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/register/register";
import ChooseYourAvatarPage from "./pages/choose_your_avatar/chooseYourAvatarPage";
import UserProfilePage from "./pages/user_profile/userProfilePage";
import EditDataPage from "./pages/edit_data/edit_dataPage";
import EditEmailPage from "./pages/edit_email/editEmail";
import EmailVerifiedSuccesfullyPage from "./pages/email_verified_successfully/emailVerifiedSuccessfully";
import ForgotYourPasswordWithoutLoginPage from "./pages/forgot_your_password_without_login/forgotYourPassword_without_login";
import ResetPasswordWithoutLoginPage from "./pages/reset_password_without_login/resetPasswordWithoutLoginPage";
import ResetPasswordWithLoginPage from "./pages/reset_password_with_login/resetPasswordWithLoginPage";
import PasswordChangedSuccessfullyPage from "./pages/password_changed_successfully/passwordChangedSuccessfully";
import DashboardPage from "./pages/dashboard/dashboard";
import AvailabilityPage from "./pages/availability/availability";
import AppointmentsPage from "./pages/appointments/appointments";
import ChatPage from "./pages/chat/chat";
import CreateNewAvailabilityPage from "./pages/create_new_availability/createNewAvailability";
import PrivacyPolicyPage from "./pages/privacy_policy/privacyPolicy";
import ErrorPage from "./pages/error/errorPage";
import CheckEmailDuringRegistrationPage from "./pages/register/email_verify/verifyEmailInRegister";
import VerifyEmailInTheRegistrationPage from "./pages/choose_your_avatar/verify_email_in_the_registration/verifyEmailInTheRegistration";

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

// /user/profile
// /user/edit/user-data
// /user/edit/email
// /user/edit/password
// /user/password-changed-succesfully-notice
// /change-email/:token

// /user/dashboard
// /user/availability
// /user/availability/create
// /user/appointment

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
      <Route path="user" element={<VerifyAuthentication />}>
        <Route path="profile">
          <Route
            index
            element={
              <>
                <NavBar /> <UserProfilePage /> <FooterBar />
              </>
            }
          />
          <Route path="edit">
            <Route
              index
              path="user-data"
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
    dispatch(updateLoading());
    const refreshAccessToken = async () => {
      try {
        const refreshTokenResponse = await refreshTokenApi();
        dispatch(setAccessToken(refreshTokenResponse.data.access_token));
        const userDataResponse = await getUserDataApi(
          refreshTokenResponse.data.access_token
        );
        dispatch(updateUserData(userDataResponse.data));
      } catch (error) {
        if (error.response.status == 401) {
          dispatch(logout());
          dispatch(resetUserData());
        } else {
          window.location.href = `error/${error.repsonse.status}`;
        }
      }
    };

    refreshAccessToken();
    dispatch(updateLoading());
  }, []);

  return (
    <>
      <RouterProvider router={browserRoutes} />
    </>
  );
}

export default App;

import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Outlet, Navigate } from "react-router-dom";

function VerifyAuthentication() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const loading = useSelector((state: RootState) => state.loading.loading);

  if (loading) return null;
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} replace />;
}

function VerifyNotAuthentication() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const loading = useSelector((state: RootState) => state.loading.loading);

  if (loading) return null;
  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/user/dashboard"} replace />
  );
}

export { VerifyAuthentication, VerifyNotAuthentication };

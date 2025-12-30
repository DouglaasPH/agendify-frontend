import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Outlet, Navigate } from "react-router-dom";

function VerifyAuthentication() {
  const is_authenticated = useSelector(
    (state: RootState) => state.professional.is_authenticated
  );
  const loading = useSelector((state: RootState) => state.loading.loading);
  console.log(is_authenticated);

  if (loading) return null;
  return is_authenticated ? <Outlet /> : <Navigate to={"/login"} replace />;
}

function VerifyNotAuthentication() {
  const is_authenticated = useSelector(
    (state: RootState) => state.professional.is_authenticated
  );
  const loading = useSelector((state: RootState) => state.loading.loading);
  console.log(is_authenticated);

  if (loading) return null;
  return !is_authenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/professional/dashboard"} replace />
  );
}

export { VerifyAuthentication, VerifyNotAuthentication };

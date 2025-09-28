import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

export function PrivateRoute() {
  const { user, ready } = useAuth();
  const location = useLocation();

  if (!ready) return <div className="p-6">Завантаження…</div>;
  if (!user) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }
  return <Outlet />;
}

export function PublicRoute() {
  const { user, ready } = useAuth();
  const location = useLocation();

  if (!ready) return <div className="p-6">Завантаження…</div>;
  if (user) {
    const to = location.state?.from?.pathname || "/";
    return <Navigate to={to} replace />;
  }
  return <Outlet />;
}

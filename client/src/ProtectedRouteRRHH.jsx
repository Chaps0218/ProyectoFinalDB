import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const ProtectedRouteRRHH = () => {
  const { user, loading } = useAuth();
  if (loading) return <h1>Loading...</h1>;
  if (user.tipo !== "rrhh") return <Navigate to="/plataforma" replace />;
  return <Outlet />;
};
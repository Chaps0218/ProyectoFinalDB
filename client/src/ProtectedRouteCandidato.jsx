import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const ProtectedRouteCandidato = () => {
  const { user, loading } = useAuth();
  if (loading) return <h1>Loading...</h1>;
  if (user.tipo !== "candidato") return <Navigate to="/principalRRHH" replace />;
  return <Outlet />;
};
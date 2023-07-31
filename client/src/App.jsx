import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import ProfilePage from "./pages/ProfilePage";
import PrincipalRRHH from "./pages/PrincipalRRHH";
import { ProtectedRoute } from "./ProtectedRoute";
import { Navbar } from "./components/navbar";

// Nuevas Rutas
import Inicio from './pages/Inicio';
import Registro from './pages/Registro';
import RegistroRRHH from "./pages/RegistroRRHH";
import Login from './pages/Login';
import Plataforma from "./pages/Plataforma";
import Postulante from "./pages/Postulante";
import Proceso from "./pages/Proceso";
import Recursoshumanos from './pages/Recursoshumanos';
import CrudNAcademica from "./pages/CrudNAcademica";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} /> */}
          <Route path="/registro" element={<Registro />} />
          <Route path="/registroRRHH" element={<RegistroRRHH />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/PrincipalRRHH" element={<PrincipalRRHH />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/plataforma" element={<Plataforma />} />
            <Route path="/postulante" element={<Postulante />} />
            <Route path="/proceso" element={<Proceso />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/recursoshumanos" element={<Recursoshumanos />} />
            <Route path="/academica" element={<CrudNAcademica />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

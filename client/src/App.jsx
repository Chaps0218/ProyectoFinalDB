import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedRouteRRHH } from "./ProtectedRouteRRHH";
import { ProtectedRouteCandidato } from "./ProtectedRouteCandidato";

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
import PrincipalRRHH from "./pages/PrincipalRRHH";
import Usuarios from "./pages/usuarios";
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registroRRHH" element={<RegistroRRHH />} />
          <Route path="/" element={<Inicio />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<ProtectedRouteRRHH />}>
              <Route path="/registroRRHH" element={<RegistroRRHH />} />
              <Route path="/PrincipalRRHH" element={<PrincipalRRHH />} />
              <Route path="/recursoshumanos" element={<Recursoshumanos />} />
              <Route path="/academica" element={<CrudNAcademica />} />
            </Route>
            <Route element={<ProtectedRouteCandidato />}>
              <Route path="/plataforma" element={<Plataforma />} />
              <Route path="/postulante" element={<Postulante />} />
              <Route path="/proceso" element={<Proceso />} />
              <Route path="/usuarios" element={<Usuarios />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

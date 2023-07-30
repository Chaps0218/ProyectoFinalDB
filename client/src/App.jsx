import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import ProfilePage from "./pages/ProfilePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { Navbar } from "./components/navbar";

import { Profesores } from "./pages/Profesores";
// Nuevas Rutas
import Inicio from './pages/Inicio';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Formulario from './pages/Formulario';
import Plataforma from './pages/Plataforma';
import Informacion from './pages/Informacion';
import Postulante from './pages/Postulante';
import Proceso from './pages/Proceso';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profe" element={<Profesores />} />
          <Route
            element={<ProtectedRoute />}
            // Generamos una clave única basada en la ubicación actual para forzar la remontada
            // de los componentes protegidos cuando se cambie la ruta.
            key={window.location.pathname}
          >
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/registro" element={<Registro />} />
          <Route path="/login2" element={<Login />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/plataforma" element={<Plataforma />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/postulante" element={<Postulante />} />
          <Route path="/proceso" element={<Proceso />} />
            <Route path="/" element={<h1>Home</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

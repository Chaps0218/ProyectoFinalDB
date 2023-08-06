import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedRouteRRHH } from "./ProtectedRouteRRHH";
import { ProtectedRouteCandidato } from "./ProtectedRouteCandidato";
import React, { useState, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';

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
import Usuarios from "./pages/Postulacion";
import Informacion from "./pages/informacion";
import '@fortawesome/fontawesome-free/css/all.css';
import InicioPostulante from "./pages/InicioPostulante";
import InfoPostulante from "./pages/InformacionPostulante";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/proceso" element={<Proceso />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/postulacion" element={<Usuarios />} />
                <Route path="/informacion" element={<Informacion />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<ProtectedRouteRRHH />}>
                <Route path="/registroRRHH" element={<RegistroRRHH />} />
                <Route path="/PrincipalRRHH" element={<PrincipalRRHH />} />
                <Route path="/recursoshumanos" element={<Recursoshumanos />} />
                <Route path="/academica" element={<CrudNAcademica />} />
              </Route>
              <Route element={<ProtectedRouteCandidato />}>
                <Route path="/inicioPostulante" element={<InicioPostulante />} />
                <Route path="/informacionPostulante" element={<InfoPostulante />} />
                <Route path="/proceso" element={<Proceso />} />
                <Route path="/postulacion" element={<Usuarios />} />
                <Route path="/informacion" element={<Informacion />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeContext.Provider>
  );
}

export default App;

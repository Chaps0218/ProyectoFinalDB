import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedRouteRRHH } from "./ProtectedRouteRRHH";
import { ProtectedRouteCandidato } from "./ProtectedRouteCandidato";
import React, { useState, useEffect, useCallback } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Informacionrh from "./pages/Informacionrh";

// Nuevas Rutas
import Inicio from './pages/Inicio';
import Registro from './pages/Registro';
import RegistroRRHH from "./pages/RegistroRRHH";
import Login from './pages/Login';
import Plataforma from "./pages/Plataforma";
import Postulante from "./pages/Postulante";
import Proceso from "./pages/Proceso";
import Recursoshumanos from './pages/Recursoshumanos';
import Solicitud from "./pages/Solicitud";
import PrincipalRRHH from "./pages/PrincipalRRHH";
import Usuarios from "./pages/Postulacion";
import Informacion from "./pages/informacion";
import '@fortawesome/fontawesome-free/css/all.css';
import InicioPostulante from "./pages/InicioPostulante";
import InfoPostulante from "./pages/InformacionPostulante";
import SolicitudesPostulantes from "./pages/SolicitudesPostulantes";
import InfoPostRRHH from "./pages/InformacionPostulacionRRHH";
import InicioRRHH from "./pages/InicioRRHH";
import InformacionPersonal from "./pages/InformacionPersonal";
import Actividad from "./components/CRUD/Actividad";

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
            <Route path="/academica" element={<Solicitud />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/postulacion" element={<Usuarios />} />
                <Route path="/informacion" element={<Informacion />} />

                <Route path="/registroRRHH" element={<RegistroRRHH />} />
                <Route path="/PrincipalRRHH" element={<PrincipalRRHH />} />
                <Route path="/recursoshumanos" element={<Recursoshumanos />} />
                <Route path="/academica" element={<Solicitud />} />
                <Route path="/actividad" element={<Actividad />} />
                <Route path="/infoPostRRHH" element={<InfoPostRRHH />} />
                <Route path="/informacionrh" element={<Informacionrh />} />
                <Route path="/solicitudesPostulantes" element={<SolicitudesPostulantes />} />
                <Route path="/inicioRRHH" element={<InicioRRHH />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<ProtectedRouteRRHH />}>
                <Route path="/registroRRHH" element={<RegistroRRHH />} />
                <Route path="/PrincipalRRHH" element={<PrincipalRRHH />} />
                <Route path="/recursoshumanos" element={<Recursoshumanos />} />
                <Route path="/academica" element={<Solicitud />} />
                <Route path="/infoPostRRHH" element={<InfoPostRRHH />} />
                <Route path="/informacionrh" element={<Informacionrh />} />
                <Route path="/informacionPersonal" element={<InformacionPersonal />} />
                <Route path="/solicitudesPostulantes" element={<SolicitudesPostulantes />} />
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

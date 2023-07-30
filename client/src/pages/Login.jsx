import React, { useState } from 'react';
import './styles.css'; // Importa el archivo de estilos
import Popup from '../components/Popup.jsx';

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para el inicio de sesión
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="login-form">
        <h1>FORMULARIO DE ADMISIÓN PARA DOCENTES</h1>
        <label>Email</label>
        <input type="text" />
        <label>Contraseña</label>
        <input type="password" />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <p onClick={() => window.location.href = '/registro'}>Ir a Registro</p>
      </div>
      {showPopup && (
        <Popup
          mensaje="Tu información será manipulada conforme a la necesidad de la institución sin lugar a reclamos, conforme a la ley de protección de datos, etc."
          ruta="/plataforma" // Aquí pasa la ruta que desees redireccionar desde el componente Login
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Login;

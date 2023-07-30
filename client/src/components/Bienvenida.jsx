import React from 'react';
import './style.css';
import Logo from '../assets/logo.png';

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      {/* Espacio para la imagen del logo */}
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Texto centrado */}
      <div className="text-container">
        <h1>Bienvenidos a la plataforma ESPE DOCENTES</h1>
      </div>
    </div>
  );
};

export default WelcomeBanner;

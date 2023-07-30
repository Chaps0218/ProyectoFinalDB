import React from 'react';
import './styles.css';
import logo from '../assets/logo.png';
import anuncio from '../assets/anuncio.png';

const Plataforma = () => {
  return (
    <div className="plataforma-container">
    <div className="nombre-completo">
        POSTULANTE
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1>Bienvenidos a la plataforma ESPE DOCENTES</h1>
      <div className="imagen-usuario">
        <img src={anuncio} alt="Anuncio" />
      </div>

      <div className="seccion-informacion">
        <h1>LLENAR LA SIGUIENTE INFORMACIÓN</h1>
        <button>INFORMACIÓN DEL POSTULANTE</button>
        <button>SELECCIONAR POSTULACIÓN</button>
        <button onClick={() => window.location.href = '/'}>CERRAR SESIÓN</button>
      </div>

      <div className="estados">
        <p>COMPLETADO</p>
        <p>POR COMPLETAR</p>
      </div>
    </div>
  );
};

export default Plataforma;

import React from 'react';
import './styles.css';
import WelcomeBanner from '../components/Bienvenida';

const Plataforma = () => {
  return (
    <div className="plataforma-container">
      <WelcomeBanner />
      <div className="seccion-informacion">
        <h1>LLENAR LA SIGUIENTE INFORMACIÓN</h1>
        <button onClick={() => window.location.href = '/postulante'}>INFORMACIÓN DEL POSTULANTE</button>
        <button onClick={() => window.location.href = '/proceso'}>SELECCIONAR POSTULACIÓN</button>
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

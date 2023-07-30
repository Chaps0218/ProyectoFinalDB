import React from 'react';
import './style.css';

const Popup = ({ mensaje, ruta, onClose }) => {
  const handleAceptar = () => {
    onClose(); // Cierra el popup al aceptar
    window.location.href = ruta; // Redirige a la ruta que se pasa como prop
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <p>{mensaje}</p>
        <button onClick={handleAceptar}>Aceptar</button>
      </div>
    </div>
  );
};

export default Popup;
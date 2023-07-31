import React from 'react';
import './style.css';

const Popup = ({ mensaje, ruta, onClose }) => {
  const handleAceptar = () => {
    onClose();
    window.location.href = ruta;
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
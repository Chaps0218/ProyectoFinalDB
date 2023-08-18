import React, { useState } from 'react';
import './Tips.css';

const Tips = () => {

  const redirectToInstitucional = () => {
 
  };

  const redirectToPersonal = () => {

  };

  return (
    <div className="tips-container">
        <h1 className="menu-title">Tips</h1>
      <div className="tip-item">
        <p className="tip-question">¿Deseas cambiar información institucional?</p>
        <button className="tip-button" onClick={redirectToInstitucional}>Ir</button>
      </div>
      <div className="tip-item">
        <p className="tip-question">¿Deseas actualizar tu información personal?</p>
        <button className="tip-button" onClick={redirectToPersonal}>Ir</button>
      </div>
    </div>
  );
};

export default Tips;

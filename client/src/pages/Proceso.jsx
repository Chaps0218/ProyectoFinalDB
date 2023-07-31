import React, { useState } from 'react';
import './styles.css';
import WelcomeBanner from '../components/Bienvenida';
import Popup from '../components/Popup';


const Plataforma = () => {
  
  const [showPopup, setShowPopup] = useState(false);
  
  const handleProceso = () =>{
    setShowPopup(true);
  };

  const handleClosePopup = () => {
  setShowPopup(false);
  };

  return (
  <div className="process-container">
      <WelcomeBanner />
      <div className="formulario">
        <div className="proceso-container">
          <span className="proceso-text">SELECCIONAR POSTULACIÓN</span>
          <select className="proceso-select">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
          </select>
        </div>
        <div className="proceso-container">
          <span className="proceso-text">SELECCIONAR TIPO DE CONTRATACIÓN</span>
          <select className="proceso-select">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
          </select>
        </div>
        <div className="proceso-container">
          <span className="proceso-text">SELECCIONAR TIPO DE PERSONAL ACADÉMICO</span>
          <select className="proceso-select">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
          </select>
        </div>
        <div className="proceso-container">
          <span className="proceso-text">CAMPO AMPLIO</span>
          <select className="proceso-select">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
          </select>
        </div>
        <div className="proceso-container">
          <span className="proceso-text">CAMPO ESPECÍFICO</span>
          <select className="proceso-select">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
          </select>
        </div>
        <div className="proceso-container">
          <span className="proceso-text">SEDE</span>
          <select className="proceso-select">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
          </select>
        </div>
        <table className="tabla">
        <thead>
          <tr>
            <th>VACANTES</th>
            <th>TIEMPO (HRS)</th>
            <th>DEPARTAMENTO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>8</td>
            <td>MATRIZ</td>
          </tr>
        </tbody>
      </table>
      <div className="botones-container">
        <button className="btn-aceptar" onClick={handleProceso}>Aceptar</button>
        {showPopup && (
          <Popup
            mensaje="DATOS SUBIDOS CORRECTAMENTE"
            ruta="/plataforma" 
            onClose={handleClosePopup}
          />
        )}
        <button className="btn-regresar" onClick={() => window.location.href = '/plataforma'}>Regresar</button>
      </div>
      </div>
    </div>
  );
};

export default Plataforma;

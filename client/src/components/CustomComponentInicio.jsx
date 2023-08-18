import React, { useState } from 'react';
import PopupDocument from './PopupDocument'; 
import Popup from './Popup'; 
import './CustomComponentInicio.css'

import Tips from '../components/Tips'

const CustomComponentInicio= ({ title,numeroDeSolicitudes}) => {


    const irARevisarSolicitudes = () => {
      // Cambia esta ruta según la URL de tu página de revisión de solicitudes
      
    };

    return (
        <div className="documents-list">
            <h1 className="documents-title">{title}</h1>
            <hr className="documents-divider" />
            <div className="solicitudes-container">
            <div className="solicitudes-info">
                <h1>Tienes <span className='numero-solicitudes'>{numeroDeSolicitudes}</span> solicitudes por revisar</h1>
            </div>
            <button className="boton-ir" onClick={irARevisarSolicitudes}>
                IR
            </button>
            </div>
            <Tips>
            </Tips>
            
        </div>
    );
};

export default CustomComponentInicio;

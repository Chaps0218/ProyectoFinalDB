import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomComponentInicio.css'

import Tips from '../components/Tips'

const CustomComponentInicio= ({ title,numeroDeSolicitudes}) => {
    const navigate = useNavigate();

    return (
        <div className="custom-component-postulante">
            <h1 className="custom-title">{title}</h1>
            <hr className="custom-divider" />
            <div className="solicitudes-container">
            <div className="solicitudes-info">
                <h1>Tienes <span className='numero-solicitudes'>{numeroDeSolicitudes}</span> solicitudes por revisar</h1>
            </div>
            <button className="boton-ir" onClick={() => navigate('/infoP')}>
                IR
            </button>
            </div>
            <Tips>
            </Tips>
            
        </div>
    );
};

export default CustomComponentInicio;

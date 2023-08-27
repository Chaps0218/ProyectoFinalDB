import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './CustomComponentInicio.css'
import axios from 'axios';
import Tips from '../components/Tips'

const CustomComponentInicio= ({ title,numeroDeSolicitudes}) => {
    const [noAprovados, setNoAprovados] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/procesocontratacion/solicitud/no_aprobadas')
            .then(response => {
                setNoAprovados(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error al obtener las solicitudes:", error);
            });
    }, []);
    

    return (
        <div className="custom-component-postulante">
            <h1 className="custom-title">{title}</h1>
            <hr className="custom-divider" />
            <div className="solicitudes-container">
            <div className="solicitudes-info">
                <h1>Tienes <span className='numero-solicitudes'>{noAprovados ? noAprovados.length : 0}</span> solicitudes por revisar</h1>
            </div>
            <button className="boton-ir" onClick={() => navigate('/solicitudesPostulantes')}>
                IR
            </button>
            </div>
            <Tips>
            </Tips>
            
        </div>
    );
};

export default CustomComponentInicio;

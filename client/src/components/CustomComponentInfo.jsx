import React, { useState } from 'react';
import PopupDocument from './PopupDocument'; 
import Popup from './Popup'; 
import './CustomComponentInfo.css'

const CustomComponentForm = ({ title }) => {
    // Estado para controlar si se muestra la ventana emergente
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);

    // Función para abrir la ventana emergente
    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleAccept = () => {
        setShowPopup2(true);
    };

    // Función para cerrar la ventana emergente
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="documents-list">
            <h1 className="documents-title">{title}</h1>
            <hr className="documents-divider" />
            
            <div className="form-line">
                <div>
                    <h1>De Solicitud</h1>
                    <ul className="custom-list">
                            <li><a href="#">Candidato</a></li>
                            <li><a href="#">Actividad</a></li>
                            <li><a href="#">Campo Amplio</a></li>
                            <li><a href="#">Campo Específico</a></li>
                    </ul>
                </div>
                <div>
                    <h1>De Institución</h1>
                    <ul className="custom-list">
                            <li><a href="#">Sede</a></li>
                            <li><a href="#">Departamento</a></li>
                            <li><a href="#">Item</a></li>
                    </ul>
                </div>
                <div>
                    <h1>De Contrato</h1>
                    <ul className="custom-list">
                            <li><a href="#">Contratación</a></li>
                            <li><a href="#">Solicitud</a></li>
                            <li><a href="#">Postulación</a></li>
                            <li><a href="#">Requisito</a></li>
                            <li><a href="#">Oferta</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CustomComponentForm;

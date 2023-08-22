import React, { useState } from 'react';
import PopupDocument from './PopupDocument'; 
import Popup from './Popup'; 
import './DocumentsList.css';

const DocumentList = ({ title, children }) => {

    // Estado para controlar si se muestra la ventana emergente
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);

    // Función para abrir la ventana emergente
    const handleOpenPopup = () => {
        setShowPopup(true);

    };
    const handleAccept = () =>{
        setShowPopup2(true);
    };

    // Función para cerrar la ventana emergente
    const handleClosePopup = () => {
        setShowPopup(false);
    };
    return (
        <div className="custom-component-postulante">
            <h1 className="custom-title">{title}</h1>
            <hr className="custom-divider" />
            <div className='documents-container'>
                {children}
            </div>
            <div className='buttons-container'>
                <button onClick={handleOpenPopup}>Ver formatos</button>
                <button onClick={handleAccept}>Enviar información</button>
                {showPopup2 && (
                    <Popup
                        mensaje="DATOS SUBIDOS CORRECTAMENTE"
                        ruta="/inicioPostulante"
                        onClose={handleClosePopup}
                    />
                )}
            </div>
            <PopupDocument
                show={showPopup}
                onClose={handleClosePopup}
                title="Formatos Aceptados"
            />
        </div>
    );
};

export default DocumentList;

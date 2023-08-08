import React, { useState } from 'react';
import PopupDocument from './PopupDocument'; 
import Popup from './Popup'; 
import './CustomComponentForm.css'

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
                    <h1>Proceso:</h1>
                    <select>
                        <option value="2023-01">2023-01</option>
                        <option value="2023-02">2023-02</option>
                        <option value="2023-03">2023-03</option>
                    </select>
                </div>
                <div>
                    <h1>Tipo de Contrato:</h1>
                    <select>
                        <option value="Contrato Temporal">Contrato Temporal</option>
                        <option value="Contrato Indefinido">Contrato Indefinido</option>
                        <option value="Beca">Beca</option>
                    </select>
                </div>
            </div>
            
            <div className="form-line">
                <div>
                    <h1>Tipo de personal académico:</h1>
                    <select>
                        <option value="Docente">Docente</option>
                        <option value="Investigador">Investigador</option>
                        <option value="Administrativo">Administrativo</option>
                    </select>
                </div>
                <div>
                    <h1>Campo Amplio:</h1>
                    <select>
                        <option value="Ciencias Sociales">Ciencias Sociales</option>
                        <option value="Ciencias Naturales">Ciencias Naturales</option>
                        <option value="Artes">Artes</option>
                        <option value="Tecnología">Tecnología</option>
                    </select>
                </div>
            </div>
            
            <div className="form-line">
                <div>
                    <h1>Campo específico:</h1>
                    <select>
                        <option value="Economía">Economía</option>
                        <option value="Biología">Biología</option>
                        <option value="Música">Música</option>
                        <option value="Ingeniería">Ingeniería</option>
                    </select>
                </div>
                <div>
                    <h1>Sede:</h1>
                    <select>
                        <option value="Sede A">Sede A</option>
                        <option value="Sede B">Sede B</option>
                        <option value="Sede C">Sede C</option>
                    </select>
                </div>
                <div>
                    <h1>Departamento:</h1>
                    <select>
                        <option value="Departamento X">Departamento X</option>
                        <option value="Departamento Y">Departamento Y</option>
                        <option value="Departamento Z">Departamento Z</option>
                    </select>
                </div>
            </div>
            
            <div className='buttons-container'>
                <button onClick={handleAccept}>Enviar información</button>
                {showPopup2 && (
                    <Popup
                        mensaje="DATOS SUBIDOS CORRECTAMENTE"
                        ruta="/inicioPostulante"
                        onClose={handleClosePopup}
                    />
                )}
            </div>
        </div>
    );
};

export default CustomComponentForm;

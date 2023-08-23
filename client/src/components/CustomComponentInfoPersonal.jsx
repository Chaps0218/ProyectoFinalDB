import React, { useState } from 'react';
import PopupDocument from './PopupDocument'; 
import Popup from './Popup'; 
import './CustomComponentInfoPersonal.css'
import ChangePasswordPopup from './ChangePasswordPopup';

const CustomComponentForm2 = ({ title }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleAccept = () => {
        setShowPopup2(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

  const [cargo, setCargo] = useState('');
  const [nombre, setNombre] = useState('');
  const [editandoCampos, setEditandoCampos] = useState(false);
  const [mostrarCambioContraseña, setMostrarCambioContraseña] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePopupToggle = () => {
    setMostrarCambioContraseña(!mostrarCambioContraseña);
};

return (
    <div className="custom-component-postulante">
        <h1 className="custom-title">Datos</h1>
        <hr className="custom-divider" />

        <div className="form-section">
           
            {editandoCampos ? (
                <form onSubmit={handleSubmit} className="form-fields">
                    <label>Cargo:</label>
                    <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} />
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <button type="submit">Guardar</button>
                </form>
            ) : (
                <div className="form-fields">
                    <p>Cargo: {cargo}</p>
                    <p>Nombre: {nombre}</p>
                </div>
            )}
            <button className="edit-button" onClick={() => setEditandoCampos(!editandoCampos)}>
                {editandoCampos ? 'Cancelar' : 'Editar campos'}
            </button>
        </div>

        <button className="password-button" onClick={handlePopupToggle}>
            Cambiar contraseña
        </button>

        {mostrarCambioContraseña && <ChangePasswordPopup onClose={handlePopupToggle} />}
    </div>
);
};


        
 

export default CustomComponentForm2;

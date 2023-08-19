import React, { useState } from 'react';
import PopupDocument from './PopupDocument'; 
import Popup from './Popup'; 
import './CustomComponentInfoPersonal.css'
import ChangePasswordPopup from './ChangePasswordPopup'; // Importa el componente del popup

const CustomComponentForm2 = ({ title }) => {
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

    //nuevos
    // Estados para almacenar los valores editables
  const [cargo, setCargo] = useState('');
  const [nombre, setNombre] = useState('');

  // Estados para controlar la visualización de los campos editables y contraseña
  const [editandoCampos, setEditandoCampos] = useState(false);
  const [mostrarCambioContraseña, setMostrarCambioContraseña] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones como enviar los datos al servidor
    // y manejar cualquier otra lógica necesaria
  };

  const handlePopupToggle = () => {
    setMostrarCambioContraseña(!mostrarCambioContraseña);
};

return (
    <div className="documents-list">
        <h1 className="documents-title">Datos</h1>
        <hr className="documents-divider" />

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

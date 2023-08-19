import React from 'react';
import './ChangePasswordPopup.css';
const ChangePasswordPopup = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Cambio de contraseña</h2>
                <form>
                    <label>Contraseña antigua:</label>
                    <input type="password" />
                    <label>Contraseña nueva:</label>
                    <input type="password" />
                    <label>Repetir nueva contraseña:</label>
                    <input type="password" />
                    <div className="popup-buttons">
                        <button>Actualizar</button>
                        <button onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePasswordPopup;

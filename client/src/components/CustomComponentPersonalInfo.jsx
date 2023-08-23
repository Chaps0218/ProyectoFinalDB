import React, { useState } from 'react';
import './CustomComponentInfoPersonal2.css'
import ChangePasswordPopup from './ChangePasswordPopup';

const CustomComponentPersonalInfo = ({ title }) => {
    const [cargo, setCargo] = useState('');
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [tituloPostula, setTituloPostula] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [tipoIdentificacion, setTipoIdentificacion] = useState('');
    const [identificacion, setIdentificacion] = useState('');
    const [mostrarCambioContraseña, setMostrarCambioContraseña] = useState(false);

    const handlePopupToggle = () => {
        setMostrarCambioContraseña(!mostrarCambioContraseña);
    };
    return (
        <div className="custom-component-postulante">
            <h1 className="custom-title">{title}</h1>
            <hr className="custom-divider" />

            <div className="form-section">
                <div className="form-fields">
                    <p>Cargo: {cargo}</p>
                    <p>Nombre: {nombre}</p>
                    <p>Fecha de Nacimiento: {fechaNacimiento}</p>
                    <p>Título con el que postula: {tituloPostula}</p>
                    <p>Correo electrónico: {correoElectronico}</p>
                    <p>Tipo de identificación: {tipoIdentificacion}</p>
                    <p>Identificación: {identificacion}</p>
                </div>
            </div>

            <button className="password-button" onClick={handlePopupToggle}>
                Cambiar contraseña
            </button>

            {mostrarCambioContraseña && <ChangePasswordPopup onClose={handlePopupToggle} />}
        </div>
    );
}

export default CustomComponentPersonalInfo;
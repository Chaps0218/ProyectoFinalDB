import React, { useState } from 'react';
import './CustomComponentInfoPersonal2.css'
import ChangePasswordPopup from './ChangePasswordPopup';
import {Card, CardHeader, CardBody, Image, Chip} from "@nextui-org/react";
import { useAuth } from "../context/AuthContext";


const CustomComponentInfoPersonal = ({ title }) => {
    const [cargo, setCargo] = useState('');
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [tituloPostula, setTituloPostula] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [tipoIdentificacion, setTipoIdentificacion] = useState('');
    const [identificacion, setIdentificacion] = useState('');
    const [mostrarCambioContraseña, setMostrarCambioContraseña] = useState(false);

    const { isAuthenticated, user } = useAuth();


    const handlePopupToggle = () => {
        setMostrarCambioContraseña(!mostrarCambioContraseña);
    };

    function capitalizeFirstLetter(inputString) {
        if (typeof inputString !== 'string') {
          return ''; // Return an empty string for non-string inputs
        }
        
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
      }

    return (
        <div className="custom-component-postulante">
            <h1 className="custom-title">{title}</h1>
            <hr className="custom-divider" />

            {/* <div className="form-section">
                <div className="form-fields">
                    <p>Cargo: {cargo}</p>
                    <p>Nombre: {nombre}</p> ----
                    <p>Fecha de Nacimiento: {fechaNacimiento}</p>
                    <p>Título con el que postula: {tituloPostula}</p>
                    <p>Correo electrónico: {correoElectronico}</p> ---
                    <p>Tipo de identificación: {tipoIdentificacion}</p>---
                    <p>Identificación: {identificacion}</p> ---
                </div>
            </div> */}
            <div className="flex justify-between items-center p-2">
                <div className="w-full md:w-1/2 ml-60">

                <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">{isAuthenticated ? (
                        <>
                            {user && user.name1 ? (
                                <div>{user.name1} {user.name2} {user.lastname1} {user.lastname2}</div>
                            ) : (
                                <li>Loading...</li>
                            )}
                        </>
                    ) : (
                        null
                    )}</p>
                        <small className="text-default-500">{isAuthenticated ? (
                        <>
                            {user && user.email ? (
                                <div>{user.email}</div>
                            ) : (
                                <li>Loading...</li>
                            )}
                        </>
                    ) : (
                        null
                    )}</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                        width={270}
                        />
                    </CardBody>
                </Card>
                </div>
            </div>


            {mostrarCambioContraseña && <ChangePasswordPopup onClose={handlePopupToggle} />}
        </div>
    );
}

export default CustomComponentInfoPersonal;
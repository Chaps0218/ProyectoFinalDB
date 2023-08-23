import React, { useState } from 'react';
import './CustomComponentInfoPersonal2.css'
import ChangePasswordPopup from './ChangePasswordPopup';
import {Card, CardHeader, CardBody, Image, Chip} from "@nextui-org/react";

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
                <div className="w-full md:w-1/2 ml-40">

                <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Nombre</p>
                        <small className="text-default-500">Correo electronico</small>
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

                <div className="flex w-full gap-2 ml-5"  style={{ flexDirection: 'column' }}>

                    <div className="flex w-full gap-3">
                        <Chip color="success" variant="dot">Tipo de identificacion: </Chip>
                        <p>Cedula</p>
                    </div>

                    <div className="flex w-full gap-3">
                        <Chip color="success" variant="dot">Numero de identificacion: </Chip>
                        <p>1783628172</p>
                    </div>
                    
                    
                    <div className="flex w-full gap-3">
                        <Chip color="success" variant="dot">Titulo con el que postula </Chip>
                        <p>Ingenieria en Software</p>
                    </div>
                    
                    <div className="flex w-full gap-3">
                        <Chip color="success" variant="dot">Cargo </Chip>
                        <p>Profesor</p>
                    </div>

                    <div className="flex w-full gap-3">
                        <Chip color="success" variant="dot">Fecha de nacimiento </Chip>
                        <p>05-08-1990</p>
                    </div>


                    <button className="password-button" onClick={handlePopupToggle}>
                        Cambiar contraseña
                    </button>
                </div>
            </div>


            {mostrarCambioContraseña && <ChangePasswordPopup onClose={handlePopupToggle} />}
        </div>
    );
}

export default CustomComponentPersonalInfo;
import React, { useState } from 'react';
import './MenuCandidato.css';
import { FiHome, FiUser, FiFile, FiFolder } from 'react-icons/fi';
import { useAuth } from "../context/AuthContext";
import PopupDocument from './PopupDocument';

const Menu = ({ title, subtitle1, subtitle2, subtitle3, icon1, icon2, icon3 }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    const { isAuthenticated, logout, user } = useAuth();
    return (
        <div className="menu-candidato">
            <div>
                <h1 className="menu-title">
                    {isAuthenticated ? (
                        <>
                            {user && user.name1 ? (
                                <div>{user.name1} {user.name2} {user.lastname1} {user.lastname2}</div>
                            ) : (
                                <li>Loading...</li>
                            )}
                        </>
                    ) : (
                        null
                    )}</h1>
                <hr className="menu-divider" />
            </div>
            <div>
                <a href="/informacionPersonalCandidato"><FiFile />Información de Cuenta<span>{icon2}</span></a>
                <a href="/inicioPostulante"><FiHome /> Inicio</a>
                <a href="/informacionPostulante"><FiUser /> {subtitle1} <span>{icon1}</span></a>
                <a href="/postulacion"><FiFile />{subtitle2}<span>{icon2}</span></a>
                <a href="#" onClick={handleOpenPopup}><FiFolder /> {subtitle3}<span>{icon3}</span></a>
                <PopupDocument 
                    show={showPopup} 
                    onClose={handleClosePopup}
                    title="Formatos Aceptados"
                />
            </div>
            <button className="menu-button" onClick={() => { logout(); }}>Cerrar sesión</button>
        </div>

    );
}

export default Menu;

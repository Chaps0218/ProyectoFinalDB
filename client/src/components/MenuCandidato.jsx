import React, { useEffect } from 'react';
import './MenuCandidato.css';
import { FiHome, FiUser, FiFile, FiFolder } from 'react-icons/fi';
import { useAuth } from "../context/AuthContext";

const Menu = ({ title, subtitle1, subtitle2, subtitle3, icon1, icon2, icon3 }) => {
    const { isAuthenticated, logout, user } = useAuth();
    return (
        <div className="menu">
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
                <a href="/inicioPostulante"><FiHome /> Inicio</a>
                <a href="/informacionPostulante"><FiUser /> {subtitle1} <span>{icon1}</span></a>
                <a href="/postulacion"><FiFile />{subtitle2}<span>{icon2}</span></a>
                <a href="/informacion"><FiFolder /> {subtitle3}<span>{icon3}</span></a>
            </div>
            <button className="menu-button" onClick={() => { logout(); }}>Cerrar sesión</button>
        </div>

    );
}

export default Menu;

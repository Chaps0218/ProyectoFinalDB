import React from 'react';
import './MenuCandidato.css';
import { FiHome, FiUser, FiFile, FiFolder } from 'react-icons/fi';
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Menu = ({ title, subtitle1, subtitle2, subtitle3, icon1, icon2, icon3 }) => {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <div className="menu">
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
            <a href="/inicioPostulante"><FiHome /> Inicio</a>
            <a href="/informacionPostulante"><FiUser /> {subtitle1} <span>{icon1}</span></a>
            <a href="/postulacion"><FiFile />{subtitle2}<span>{icon2}</span></a>
            <a href="/informacion"><FiFolder /> {subtitle3}<span>{icon3}</span></a> 
            {/* aquí poner el popup */}
            <button className="menu-button" onClick={() => window.location.href = '/login'}>Cerrar sesión</button>
        </div>

    );
}

export default Menu;

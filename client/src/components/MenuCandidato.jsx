import React from 'react';
import './MenuCandidato.css';
import { FiHome, FiUser, FiFile, FiFolder } from 'react-icons/fi';

const Menu = ({ title, subtitle1, subtitle2, subtitle3, icon1, icon2, icon3 }) => {
    return (
        <div className="menu">
            <h1 className="menu-title">{title}</h1>
            <hr className="menu-divider" />
            <a href="/inicioPostulante"><FiHome /> Inicio</a>
            <a href="/informacionPostulante"><FiUser /> {subtitle1} <span>{icon1}</span></a>
            <a href="/inicioPostulante"><FiFile />{subtitle2}<span>{icon2}</span></a>
            <a href="/inicioPostulante"><FiFolder /> {subtitle3}<span>{icon3}</span></a>
            <button className="menu-button" onClick={() => window.location.href = '/login'}>Cerrar sesión</button>
        </div>

    );
}

export default Menu;

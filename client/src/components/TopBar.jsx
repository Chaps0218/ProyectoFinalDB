import React, { useState } from 'react';
import {FiInfo } from 'react-icons/fi';
import './TopBar.css';

const TopBar = ({title}) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode'); // Aquí puedes manipular las clases CSS de tu elección
    };

    return (
            <div className="top-bar">
                <h2 className='title-top-bar'><FiInfo/>{title}</h2>
                <input className="input-darkmode" type="checkbox" id="darkmode-toggle" />
                <label className="label-darkmode" for="darkmode-toggle" onClick={toggleDarkMode}></label>
            </div>
    );
};

export default TopBar;

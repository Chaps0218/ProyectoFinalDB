import React, { useState } from 'react';
import './TopBar.css';

const TopBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode'); // Aquí puedes manipular las clases CSS de tu elección
    };

    return (
        <div className="top-bar">
            <input className="input-darkmode" type="checkbox" id="darkmode-toggle" />
            <label for="darkmode-toggle" onClick={toggleDarkMode}></label>
        </div>
    );
};

export default TopBar;

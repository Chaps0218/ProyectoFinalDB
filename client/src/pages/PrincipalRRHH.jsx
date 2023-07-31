import React from 'react';
import './styles.css';
import WelcomeBanner from '../components/Bienvenida';
import VentanaInformacion from '../components/Ventana.jsx';

const PrincipalRRHH = () => {
    return (
        <div className="plataforma-container">
            <div className='inicio'>
                <div className="plataforma-container">
                <img src="https://www.espe.edu.ec/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-12-at-09.11.54.jpeg" alt="Logo" width="50%" />

                    <h1>BIENVENIDO AL SISTEMA DE RECURSOS HUMANOS</h1>
                    <br></br>
                    <br></br>
                    <nav>
                        <ul>
                            <li><a href="/postulante">REVISAR POSTULANTE</a></li>
                            <li><a href="/proceso">APROBAR/REPROBAR POSTULANTES</a></li>
                            <li><a href="/registroRRHH">REGISTRAR</a></li>
                        </ul>
                    </nav>
                </div>
                <WelcomeBanner />
            </div>
        </div>

    );
};

export default PrincipalRRHH;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CustomComponent.css';
import { useAuth } from "../context/AuthContext";
import { Carousel } from 'react-responsive-carousel';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requieres carousel styles 

const CustomComponent = ({ title, subtitle1, subtitle2, icon1, icon2 }) => {

    const { isAuthenticated, user } = useAuth();
    const [documentTitles, setDocumentTitles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Supongo que user.id contiene el ID del usuario
                const response = await axios.get(`http://127.0.0.1:8001/validar_documento/${user.id}`);
                console.log(user.id);
                setDocumentTitles(response.data);
                console.log("Esto esta", response.data);
            } catch (error) {
                console.error("Error al obtener los títulos de los documentos:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="custom-component-postulante">
            <h1 className="custom-title">{title}</h1>
            <hr className="custom-divider" />
            <div className="custom-content">
                <div className="custom-section-carusel">
                    <div className="custom-item">
                        {documentTitles.valido === false ? (
                            <a href="/informacionPostulante">
                                <span className='custom-icon'>{icon1}</span>
                                {subtitle1}
                            </a>
                        ) : (
                            <p>
                                <span style={{fontSize: '30px', marginRight: '22px' }}>✔</span>
                                Documentos Subidos
                            </p>
                        )}
                    </div>
                    <div className="custom-item">
                        {documentTitles.valido === false ? (
                            <p>
                                Para continuar el proceso primero debe subir sus documentos
                            </p>

                        ) : (
                            <a href="/postulacion"><span className='custom-icon'>{icon2}</span>{subtitle2}</a>
                        )}
                    </div>

                </div>
                <div className="custom-carousel">
                    <Carousel autoPlay showThumbs={false} showIndicators={true} infiniteLoop showStatus={false}>
                        <div>
                            <img src={require('../assets/espe.jpg')} alt="imagen 1" />
                        </div>
                        <div>
                            <img src={require('../assets/espe.jpg')} alt="imagen 2" />
                        </div>
                        <div>
                            <img src={require('../assets/espe.jpg')} alt="imagen 3" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default CustomComponent;
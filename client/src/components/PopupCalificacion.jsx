import React from 'react';
// import FilePreview from './FilePreview';
import documento from '../assets/prueba.png';


import './PopupCalificacion.css'; // Asegúrate de tener los estilos CSS en este archivo
// import { image } from '@nextui-org/theme';
const PopupCalificacion = ({ show, onClose, title, subtitle, candidato, calificaciones, onConfirm, onCancel }) => {
    return show ? (
      <div className="popupdoc-overlay">
        <div className="popupdoc-container">
          <button className="popupdoc-button-close" onClick={onClose}>X</button>
          <h1 className="popupdoc-title">{title}</h1>
          <h2 className="popupdoc-title">{subtitle}</h2>
          <div className="popupdoc-content">
            <div className="candidato-section">
              <h3>Candidato</h3>
              <div className="candidato-info">
                <img src={documento} alt="h" className="candidato-img" />
                <div>
                  <p>{candidato.nombre}</p>
                  <p>{candidato.correo}</p>
                </div>
              </div>
            </div>
            <div className="calificaciones-section">
                <div className="calificaciones-columns">
                    <div className="calificaciones-parametros">           
                        <h3>Parámetros</h3>
                        {calificaciones.map((calificacion, index) => (
                            <p className='parametro-p' key={index}>{calificacion.parametro}</p>
                        ))}
                    </div>
                    <div className="calificaciones-puntajes">
                        <h3>Calificaciones</h3>
                        {calificaciones.map((calificacion, index) => (
                            <p className='puntaje-p' key={index}>{calificacion.puntaje}</p>
                        ))}
                    </div>
                </div>
            </div>
          </div>
          <div className="buttons-pop">
          <button className="button-calificacion" onClick={onConfirm}>
              Si, calificar
            </button>
            <button className="button-calificacion" onClick={onClose}>
            No, volver
            </button>
            </div>
        </div>
      </div>
    ) : null;
  };
  
  

export default PopupCalificacion;

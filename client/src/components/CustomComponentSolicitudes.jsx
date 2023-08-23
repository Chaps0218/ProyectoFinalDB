import React, { useState, useEffect } from 'react';
import './CustomComponentSolicitudes.css';
import { FiInfo, FiUser} from 'react-icons/fi';
import * as api from '../api/contratacion';
import Calificacion from '../pages/Calificacion';


const CustomComponentSolicitudes = ({ title }) => {
    

    const [selectedSolicitud, setSelectedSolicitud] = useState(null);
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const [showDeclinePopup, setShowDeclinePopup] = useState(false);
    const [solicitudes, setSolicitudes] = useState([]);

    const handleOpenCandidateDetails = (solicitud) => {
        setSelectedSolicitud(solicitud);
    };

    const handleCloseCandidateDetails = () => {
        setSelectedSolicitud(null);
    };

    const handleAcceptCandidate = () => {
        setShowConfirmationPopup(true);
    };

    const handleAcceptCalificar = () => {
        window.location.href = "/calificacion";
    };
    
    

    const handleConfirmAccept = () => {
        setShowConfirmationPopup(false);
        // Realizar acciones para aceptar el candidato en la base de datos
        setSelectedSolicitud(null);
    };

    const handleCancelAccept = () => {
        setShowConfirmationPopup(false);
        setSelectedSolicitud(null);
    };

    const handleDeclineCandidate = () => {
        setShowDeclinePopup(true);
    };

    const handleConfirmAcceptDec = () => {
        setShowDeclinePopup(false);
        // Realizar acciones para aceptar el candidato en la base de datos
        setSelectedSolicitud(null);
    };

    const handleCancelAcceptDec = () => {
        setShowDeclinePopup(false);
    };

    const [candidateRating, setCandidateRating] = useState(0);

    // call api to get solicitudes
    const getSolicitudes = async () => {
        const response = await api.extraerSolicitud();
        setSolicitudes(response.data);
    };

    useEffect(() => {
        getSolicitudes();
    }, []);

    return (
        <div className="custom-component-postulante">
            <h1 className="custom-title">{title}</h1>
            <hr className="custom-divider" />
            <div className="custom-content">
                    {selectedSolicitud ? (
                        <div className="candidate-details">
                        <div className="candidate-header">
                            <FiUser size={50} />
                            <h2>{selectedSolicitud.name}</h2>
                        </div>
                        <div className="candidate-info">
                            <div className="info-item">
                                <span>Actividad:</span>
                                <span>{selectedSolicitud['act_nombre']}</span>
                            </div>
                            <div className="info-item">
                                <span>Campo Amplio:</span>
                                <span>{selectedSolicitud['ca_nombre']}</span>
                            </div>
                            <div className="info-item">
                                <span>Campo Específico:</span>
                                <span>{selectedSolicitud['ce_nombre']}</span>
                            </div>
                            <div className="info-item">
                                <span>Calificación:</span>
                                <span>{selectedSolicitud['tx_puntaje_max']}</span>
                            </div>
                            <div className="info-item">
    </div>

                        </div>
                        <div className="buttons">
                            <button onClick={handleAcceptCalificar}>Calificar</button>
                            <button onClick={handleAcceptCandidate}>Aceptar</button>
                            <button onClick={handleDeclineCandidate}>Rechazar</button>
                            <button onClick={handleCloseCandidateDetails}>Cancelar</button>
                        </div>
                    </div>
                    ) : (
                        <div className='form-line-container'>
                        <div className='form-line'>
                        <div className='pendiente'>
                            <button>
                                Pendiente
                            </button>
                            <FiInfo/>
                        </div>
                        <div className='procesado'>
                            <button>
                                Procesado
                            </button>
                            <FiInfo/>
                        </div>
                        </div>
                            <div className="scrollable-table-container">
                                <table className="custom-table">
                                    <tbody>
                                        <tr>
                                            <td>No.</td>
                                            <td>Fecha de Solicitud</td>
                                            <td>Estado</td>
                                        </tr>
                                        {
                                            solicitudes.map((solicitud, index) => (<tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{ new Date().toUTCString() }</td>
                                                    <td>
                                                        <button onClick={() => handleOpenCandidateDetails(solicitud)}>
                                                            {solicitud['sol_aprobacion'] ? 'Aprobado' : 'Pendiente'}
                                                        </button>
                                                    </td>
                                                </tr>))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
            </div>
            {showConfirmationPopup && (
                <div className="confirmation-overlay">
                    <div className="confirmation-popup">
                        <div className='titulo-pop'>
                            <h1>¿Está seguro?</h1>
                        </div>
                        <div className='texto-pop'>
                            <h2>Recuerde que el cambio es irreversible</h2>
                        </div>
                        <div className='botones-pop'>
                            <button onClick={handleConfirmAccept}>Sí, aceptar candidato.</button>
                            <button onClick={handleCancelAccept}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
            {showDeclinePopup && (
                <div className="confirmation-overlay">
                    <div className="confirmation-popup">
                        <div className='titulo-pop'>
                            <h1>¿Está seguro?</h1>
                        </div>
                        <div className='texto-pop'>
                            <h2>Recuerde que el cambio es irreversible</h2>
                        </div>
                        <div className='botones-pop'>
                            <button onClick={handleConfirmAcceptDec}>Sí, rechazar candidato.</button>
                            <button onClick={handleCancelAcceptDec}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CustomComponentSolicitudes;

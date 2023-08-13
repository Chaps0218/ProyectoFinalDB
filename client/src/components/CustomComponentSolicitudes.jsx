import React, { useState } from 'react';
import './CustomComponentSolicitudes.css';
import { FiInfo, FiUser} from 'react-icons/fi';

const CustomComponentSolicitudes = ({ title }) => {

    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const [showDeclinePopup, setShowDeclinePopup] = useState(false);

    const handleOpenCandidateDetails = (candidate) => {
        setSelectedCandidate(candidate);
    };

    const handleCloseCandidateDetails = () => {
        setSelectedCandidate(null);
    };

    const handleAcceptCandidate = () => {
        setShowConfirmationPopup(true);
    };

    const handleConfirmAccept = () => {
        setShowConfirmationPopup(false);
        // Realizar acciones para aceptar el candidato en la base de datos
        setSelectedCandidate(null);
    };

    const handleCancelAccept = () => {
        setShowConfirmationPopup(false);
    };

    const handleDeclineCandidate = () => {
        setShowDeclinePopup(true);
    };

    const handleConfirmAcceptDec = () => {
        setShowDeclinePopup(false);
        // Realizar acciones para aceptar el candidato en la base de datos
        setSelectedCandidate(null);
    };

    const handleCancelAcceptDec = () => {
        setShowDeclinePopup(false);
    };

    return (
        <div className="custom-component">
            <h1 className="custom-title">{title}</h1>
            <hr className="custom-divider" />
            <div className="custom-content">
                <div className="custom-section">
                    {selectedCandidate ? (
                        <div className="candidate-details">
                        <div className="candidate-header">
                            <FiUser size={50} />
                            <h2>{selectedCandidate.name}</h2>
                        </div>
                        <div className="candidate-info">
                            <div className="info-item">
                                <span>Actividad:</span>
                                <span>{selectedCandidate.actividad}</span>
                            </div>
                            <div className="info-item">
                                <span>Campo Amplio:</span>
                                <span>{selectedCandidate.campoAmplio}</span>
                            </div>
                            <div className="info-item">
                                <span>Campo Específico:</span>
                                <span>{selectedCandidate.campoEspecifico}</span>
                            </div>
                        </div>
                        <div className="buttons">
                            <button onClick={handleAcceptCandidate}>Aceptar</button>
                            <button onClick={handleDeclineCandidate}>Rechazar</button>
                            <button onClick={handleCloseCandidateDetails}>Cancelar</button>
                        </div>
                    </div>
                    ) : (
                        <div>
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
                                        <tr>
                                            <td>Candidato 1</td>
                                            <td>20/07/2023</td>
                                            <td>
                                                <button onClick={() => handleOpenCandidateDetails({ name: "Candidato 1" })}>
                                                    Pendiente
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Candidato 1</td>
                                            <td>20/07/2023</td>
                                            <td>
                                                <button onClick={() => handleOpenCandidateDetails({ name: "Candidato 1" })}>
                                                    Pendiente
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Candidato 1</td>
                                            <td>20/07/2023</td>
                                            <td>
                                                <button onClick={() => handleOpenCandidateDetails({ name: "Candidato 1" })}>
                                                    Pendiente
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Candidato 1</td>
                                            <td>20/07/2023</td>
                                            <td>
                                                <button onClick={() => handleOpenCandidateDetails({ name: "Candidato 1" })}>
                                                    Pendiente
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Candidato 1</td>
                                            <td>20/07/2023</td>
                                            <td>
                                                <button onClick={() => handleOpenCandidateDetails({ name: "Candidato 1" })}>
                                                    Pendiente
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
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

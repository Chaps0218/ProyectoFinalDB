import React, { useState, useEffect } from 'react';
import './CustomComponentSolicitudes.css';
import { FiInfo, FiUser, FiDownload } from 'react-icons/fi';
import axios from 'axios';
import emailjs from "../pages/emailjsInit";
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://127.0.0.1:8000/api/v1/procesocontratacion';
const CALIFICACIONES_API_URL = 'http://127.0.0.1:8001/calificaciones_documentos';


const CandidateDetails = ({ candidato, promedio, downloadFiles, handleAcceptCalificar, handleAcceptCandidate, handleDeclineCandidate, handleCloseCandidateDetails }) => {
    if (!candidato) {
        return null;
    }
    const { cand_nombre1, cand_nombre2, cand_apellido1, cand_apellido2, actividad, campo_amplio, campo_especifico, cand_correo } = candidato;

    return (
        <div className="candidate-details">
            <div className="candidate-header">
                <FiUser size={50} />
                <h2>{cand_nombre1} {cand_nombre2} {cand_apellido1} {cand_apellido2}</h2>
            </div>
            <div className="candidate-info">
                <div className="info-item">
                    <span>Actividad:</span>
                    <span>{actividad}</span>
                </div>
                <div className="info-item">
                    <span>Campo Amplio:</span>
                    <span>{campo_amplio}</span>
                </div>
                <div className="info-item">
                    <span>Campo Específico:</span>
                    <span>{campo_especifico}</span>
                </div>
                <div className="info-item">
                    <span>Calificación:</span>
                    <span>{promedio}</span>
                </div>
                <div className="info-item">
                    <span>Documentos</span>
                    <button onClick={downloadFiles}><FiDownload /></button>
                </div>
                <div className="info-item">
                </div>
                <div className="buttons">
                    <button onClick={handleAcceptCalificar}>Calificar</button>
                    <button onClick={handleAcceptCandidate}>Aceptar</button>
                    <button onClick={handleDeclineCandidate}>Rechazar</button>
                    <button onClick={handleCloseCandidateDetails}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

const CustomComponentSolicitudes = ({ title }) => {
    const navigate = useNavigate();

    const [selectedSolicitud, setSelectedSolicitud] = useState(null);
    const [infoProcesoCandidato, setInfoProcesoCandidato] = useState([]);
    const [calificaciones, setCalificaciones] = useState([]);

    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const [showDeclinePopup, setShowDeclinePopup] = useState(false);
    const [solicitudes, setSolicitudes] = useState([]);
    const [selectedIndex, setselecteIndex] = useState(null);
    const [selectedPositionId, setSelectedPositionId] = useState(null);
    const [candidatoId, setCandidatoId] = useState(null);
    const [solicitudId, setSolicitudId] = useState(null);
    const [candidatos, setCandidatos] = useState([]);

    const handleOpenCandidateDetails = (solicitud, index, candidato, solicitudId) => {
        setSelectedPositionId(1);
        setselecteIndex(index)
        setCandidatoId(candidato)
        setSolicitudId(solicitudId)
        setSelectedSolicitud(solicitud);
    };

    function createEmailMessage(name, lastname, email, postulationAccepted) {
        const subject = 'Estado de Postulación';
        const acceptanceMessage = `Le extendemos nuestro cordial saludo y le confirmamos su postulación al proceso de selección.\n\nNos complace informarle que su postulación ha sido aceptada.`;
        const rejectionMessage = `Le extendemos nuestro cordial saludo y le informamos sobre el estado de su postulación.\n\nLamentablemente, su postulación no ha sido aceptada en esta ocasión.`;

        const message = `Estimado(a) ${name} ${lastname},\n\n${postulationAccepted ? acceptanceMessage : rejectionMessage}\n\nLe deseamos mucho éxito en el proceso de selección y quedamos a su disposición para cualquier consulta.\n\nAtentamente,\n\nEl equipo de Recursos Humanos`;

        const templateParams = {
            to_email: email,
            subject: subject,
            message: message
        };


        if (email.endsWith("@gmail.com")) {
            emailjs.send('SERVICEGMAIL_SBDA', 'template_bug1zo4', templateParams).then(
                (response) => {
                    console.log('Email sent:', response);
                    window.location.reload();
                },
                (error) => {
                    console.error('Error sending email:', error);
                }
            );
        } else {
            emailjs.send('SERVICEOUTLOOK_SBDA', 'template_bug1zo4', templateParams).then(
                (response) => {
                    console.log('Email sent:', response);
                    window.location.reload();
                },
                (error) => {
                    console.error('Error sending email:', error);
                }
            );
        }

        return templateParams;
    }


    const handleCloseCandidateDetails = () => {
        setSelectedSolicitud(null);
    };

    const handleAcceptCandidate = () => {
        setShowConfirmationPopup(true);
    };

    const handleAcceptCalificar = () => {
        const id = candidatoId;
        navigate('/calificacion', { state: { id } });
    };

    const handleConfirmAccept = () => {
        updateSolicitudAprobacion(true);
        setShowConfirmationPopup(false);
        setSelectedSolicitud(null);
        const emailParams = createEmailMessage(candidatoSeleccionado.cand_nombre1, candidatoSeleccionado.cand_apellido1, candidatoSeleccionado.cand_correo, true);
    };

    const handleConfirmAcceptDec = () => {
        updateSolicitudAprobacion(false);
        setShowDeclinePopup(false);
        setSelectedSolicitud(null);
        const emailParams = createEmailMessage(candidatoSeleccionado.cand_nombre1, candidatoSeleccionado.cand_apellido1, candidatoSeleccionado.cand_correo, false);
    };

    const handleCancelAccept = () => {
        setShowConfirmationPopup(false);
        setSelectedSolicitud(null);
        setSelectedSolicitud(null);
    };

    const handleDeclineCandidate = () => {
        setShowDeclinePopup(true);
    };

    const handleCancelAcceptDec = () => {
        setShowDeclinePopup(false);
    };



    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/procesocontratacion/solicitud/')
            .then(response => {
                setSolicitudes(response.data);
            })
            .catch(error => {
                console.error("Error al obtener las solicitudes:", error);
            });
    }, []);

    useEffect(() => {
        if (selectedPositionId !== null) {
            axios.get(`http://127.0.0.1:8000/api/v1/procesocontratacion/info_candidato_por_pa_id/${selectedPositionId}`)
                .then(response => {
                    if (response.data && response.data.length > 0) {
                        setInfoProcesoCandidato(response.data);
                    }
                })
                .catch(error => {
                    console.error("Error al obtener la información del candidato:", error);
                });
        }
    }, [selectedPositionId]);

    useEffect(() => {
        if (candidatoId !== null) {
            axios.get(`http://127.0.0.1:8001/obtener_calificaciones/${candidatoId}`)
                .then(response => {
                    if (response.data && response.data.calificaciones) {
                        setCalificaciones(response.data.calificaciones);
                    }
                })
                .catch(error => {
                    console.error("Error al obtener las calificaciones:", error);
                });
        }
    }, [candidatoId]);

    const updateSolicitudAprobacion = (aprobacionValue) => {
        if (selectedIndex !== null) {
            const updatedData = {
                sol_id: solicitudId,
                cand_id: candidatoId,
                ofe_id: selectedPositionId,
                rh_id: 2,
                sol_aprobacion: aprobacionValue
            };
            axios.put(`http://127.0.0.1:8000/api/v1/procesocontratacion/solicitud/${selectedIndex}`, updatedData)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error("Error al actualizar sol_aprobacion:", error);
                });
        }
    }


    const downloadFiles = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8001/descargar_documentos_zip/${candidatoId}`, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'documentos.zip');
            document.body.appendChild(link);
            link.click();
            link.remove();

        } catch (error) {
            console.error("Error al descargar los documentos:", error);
        }
    };



    const calcularPromedio = (calificaciones) => {
        const suma = calificaciones.reduce((acc, currentValue) => acc + currentValue, 0);
        return suma / calificaciones.length;
    };
    const promedio = calcularPromedio(calificaciones);
    const candidatoSeleccionado = infoProcesoCandidato.find(candidato => candidato.cand_id === candidatoId);
    var nombreCompleto = ''
    var actividad = ''
    var campoAmplio = ''
    var campoEspecifico = ''
    if (candidatoSeleccionado) {
        const nombre1 = candidatoSeleccionado.cand_nombre1;
        const nombre2 = candidatoSeleccionado.cand_nombre2;
        const apellido1 = candidatoSeleccionado.cand_apellido1;
        const apellido2 = candidatoSeleccionado.cand_apellido2;
        nombreCompleto = nombre1 + ' ' + nombre2 + ' ' + apellido1 + ' ' + apellido2;
        actividad = candidatoSeleccionado.actividad;
        campoAmplio = candidatoSeleccionado.campo_amplio;
        campoEspecifico = candidatoSeleccionado.campo_especifico;
    } else {
        console.error("Candidato no encontrado con ID:", candidatoId);
    }


    return (
        <div className="custom-component-postulante">
            <h1 className="custom-title">{title}</h1>
            <hr className="custom-divider" />
            <div className="custom-content">
                {selectedSolicitud ? (
                    <CandidateDetails
                        candidato={candidatoSeleccionado}
                        promedio={promedio}
                        downloadFiles={downloadFiles}
                        handleAcceptCalificar={handleAcceptCalificar}
                        handleAcceptCandidate={handleAcceptCandidate}
                        handleDeclineCandidate={handleDeclineCandidate}
                        handleCloseCandidateDetails={handleCloseCandidateDetails}
                    />
                ) : (
                    <div className='form-line-container'>
                        <div className='form-line'>
                            <div className='pendiente'>
                                <button className='btn-pendiente'>
                                    Pendiente
                                </button>
                                <FiInfo />
                            </div>
                            <div className='procesado'>
                                <button className='btn-rechazado'>
                                    Procesado
                                </button>
                                <FiInfo />
                            </div>
                        </div>
                        <div className="scrollable-table-container">
                            <table className="custom-table">
                                <tbody>
                                    <tr>
                                        <td>No.</td>
                                        <td>Postulante</td>
                                        <td>Estado</td>
                                    </tr>
                                    {
                                        solicitudes.map((solicitud, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{solicitud.cand_nombre1} {solicitud.cand_nombre2} {solicitud.cand_apellido1} {solicitud.cand_apellido2}</td>
                                                <td>
                                                    <button
                                                        className={
                                                            solicitud.sol_aprobacion === null ? "button-pending" :
                                                                solicitud.sol_aprobacion ? "button-accepted" : "button-rejected"
                                                        }
                                                        onClick={() => solicitud.sol_aprobacion === null && handleOpenCandidateDetails(solicitud, index + 1, solicitud.cand_id, solicitud.sol_id)}
                                                        disabled={solicitud.sol_aprobacion !== null}
                                                    >
                                                        {solicitud.sol_aprobacion === null ? 'Pendiente' :
                                                            solicitud.sol_aprobacion ? 'Aprobado' : 'Rechazado'}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
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
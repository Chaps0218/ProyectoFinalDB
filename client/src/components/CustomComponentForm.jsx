import React, { useEffect, useState } from 'react';
import { extraerOferta, extraerContrato, extraerTipoContrato, extraerPersonalAcademico, extraercampoAmplio, extraercampoEspecifico, extraerSede, extraerDepartamento, extraerActividad } from "../api/contratacion";
import PopupDocument from './PopupDocument';
import Popup from './Popup';
import './CustomComponentForm.css'


const CustomComponentForm = ({ title }) => {
    // Estado para controlar si se muestra la ventana emergente
    const [contratos, setContratos] = useState([]);
    const [ofertas, setOfertas] = useState([]);
    const [personalAcademico, setPersonalAcademico] = useState([]);
    const [campoAmplio, setCampoAmplio] = useState([]);
    const [campoEspecifico, setCampoEspecifico] = useState([]);
    const [sede, setSede] = useState([]);
    const [departamento, setDepartamento] = useState([]);
    const [actividad, setActividad] = useState([]);
    const [tipoContrato, setTipoContrato] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);

    useEffect(() => {
        extraerContrato()
            .then((res) => {
                if (res.data && res.data.contratos) {
                    setContratos(res.data.contratos);
                    console.log(res.data.contratos);
                } else {
                    console.log("Datos de contratos no encontrados en la respuesta.");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraerOferta()
            .then((res) => {
                if (res.data && res.data.ofertas) {
                    setOfertas(res.data.ofertas);
                    console.log(res.data.ofertas);
                } else {
                    console.log("Datos de ofertas no encontrados en la respuesta.");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraerTipoContrato()
            .then((res) => {
                if (res.data && res.data.tipoContrato) {
                    setTipoContrato(res.data.tipoContrato);
                    console.log(res.data.tipoContrato);
                } else {
                    console.log("Datos de tipo de contrato no encontrados en la respuesta.");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    

    useEffect(() => {
        extraerPersonalAcademico()
            .then((res) => {
                if (res.data && res.data.personalAcademico) {
                    setPersonalAcademico(res.data.personalAcademico);
                    console.log(res.data.personalAcademico);
                } else {
                    console.log("Datos de personal académico no encontrados en la respuesta.");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    useEffect(() => {
        extraercampoAmplio()
            .then((res) => {
                if (res.data && res.data.campoAmplio) {
                    setCampoAmplio(res.data.campoAmplio);
                    console.log(res.data.campoAmplio);
                } else {
                    console.log("Datos de campo amplio no encontrados en la respuesta.");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraercampoEspecifico()
            .then((res) => {
                if (res.data && res.data.campoEspecifico) {
                    setCampoEspecifico(res.data.campoEspecifico);
                    console.log(res.data.campoEspecifico);
                } else {
                    console.log("Datos de campo especifico no encontrados en la respuesta.");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraerSede()
            .then((res) => {
                if (res.data && res.data.sede) {
                    setSede(res.data.sede);
                    console.log(res.data.sede);
                } else {
                    console.log("Datos de sede no encontrados en la respuesta.");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraerDepartamento()
            .then((res) => {
                if (res.data && res.data.departamento) {
                    setDepartamento(res.data.departamento);
                    console.log(res.data.departamento);
                } else {
                    console.log("Datos de departamento no encontrados en la respuesta.");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraerActividad()
            .then((res) => {
                setActividad(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // Función para abrir la ventana emergente
    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleAccept = () => {
        setShowPopup2(true);
    };

    // Función para cerrar la ventana emergente
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const tableData = [
        ['Vacantes', 'Tiempo'],
        ['2', 'Tiempo completo'],
        ['3', 'Medio tiempo'],
        ['3', 'Medio tiempo'],
        ['3', 'Medio tiempo'],
        ['3', 'Medio tiempo'],
        ['3', 'Medio tiempo'],
        ['3', 'Medio tiempo'],
        ['3', 'Medio tiempo'],
        ['3', 'Medio tiempo'],
        ['3', 'Medio tiempo'],
        // ... (agregar más datos según sea necesario)
    ];


    return (
        <div className="custom-component-postulante">


            <h1 className="custom-title">{title}</h1>
            <hr className="custom-divider" />


            <div className='form-line-container'>

                <div className="form-line">
                    <div>
                        <h1>Proceso:</h1>
                        <select>
                            {contratos.map((item) => (
                                <option key={item[0]} value={item[1]}>
                                    {item[2]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h1>Tipo de Contrato:</h1>
                        <select>
                            {tipoContrato.map((item) => (
                                <option key={item[0]} value={item[1]}>
                                    {item[2]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-line">
                    <div>
                        <h1>Tipo de personal académico:</h1>
                        <select>
                            {personalAcademico.map((item) => (
                                <option key={item[0]} value={item[1]}>
                                    {item[2]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h1>Campo Amplio:</h1>
                        <select>
                            {campoAmplio.map((item) => (
                                <option key={item[0]} value={item[1]}>
                                    {item[2]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-line">
                    <div>
                        <h1>Campo específico:</h1>
                        <select>
                            {campoEspecifico.map((item) => (
                                <option key={item[0]} value={item[1]}>
                                    {item[2]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h1>Sede:</h1>
                        <select>
                            {sede.map((item) => (
                                <option key={item[0]} value={item[1]}>
                                    {item[2]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h1>Departamento:</h1>
                        <select>
                            {departamento.map((item) => (
                                <option key={item[0]} value={item[1]}>
                                    {item[2]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className='documents-container'>
                <div className="table-container">
                    <table className="custom-table-form">
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            <div className='buttons-container'>
                <button className='button-enviar-info' onClick={handleAccept}>Enviar información</button>
                {showPopup2 && (
                    <Popup
                        mensaje="DATOS SUBIDOS CORRECTAMENTE"
                        ruta="/inicioPostulante"
                        onClose={handleClosePopup}
                    />
                )}
            </div>
        </div>
    );
};

export default CustomComponentForm;

import React, { useEffect, useState } from 'react';
import { extraerOferta, extraerContrato,extraerTipoContrato, extraerPersonalAcademico, extraercampoAmplio, extraercampoEspecifico, extraerSede, extraerDepartamento, extraerActividad } from "../api/contratacion";
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
                setContratos(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraerOferta()
            .then((res) => {
                setOfertas(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraerTipoContrato()
            .then((res) => {
                setTipoContrato(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraerPersonalAcademico()
            .then((res) => {
                setPersonalAcademico(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraercampoAmplio()
            .then((res) => {
                setCampoAmplio(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraercampoEspecifico()
            .then((res) => {
                setCampoEspecifico(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraerSede()
            .then((res) => {
                setSede(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        extraerDepartamento()
            .then((res) => {
                setDepartamento(res.data);
                console.log(res.data);
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
                        <option value="2023-01">2023-01</option>
                        <option value="2023-02">2023-02</option>
                        <option value="2023-03">2023-03</option>
                    </select>
                </div>
                <div>
                    <h1>Tipo de Contrato:</h1>
                    <select>
                        <option value="Contrato Temporal">Contrato Temporal</option>
                        <option value="Contrato Indefinido">Contrato Indefinido</option>
                        <option value="Beca">Beca</option>
                    </select>
                </div>
            </div>

            <div className="form-line">
                <div>
                    <h1>Tipo de personal académico:</h1>
                    <select>
                        <option value="Docente">Docente</option>
                        <option value="Investigador">Investigador</option>
                        <option value="Administrativo">Administrativo</option>
                    </select>
                </div>
                <div>
                    <h1>Campo Amplio:</h1>
                    <select>
                        <option value="Ciencias Sociales">Ciencias Sociales</option>
                        <option value="Ciencias Naturales">Ciencias Naturales</option>
                        <option value="Artes">Artes</option>
                        <option value="Tecnología">Tecnología</option>
                    </select>
                </div>
            </div>

            <div className="form-line">
                <div>
                    <h1>Campo específico:</h1>
                    <select>
                        <option value="Economía">Economía</option>
                        <option value="Biología">Biología</option>
                        <option value="Música">Música</option>
                        <option value="Ingeniería">Ingeniería</option>
                    </select>
                </div>
                <div>
                    <h1>Sede:</h1>
                    <select>
                        <option value="Sede A">Sede A</option>
                        <option value="Sede B">Sede B</option>
                        <option value="Sede C">Sede C</option>
                    </select>
                </div>
                <div>
                    <h1>Departamento:</h1>
                    <select>
                        <option value="Departamento X">Departamento X</option>
                        <option value="Departamento Y">Departamento Y</option>
                        <option value="Departamento Z">Departamento Z</option>
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

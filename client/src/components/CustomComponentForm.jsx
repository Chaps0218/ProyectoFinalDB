import React, { useEffect, useState } from 'react';
import { extraerOferta, extraerContrato, extraerTipoContrato, extraerPersonalAcademico, extraercampoAmplio, extraercampoEspecifico, extraerSede, extraerDepartamento, extraerActividad, agregarOferta} from "../api/contratacion";
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

    const [selectedValuesArray, setSelectedValuesArray] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);


    useEffect(() => {
        Promise.all([
            extraerContrato(),
            extraerOferta(),
            extraerTipoContrato(),
            extraerPersonalAcademico(),
            extraercampoAmplio(),
            extraercampoEspecifico(),
            extraerSede(),
            extraerDepartamento(),
            extraerActividad(),
        ])
            .then((responses) => {
                const [
                    contratoRes,
                    ofertaRes,
                    tipoContratoRes,
                    personalAcademicoRes,
                    campoAmplioRes,
                    campoEspecificoRes,
                    sedeRes,
                    departamentoRes,
                    actividadRes,
                ] = responses;

                if (contratoRes.data && contratoRes.data.contrato) {
                    setContratos(contratoRes.data.contrato);
                } else {
                    console.log("Datos de contratos no encontrados en la respuesta.");
                }

                if (ofertaRes.data && ofertaRes.data.oferta) {
                    setOfertas(ofertaRes.data.oferta);
                } else {
                    console.log("Datos de ofertas no encontrados en la respuesta.");
                }

                if (tipoContratoRes.data && tipoContratoRes.data.tipoContrato) {
                    setTipoContrato(tipoContratoRes.data.tipoContrato);
                } else {
                    console.log("Datos de tipo de contratos no encontrados en la respuesta.");
                }

                if (personalAcademicoRes.data && personalAcademicoRes.data.personalAcademico) {
                    setPersonalAcademico(personalAcademicoRes.data.personalAcademico);
                } else {
                    console.log("Datos de personal académico no encontrados en la respuesta.");
                }

                if (campoAmplioRes.data && campoAmplioRes.data.campoAmplio) {
                    setCampoAmplio(campoAmplioRes.data.campoAmplio);
                } else {
                    console.log("Datos de campo amplio no encontrados en la respuesta.");
                }

                if (campoEspecificoRes.data && campoEspecificoRes.data.campoEspecifico) {
                    setCampoEspecifico(campoEspecificoRes.data.campoEspecifico);
                } else {
                    console.log("Datos de campo especifico no encontrados en la respuesta.");
                }

                if (sedeRes.data && sedeRes.data.sede) {
                    setSede(sedeRes.data.sede);
                } else {
                    console.log("Datos de sede no encontrados en la respuesta.");
                }

                if (departamentoRes.data && departamentoRes.data.departamento) {
                    setDepartamento(departamentoRes.data.departamento);
                } else {
                    console.log("Datos de departamento no encontrados en la respuesta.");
                }

                setActividad(actividadRes.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleSeleccionar = () => {
        for (let i = 0; i < ofertas.length - 1; i++) {
            const oferta = ofertas[i];
            console.log("oferta: ", oferta)

            if (
                selectedValuesArray.contratos[0] === oferta[1] &&
                selectedValuesArray.tipoContrato[0] === oferta[2] &&
                selectedValuesArray.campoEspecifico[0] === oferta[3] &&
                selectedValuesArray.campoAmplio[0] === oferta[4] &&
                selectedValuesArray.sede[0] === oferta[5] &&
                selectedValuesArray.departamento[0] === oferta[6] &&
                selectedValuesArray.personalAcademico[0] === oferta[7]
            ) {
                setSelectedOffer(oferta);
                setShowTable(true);
                break; // Exit the loop after finding the matching offer
            }
        }

        // setShowPopup2(true);
    };

    const handleAgregar = (info) => {
        agregarOferta(info);
    }

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const tableData = [
        ['Vacantes', 'Tiempo'],
        ['2', 'Tiempo completo'],
    ];

    const [selectedIDs, setSelectedIDs] = useState({
        contratos: "",
        tipoContrato: "",
        personalAcademico: "",
        campoAmplio: "",
        campoEspecifico: "",
        sede: "",
        departamento: "",
    });

    const [dropdownDisabled, setDropdownDisabled] = useState({
        tipoContrato: true,
        personalAcademico: true,
        campoAmplio: true,
        campoEspecifico: true,
        sede: true,
        departamento: true,
    });

    const handleSelectChange = (key, selectedValue, selectedMapping) => {
        setSelectedIDs(prevSelectedIDs => ({
            ...prevSelectedIDs,
            [key]: selectedValue,
        }));
        setSelectedValuesArray(prevSelectedValues => {
            const updatedValues = {
                ...prevSelectedValues,
                [key]: selectedMapping
            };
            return updatedValues;
        });
    };

    useEffect(() => {
        setDropdownDisabled({
            tipoContrato: false,
            personalAcademico: selectedIDs.tipoContrato === "",
            campoAmplio: selectedIDs.personalAcademico === "",
            campoEspecifico: selectedIDs.campoAmplio === "",
            sede: selectedIDs.campoEspecifico === "",
            departamento: selectedIDs.sede === "",
        });
    }, [selectedIDs]);

    return (
        <div className="custom-component-postulante">
            <h1 className="custom-title">{title}</h1>
            <hr className="custom-divider" />

            <div className='form-line-container'>
                <div className="form-line">
                    <div>
                        <h1>Proceso:</h1>
                        <select
                            onChange={(e) => handleSelectChange("contratos", e.target.value, contratos.find(item => item[1] === e.target.value))}
                            disabled={dropdownDisabled.contratos}
                        >
                            <option value="">Seleccionar Proceso</option>
                            {contratos.map((item) => (
                                <option key={item[0]} value={item[1]}>
                                    {item[1]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h1>Tipo de Contrato:</h1>
                        <select
                            onChange={(e) => handleSelectChange("tipoContrato", e.target.value, tipoContrato.find(item => item[1] === e.target.value))}
                            disabled={dropdownDisabled.tipoContrato}
                        >
                            <option value="">Seleccionar Tipo de Contrato</option>
                            {tipoContrato.map((item) => (
                                <option key={item[0]} value={item[1]}>
                                    {item[1]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-line">
                    <div>
                        <h1>Tipo de personal académico:</h1>
                        <select
                            onChange={(e) => handleSelectChange("personalAcademico", e.target.value, personalAcademico.find(item => item[2] === e.target.value))}
                            disabled={dropdownDisabled.personalAcademico}
                        >
                            <option value="">Seleccionar Tipo de Personal Académico</option>
                            {personalAcademico.map((item) => (
                                <option key={item[0]} value={item[2]}>
                                    {item[2]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h1>Campo Amplio:</h1>
                        <select
                            onChange={(e) => handleSelectChange("campoAmplio", e.target.value, campoAmplio.find(item => item[2] === e.target.value))}
                            disabled={dropdownDisabled.campoAmplio}
                        >
                            <option value="">Seleccionar Campo Amplio</option>
                            {campoAmplio.map((item) => (
                                <option key={item[0]} value={item[2]}>
                                    {item[2]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>



                <div className="form-line">
                    <div>
                        <h1>Campo específico:</h1>
                        <select
                            onChange={(e) => handleSelectChange("campoEspecifico", e.target.value, campoEspecifico.find(item => item[2] === e.target.value))}
                            disabled={dropdownDisabled.campoEspecifico}
                        >
                            <option value="">Seleccionar Campo Específico</option>
                            {campoEspecifico.map((item) => (
                                <option key={item[0]} value={item[2]}>
                                    {item[2]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h1>Sede:</h1>
                        <select
                            onChange={(e) => handleSelectChange("sede", e.target.value, sede.find(item => item[2] === e.target.value))}
                            disabled={dropdownDisabled.sede}
                        >
                            <option value="">Seleccionar Sede</option>
                            {sede.map((item) => (
                                <option key={item[0]} value={item[2]}>
                                    {item[2]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h1>Departamento:</h1>
                        <select
                            onChange={(e) => handleSelectChange("departamento", e.target.value, departamento.find(item => item[2] === e.target.value))}
                            disabled={dropdownDisabled.departamento}
                        >
                            <option value="">Seleccionar Departamento</option>
                            {departamento.map((item) => (
                                <option key={item[0]} value={item[2]}>
                                    {item[2]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className='buttons-container'>
                <button className='button-enviar-info' onClick={handleSeleccionar}>Seleccionar Campos</button>
                {showPopup2 && (
                    <Popup
                        mensaje="DATOS SUBIDOS CORRECTAMENTE"
                        ruta="/inicioPostulante"
                        onClose={handleClosePopup}
                    />
                )}
            </div>
            {showTable && (
                <>
                    <div className="table-container">
                        <h2>Información de la oferta seleccionada:</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Vacantes Disponibles</th>
                                    <th>Horas a trabajar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{selectedOffer[9]}</td>
                                    <td>{selectedOffer[10]}</td>
                                    {/* Agrega más celdas aquí según la estructura de datos */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='buttons-container'>
                        <button className='button-enviar-info' onClick={()=> handleAgregar(selectedOffer)}>Enviar Información</button>
                        {showPopup2 && (
                            <Popup
                                mensaje="DATOS SUBIDOS CORRECTAMENTE"
                                ruta="/inicioPostulante"
                                onClose={handleClosePopup}
                            />
                        )}
                    </div>
                </>
            )}

        </div>
    );
};

export default CustomComponentForm;
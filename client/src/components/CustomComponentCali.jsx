import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import "./CustomComponentCali.css";
import PopupCalificacion from './PopupCalificacion';
import axios from 'axios';

const CustomComponentCalificacion = ({ title, parametros, candidato }) => {
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [calificaciones, setCalificaciones] = useState(
    Array(parametros.length).fill("")
  );

  const [tooltipIndex, setTooltipIndex] = useState(null);

  const [calificacionesMapeadas, setCalificacionesMapeadas] = useState([]);


  const handleCalificacionChange = (index, value) => {
    const maxPuntaje = parametros[index].tx_puntaje_max;
    if (value === "" || (/^(0|[1-9]\d*)$/.test(value) && value >= 0 && value <= maxPuntaje)) {
      const newCalificaciones = [...calificaciones];
      newCalificaciones[index] = value;
      setCalificaciones(newCalificaciones);
      setValidationStates(states => {
        const newStates = [...states];
        newStates[index] = "valid";
        return newStates;
      });
    } else {
      setValidationStates(states => {
        const newStates = [...states];
        newStates[index] = "invalid";
        return newStates;
      });
    }
  };

  const [validationStates, setValidationStates] = useState(Array(parametros.length).fill(undefined));
  const mapearCalificaciones = () => {
    return calificaciones.map((calificacion, index) => ({
      documento_nombre: parametros[index].tx_descripcion,
      id_usuario: candidato[5],
      calificacion: parseInt(calificacion, 10),
    }));
  };

  const handleSubmit = async () => {
    if (calificaciones.some((cal) => cal === "" || cal < 0)) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    const formData = new FormData();
    calificaciones.forEach((calificacion, index) => {
      formData.append('nombres', parametros[index].tx_descripcion);
      formData.append('calificaciones', parseInt(calificacion, 10).toString());
    });
    formData.append('id_usuario', candidato[5]);
    try {
      const response = await axios.post('http://127.0.0.1:8001/guardar_calificaciones/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      if (response.status === 200) {
        console.log("Calificaciones actualizadas correctamente");
        setShowPopup(true);
      } else {
        console.error("Error actualizando las calificaciones");
      }
    } catch (error) {
      console.error("Error al comunicarse con el servidor:", error);
    }
  };

  const calificacionesMapeadas2 = mapearCalificaciones();

  return (
    <div className="custom-component-postulante">
      <h1 className="custom-title">{title}</h1>
      <hr className="custom-divider" />
      <div className="documents-container">
        <div className="parametros">
          {parametros.map((parametro, index) => {
            const value = calificaciones[index];
            const validationState = validationStates[index];
            return (
              <div className="calificacion-item" key={index}>
                <div className="informacion-calificacion">
                  <span
                    className="icon"
                    onMouseEnter={() => setTooltipIndex(index)}
                    onMouseLeave={() => setTooltipIndex(null)}
                  >
                    🛈
                  </span>
                  {tooltipIndex === index && (
                    <div className="tooltip">{parametro.tx_observacion}</div>
                  )}
                  <label className="label-calificacion">{parametro.tx_descripcion}:</label>
                </div>
                <div className="calificaciones">
                  <Input
                    className="wide-input"
                    value={value}
                    label="Calificación"
                    type="text"
                    onValueChange={(value) => handleCalificacionChange(index, value)}
                    variant="bordered"
                    color={validationState === "invalid" ? "danger" : "success"}
                    errorMessage={
                      validationState === "invalid" &&
                      `Ingrese un valor entre 0 y ${parametro.tx_puntaje_max}`
                    }
                    validationState={validationState}

                    max={parametro.tx_puntaje_max}
                  />
                  <span className="span-calificacion">
                    / {parametro.tx_puntaje_max}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="buttons-calificacion">
        <button className="button-calificacion" onClick={handleSubmit}>
          Enviar
        </button>
        <PopupCalificacion
          show={showPopup}
          onClose={handleClosePopup}
          title="¿Está seguro?"
          subtitle="Recuerda que esta acción es irreversible"
          calificaciones={calificacionesMapeadas2}
          candidato={candidato}
        />
        <button
          className="button-calificacion"
          onClick={() => setCalificaciones(Array(parametros.length).fill(""))}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};


export default CustomComponentCalificacion;
import React, { useState} from "react";
import { Input } from "@nextui-org/react";
import "./CustomComponentCali.css";
import PopupCalificacion from './PopupCalificacion';
import axios from 'axios';


const CustomComponentCalificacion = ({ title, parametros, candidato }) => {
        // Estado para controlar si se muestra la ventana emergente
        // const [ setShowPopup2] = useState(false);
    
        // Función para abrir la ventana emergente
        // const handleOpenPopup = () => {
        //     setShowPopup(true);
    
        // };
        // const handleAccept = () =>{
        //     setShowPopup2(true);
        // };
    
        // Función para cerrar la ventana emergente
        const handleClosePopup = () => {
            setShowPopup(false);
        };

    const [showPopup, setShowPopup] = useState(false);
    // const handleConfirm = () => {
    //     console.log('Calificación confirmada');
    //     setShowPopup(false); // Cerrar el popup
    //   };
    
    //   const handleCancel = () => {
    //     console.log('Operación cancelada');
    //     setShowPopup(false); // Cerrar el popup
    //   };


    const [calificaciones, setCalificaciones] = useState(
        Array(parametros.length).fill("")
);
      
  const [tooltipIndex, setTooltipIndex] = useState(null);

  const [calificacionesMapeadas, setCalificacionesMapeadas] = useState([]);


  const handleCalificacionChange = (index, value) => {
    const maxPuntaje = parametros[index].tx_puntaje_max;
  
    // Verificar si el valor es un número entero válido y que esté en el rango de 0 a puntaje máximo
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



  const handleSubmit = async () => {
    // Validación antes de enviar
    if (calificaciones.some((cal) => cal === "" || cal < 0)) {
      alert("Por favor, complete todos los campos.");
      return;
    }
  
     // Mapea las calificaciones y los parámetros en un nuevo objeto
     const mapeadas = calificaciones.map((calificacion, index) => ({
      documento_nombre: parametros[index].tx_descripcion,
      calificacion: parseInt(calificacion, 10),  // Asegurarte de que es un número

  }));
  // Realiza la petición al servidor
    setCalificacionesMapeadas(mapeadas); // Actualiza el estado con las calificaciones mapeadas
    setShowPopup(true); // Abrir el popup
    try {
      const response = await axios.put(`http://127.0.0.1:8001/actualizar_calificaciones/${28}`, {
          calificaciones: mapeadas
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

  console.log("candi")
  console.log(candidato)
  console.log(parametros)
  
  console.log("'esfsefse'");
  console.log(calificacionesMapeadas);
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
                    type="text" // Cambiar el tipo a "text" para permitir la validación personalizada
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
                calificaciones={calificacionesMapeadas} // Pasa las calificaciones mapeadas como prop
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

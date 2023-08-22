import React, { useState} from "react";
import { Input } from "@nextui-org/react";
import "./CustomComponentCali.css";
import PopupCalificacion from './PopupCalificacion';

const CustomComponentCalificacion = ({ title, parametros }) => {
    const candidato = {
        nombre: 'Juan Pérez',
        correo: 'juan.perez@example.com'
    };


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
    const maxPuntaje = parametros[index].puntajeMaximo;
  
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



  const handleSubmit = () => {
    // Validación antes de enviar
    if (calificaciones.some((cal) => cal === "" || cal < 0)) {
      alert("Por favor, complete todos los campos.");
      return;
    }
  
    // Mapea las calificaciones y los parámetros en un nuevo objeto
    const mapeadas = calificaciones.map((calificacion, index) => ({
      parametro: parametros[index].nombre,
      puntaje: calificacion,
    }));
  
    setCalificacionesMapeadas(mapeadas); // Actualiza el estado con las calificaciones mapeadas
    setShowPopup(true); // Abrir el popup
  };
  
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
                        <div className="tooltip">{parametro.descripcion}</div>
                  )}
                  <label className="label-calificacion">{parametro.nombre}:</label>
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
                      `Ingrese un valor entre 0 y ${parametro.puntajeMaximo}`
                    }
                    validationState={validationState}
                    
                    max={parametro.puntajeMaximo}
                  />
                  <span className="span-calificacion">
                    / {parametro.puntajeMaximo}
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

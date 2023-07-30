import React, { useState } from 'react';

const VentanaInformacion = () => {
    const [mostrarVentana, setMostrarVentana] = useState(false);
  
    const handleMostrarVentana = () => {
      setMostrarVentana(!mostrarVentana);
    };
    
    const handleRedireccion = (url) => {
        window.location.href = url;
      };

    return (
      <div>
        <button onClick={handleMostrarVentana}>Más Información</button>
        {mostrarVentana && (
          <div className="ventana-emergente">
            <h1>CONOCE MÁS ACERCA DEL CONCURSO DE MÉRITOS DE OPOSICIÓN</h1>
            <p onClick={() => handleRedireccion('https://www.espe.edu.ec/campus/')}>NUESTRAS SEDES</p>
          <p onClick={() => handleRedireccion('https://www.espe.edu.ec/campus/')}>BASES DEL CONCURSO 2023</p>
          <p onClick={() => handleRedireccion('https://www.espe.edu.ec/campus/')}>CRONOGRAMA</p>
          </div>
        )}
      </div>
    );
  };

export default VentanaInformacion;

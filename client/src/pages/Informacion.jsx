import React from 'react';
import './styles.css';

const Informacion = () => {
  return (
    <div className="informacion-container">
      <div className="imagen-lado-izquierdo">
        {/* Aquí coloca la imagen que desees mostrar en el lado izquierdo */}
      </div>
      <div className="texto-lado-derecho">
        <h1>CONOCE MÁS ACERCA DEL CONCURSO DE MÉRITOS DE OPOSICIÓN</h1>
        <div className="info-item">
          <span>NUESTRAS SEDES</span>
          {/* Aquí coloca el ícono del PDF para NUESTRAS SEDES */}
          <img src="../assets/icono_pdf.png" alt="Ícono PDF" />
        </div>
        <div className="info-item">
          <span>BASES DEL CONCURSO 2023</span>
          {/* Aquí coloca el ícono del PDF para BASES DEL CONCURSO */}
          <img src="../assets/icono_pdf.png" alt="Ícono PDF" />
        </div>
        <div className="info-item">
          <span>CRONOGRAMA</span>
          {/* Aquí coloca el ícono del PDF para CRONOGRAMA */}
          <img src="../assets/icono_pdf.png" alt="Ícono PDF" />
        </div>
        <div className='boton-regresar'>
        <button onClick={() => window.location.href = '/'}>Regresar</button>
      </div>
      </div>
    </div>
  );
};

export default Informacion;
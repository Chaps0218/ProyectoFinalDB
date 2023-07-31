import React from 'react';
import './styles.css';
import VentanaInformacion from '../components/Ventana.jsx';

const Inicio = () => {
  return (
    <div className='inicio'>
      <div className='recuadro-blanco-titulo'>
        <h1>TRABAJA CON NOSOTROS</h1>
      </div>
      <div className='recuadro-blanco'>
        <h1>CONCURSO DE MÉRITOS Y OPOSICIÓN 2023</h1>
        <button onClick={() => window.location.href = '/login'}>Comenzar</button>
      </div>
    </div>
  );
};

export default Inicio;

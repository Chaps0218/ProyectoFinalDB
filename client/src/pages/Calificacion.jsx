import React from 'react';
import './styles.css';
import MenuRRHH from '../components/MenuRRHH';
import TopBar from '../components/TopBar';
import CustomComponentCali from '../components/CustomComponentCali'
// import { useAuth } from "../context/AuthContext";

const Calificacion = () => {
  const parametros = [
    {
      nombre: 'Calidad',
      descripcion: 'La calidad se refiere a la excelencia inherente de un producto o servicio.',
      puntajeMaximo: 5
    },
    {
      nombre: 'Eficiencia',
      descripcion: 'La eficiencia se refiere a la relación entre los recursos utilizados y los resultados obtenidos.',
      puntajeMaximo: 10
    },
    {
      nombre: 'Innovación',
      descripcion: 'La innovación se refiere a la introducción de nuevos métodos, ideas o productos.',
      puntajeMaximo: 7
    },
    {
      nombre: 'Responsabilidad Social',
      descripcion: 'La responsabilidad social se refiere a las obligaciones éticas y sociales de una organización.',
      puntajeMaximo: 4
    },
    {
      nombre: 'Calidad',
      descripcion: 'La calidad se refiere a la excelencia inherente de un producto o servicio.',
      puntajeMaximo: 5
    },
    {
      nombre: 'Eficiencia',
      descripcion: 'La eficiencia se refiere a la relación entre los recursos utilizados y los resultados obtenidos.',
      puntajeMaximo: 10
    },
    {
      nombre: 'Innovación',
      descripcion: 'La innovación se refiere a la introducción de nuevos métodos, ideas o productos.',
      puntajeMaximo: 7
    },
    {
      nombre: 'Responsabilidad Social',
      descripcion: 'La responsabilidad social se refiere a las obligaciones éticas y sociales de una organización.',
      puntajeMaximo: 4
    }
  ];
  
  // const { isAuthenticated } = useAuth();
  return (
    <div className="parent-container">
      <div className="plataforma-container">
        <div className="top-item">
        <TopBar
            title="Lista de Postulantes"
          ></TopBar>
        </div>
        <div className="left-item">
          <MenuRRHH
            title='Usuario'
            subtitle1='Solicitudes'
            subtitle2='Información postulación'
            subtitle3='Información personal'
            ></MenuRRHH>
        </div>
        <div className="right-item">
          <CustomComponentCali
          title="Calificación"
          parametros={parametros}
          ></CustomComponentCali>

        </div>
        <video className="background-video" autoPlay loop muted>
          <source src={require('../assets/inicio.mp4')} type="video/mp4" />
          Tu navegador no admite la reproducción de videos.
        </video>
      </div>
    </div>
  );
};

export default Calificacion;
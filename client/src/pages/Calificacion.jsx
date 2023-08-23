import React, { useState, useEffect } from "react";

import './styles.css';
import MenuRRHH from '../components/MenuRRHH';
import TopBar from '../components/TopBar';
import CustomComponentCali from '../components/CustomComponentCali'
// import { useAuth } from "../context/AuthContext";

const Calificacion = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/procesocontratacion/titulo_exp")
        .then(response => response.json())
        .then(data => {
            const transformedData = data.map(item => ({
                tx_id: item[0],
                rq_id: item[1],
                tx_descripcion: item[2],
                tx_datalle: item[3],
                tx_puntaje_min: item[4],
                tx_puntaje_max: item[5],
                tx_puntaje_asignado: item[6],
                tx_observacion: item[7]
            }));
            setData(transformedData);
        })
        .catch(error => {
            console.error("Hubo un error al recuperar los datos:", error);
        });
}, []);

  // const parametros = [
  //   {
  //     nombre: 'Calidad',
  //     descripcion: 'La calidad se refiere a la excelencia inherente de un producto o servicio.',
  //     puntajeMaximo: 5
  //   },
  //   {
  //     nombre: 'Eficiencia',
  //     descripcion: 'La eficiencia se refiere a la relación entre los recursos utilizados y los resultados obtenidos.',
  //     puntajeMaximo: 10
  //   },
  //   {
  //     nombre: 'Innovación',
  //     descripcion: 'La innovación se refiere a la introducción de nuevos métodos, ideas o productos.',
  //     puntajeMaximo: 7
  //   },
  //   {
  //     nombre: 'Responsabilidad Social',
  //     descripcion: 'La responsabilidad social se refiere a las obligaciones éticas y sociales de una organización.',
  //     puntajeMaximo: 4
  //   },
  //   {
  //     nombre: 'Calidad',
  //     descripcion: 'La calidad se refiere a la excelencia inherente de un producto o servicio.',
  //     puntajeMaximo: 5
  //   },
  //   {
  //     nombre: 'Eficiencia',
  //     descripcion: 'La eficiencia se refiere a la relación entre los recursos utilizados y los resultados obtenidos.',
  //     puntajeMaximo: 10
  //   },
  //   {
  //     nombre: 'Innovación',
  //     descripcion: 'La innovación se refiere a la introducción de nuevos métodos, ideas o productos.',
  //     puntajeMaximo: 7
  //   },
  //   {
  //     nombre: 'Responsabilidad Social',
  //     descripcion: 'La responsabilidad social se refiere a las obligaciones éticas y sociales de una organización.',
  //     puntajeMaximo: 4
  //   }
  // ];
  
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
          parametros={data}
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
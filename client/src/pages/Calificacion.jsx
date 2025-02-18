import React, { useState, useEffect } from "react";

import './styles.css';
import MenuRRHH from '../components/MenuRRHH';
import TopBar from '../components/TopBar';
import CustomComponentCali from '../components/CustomComponentCali'
import { useLocation } from 'react-router-dom';
//import { useAuth } from "../context/AuthContext";



const Calificacion = ({}) => {

  const [candidatos, setCandidatos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const canId = location.state?.id;
  console.log('hoplaaaaaaaaaaaa')
  console.log(canId)
  const [data, setData] = useState([]);
  const [candidato, setCandidato] = useState(null);
  console.log('aaaaaaaaaaaaaaaaaaaaaa')
  console.log(candidatos)



      useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/procesocontratacion/candidato')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener datos');
                }
                return response.json();
            })
            .then(data => {
                setCandidatos(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);
    

    const candidatoSeleccionado = candidatos.find(candidato => candidato[5] === canId);


  
   console.log(candidatoSeleccionado)
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
            console.log(data);
        })
        .catch(error => {
            console.error("Hubo un error al recuperar los datos:", error);
        });
}, []);

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
          candidato={candidatoSeleccionado}
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
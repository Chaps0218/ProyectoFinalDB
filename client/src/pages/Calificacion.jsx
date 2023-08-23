import React, { useState, useEffect } from "react";

import './styles.css';
import MenuRRHH from '../components/MenuRRHH';
import TopBar from '../components/TopBar';
import CustomComponentCali from '../components/CustomComponentCali'
//import { useAuth } from "../context/AuthContext";


const Calificacion = ({}) => {

  const candidatoCedula ="1752950863"
  const [data, setData] = useState([]);

  const [candidato, setCandidato] = useState(null);

  useEffect(() => {
          fetch(`http://127.0.0.1:8000/api/v1/procesocontratacion/candidato?cedula=${candidatoCedula}`)
              .then(response => response.json())
              .then(data => {
                  // asumo que la respuesta es un array y tomamos el primer objeto
                  const candidatoData = data[0];
                  setCandidato({
                      cedula: candidatoData[1],
                      genero: candidatoData[2],
                      titulo: candidatoData[3],
                      fechaNacimiento: candidatoData[4],
                      edad: candidatoData[5],
                      email: candidatoData[6],
                      passwordHash: candidatoData[7],
                      name1: candidatoData[8],
                      name2: candidatoData[9],
                      lastname1: candidatoData[10],
                      lastname2: candidatoData[11]
                  });
              })
              .catch(error => {
                  console.error("Error obteniendo datos del candidato:", error);
              });
  }, []);
  
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
          candidato={candidato}
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
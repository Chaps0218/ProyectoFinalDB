import React, { useContext, useEffect } from 'react';
import './styles.css';
import Menu from '../components/MenuCandidato';
import TopBar from '../components/TopBar';
import CustomComponentForm from '../components/CustomComponentForm'
import CustomComponent from '../components/CustomComponent'
import { FiUpload, FiFolder, FiUnlock, FiLock } from 'react-icons/fi';
import { useAuth } from "../context/AuthContext";

const Postulacion = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="parent-container">
      <div className="plataforma-container">
        <div className="top-item">
        <TopBar
          title="Seleccionar Postulación"
          ></TopBar>
        </div>
        <div className="left-item">
          <Menu
            title='Usuarios'
            subtitle1='Información del postulante'
            subtitle2='Seleccionar postulación'
            subtitle3='Formatos de Archivos'
            ></Menu>
        </div>
        <div className="right-item">
          <CustomComponentForm
          title="Seleccionar Postulación"
          ></CustomComponentForm>
        </div>
        <video className="background-video" autoPlay loop muted>
          <source src={require('../assets/inicio.mp4')} type="video/mp4" />
          Tu navegador no admite la reproducción de videos.
        </video>
      </div>
    </div>
  );
};

export default Postulacion;

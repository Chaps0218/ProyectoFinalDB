import React, { useContext } from 'react';
import './styles.css';
import Menu from '../components/MenuCandidato';
import TopBar from '../components/TopBar';
import Document from '../components/Document'
import DocumentsList from '../components/DocumentsList'
import { FiUnlock, FiLock } from 'react-icons/fi';

const Plataforma = () => {
  return (
    <div className="parent-container">
      <div className="plataforma-container">
        <div className="top-item">
          <TopBar>
          </TopBar>
        </div>
        <div className="left-item">
          <Menu
            title='Usuarios'
            subtitle1='Información del postulante'
            subtitle2='Seleccionar postulación'
            subtitle3='Formatos de Archivos'
            icon1={<FiUnlock />}
          ></Menu>
        </div>
        <div className="right-item">
          <DocumentsList title='Información de postulación'>
            <Document title='Hoja de vida formato ESPE' />
            <Document title='Copia de cédula' />
            <Document title='Certificado de votación' />
            <Document title='Certificado de registro de título' />
            <Document title='Experiencia De docente' />
            <Document title='Certificado de no tener impedimento de ejercer cargo público ' />
            <Document title='Certificado de no tener responsabilidades administrativas' />
            <Document title='Experiencia profesional' />
            <Document title='Holap' />
            <Document title='haolap' />
          </DocumentsList>
        </div>
        <video className="background-video" autoPlay loop muted>
          <source src={require('../assets/inicio.mp4')} type="video/mp4" />
          Tu navegador no admite la reproducción de videos.
        </video>
      </div>
    </div>
  );
};

export default Plataforma;

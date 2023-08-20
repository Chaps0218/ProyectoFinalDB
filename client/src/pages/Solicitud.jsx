import React from 'react';
import {Tabs, 
        Tab, 
        Card, 
        CardBody,
        } from "@nextui-org/react";

import styles from "../styles/Solicitud.module.css";
// import Boton from "../components/Boton.jsx"
import Tabla from "../components/Tabla.jsx"
import Actividad from "../components/CRUD/Actividad.jsx"
import CAmplio from "../components/CRUD/CAmplio.jsx"

const Solicitud = () => {

  return (
    <div className={styles.container}>


    <Tabs
      classNames={{
        tabList: styles.tabList,
        tab: styles.tab,
        tabContent: styles.tabContent,
        base: styles.base,
        panel: styles.panel,
      }} 
      aria-label="Options">

      <Tab key="candidato" title="Candidato">
        <Card>
          <CardBody>
            <Tabla/>
          </CardBody>
        </Card>  
      </Tab>
        
      <Tab key="actividad" title="Actividad">
        <Card>
          <CardBody>
           <Actividad/>
          </CardBody>
        </Card>  
      </Tab>

      <Tab key="campoAmplio" title="Campo Amplio">
        <Card>
          <CardBody>
            <CAmplio/>
          </CardBody>
        </Card>  
      </Tab>

      <Tab key="campoEspecifico" title="Campo Especifico">
        <Card>
          <CardBody>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </CardBody>
        </Card>  
      </Tab>

    </Tabs>

  </div>  
  );
};

export default Solicitud;

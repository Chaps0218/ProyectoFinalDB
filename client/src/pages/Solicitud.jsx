import React from 'react';
import {Tabs, 
        Tab, 
        Card, 
        CardBody,
        } from "@nextui-org/react";

import styles from "../styles/Solicitud.module.css";
// import Boton from "../components/Boton.jsx"
import Tabla from "../components/Tabla.jsx"

const Solicitud = () => {

  return (
    <div className={styles.container}>
{/* 
    <div className={styles.botonContainer}>
      <Boton text="Agregar" outlineColor="#004b23" fontColor="#004b23"
      onClick={() => {
        // Your custom click function here
        console.log("Button clicked!");
      }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="17" height="17" viewBox="0 0 24 24" stroke-width="1.5" stroke="#004b23" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </Boton>
    </div> */}

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
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </CardBody>
        </Card>  
      </Tab>

      <Tab key="campoAmplio" title="Campo Amplio">
        <Card>
          <CardBody>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

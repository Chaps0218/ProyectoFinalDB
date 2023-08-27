import React, { useState} from "react";
import { Input } from "@nextui-org/react";
import "./CustomComponentCali.css";
import PopupCalificacion from './PopupCalificacion';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Chip} from "@nextui-org/react";
import {AddNoteIcon} from "../assets/AddNoteIcon";  
import {EditDocumentIcon} from "../assets/EditDocumentIcon";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import axios from 'axios';


const CustomComponentCalificacion = ({ title, parametros, candidato }) => {

  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Item"]));

  const value = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
    
  return (
    <div className="custom-component-postulante">
      <h1 className="custom-title">{title}</h1>
      <hr className="custom-divider" />
      
      <div className="contenedorContratacion">
        <div className="etiquetas">
          <Chip color="success" className="mb-5" variant="bordered">Seleccionar item</Chip>

          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="bordered" 
              >
                {value}
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" 
            aria-label="Dropdown menu with description"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            >
              <DropdownItem
                key="Formacion"
                shortcut="⌘I"
                description="Formación del auxiliar 1"
                startContent={<AddNoteIcon className={iconClasses} />}
              >
                Formación
              </DropdownItem>

            </DropdownMenu>
          </Dropdown>

        </div>

        <div className="requisitos">
          
          <Card className="carta1">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Requisito 1</p>
              <p className="text-small text-default-500">Formación</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>Tener al menos grado académico de maestría reconocido y registrado por el Órgano
              Rector de la Política Pública de Educación Superior, en el campo amplio de reconocimiento
              vinculado a sus actividades de dodencia o investiación, o vinculación con la sociedad.
              La Universidad dará preferencia a los perfiles que tengan adicionalmente el título de
              grado con afinidad al campo amplio del conocimiento de su formación de cuarto nivel.
            </p>
          </CardBody>
          <Divider/>
          <CardFooter>
            <Button color="success" variant="bordered">
              Ver Detalle
            </Button> 
          </CardFooter>
          </Card>

          <Card className="carta">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Requisito 2</p>
              <p className="text-small text-default-500">Formación</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>Acreditar compotencia con nivel B1 o equivalente en una lengua diferente al castellano;
              en una lengua diferente al castellano; o haber obtenido su título académico de tercer o cuarto
              nivel en un país con una lengua diferente al castellano. Los idiomas ancestrales serán considerados
              como lengua diferente al castellano.
            </p>
          </CardBody>
          <Divider/>
          <CardFooter>
            <Button color="success" variant="bordered">
              Ver Detalle
            </Button> 
          </CardFooter>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default CustomComponentCalificacion;

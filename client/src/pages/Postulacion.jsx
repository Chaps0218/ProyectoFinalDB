import React, { useState } from "react";
import "../styles/usuarios.css";

// Estos son algunos datos de prueba para las listas desplegables
// Puedes cambiarlos según tus necesidades
const postulaciones = ["Postulación 1", "Postulación 2", "Postulación 3"];
const tiposDeContratacion = ["Contrato temporal", "Contrato indefinido", "Contrato por obra o servicio"];
const tiposDePersonalAcademico = ["Profesor titular", "Profesor asociado", "Profesor ayudante"];
const camposAmplios = ["Ciencias sociales", "Ciencias naturales", "Humanidades"];
const camposEspecificos = ["Economía", "Biología", "Filosofía"];
const sedes = ["Sede 1", "Sede 2", "Sede 3"];
const departamentos = ["Departamento 1", "Departamento 2", "Departamento 3"];

// Esta es la matriz de vacantes y tiempo
// Puedes modificarla según los datos que recuperes
const matriz = [
  { vacantes: 2, tiempo: "6 meses" },
  { vacantes: 3, tiempo: "12 meses" },
  { vacantes: 1, tiempo: "18 meses" },
];

// Esta es la función que se ejecuta al hacer clic en el botón enviar
// Puedes agregar la lógica que necesites para enviar los datos al servidor
const enviarDatos = () => {
  alert("Datos enviados");
};

// Este es el componente principal que renderiza la interfaz
const Interfaz = () => {
  // Estos son los estados que almacenan los valores de las listas desplegables
  const [postulacion, setPostulacion] = useState("");
  const [tipoDeContratacion, setTipoDeContratacion] = useState("");
  const [tipoDePersonalAcademico, setTipoDePersonalAcademico] = useState("");
  const [campoAmplio, setCampoAmplio] = useState("");
  const [campoEspecifico, setCampoEspecifico] = useState("");
  const [sede, setSede] = useState("");
  const [departamento, setDepartamento] = useState("");

  return (
    <div className="contenedor-principal" >
      <div className="contenedor-izquierdo">
        <h1>Usuario</h1>
        <hr/>
        <button><i className="fas fa-home"></i> Inicio</button>
        <button> <i className="fas fa-user"></i> Información del postulante</button>
        <button> <i className="fas fa-file-alt"></i> Seleccionar postulación</button>
        <button> <i className="fas fa-file"></i> Formato de archivos</button>
        <div className="cerrar-sesion-btn"><button>Cerrar sesión</button></div>
        
      </div>
      <div className="contenedor-derecho">
        <h1>Información de postulación</h1>
        <div className="info-contenedor">
           {/* Orden de los elementos ajustado */}
          <div className="fila">
            <div className="item">
              <span htmlFor="postulacion">Postulación:</span>
              <select
                id="postulacion"
                value={postulacion}
                onChange={(e) => setPostulacion(e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                {postulaciones.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div className="item">
              <span htmlFor="tipo-de-contratacion">Tipo de contratación:</span>
              <select
                id="tipo-de-contratacion"
                value={tipoDeContratacion}
                onChange={(e) => setTipoDeContratacion(e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                {tiposDeContratacion.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="fila">
            <div className="item">
              <span htmlFor="tipo-de-personal-academico">Tipo de personal académico:</span>
              <select
                id="tipo-de-personal-academico"
                value={tipoDePersonalAcademico}
                onChange={(e) => setTipoDePersonalAcademico(e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                {tiposDePersonalAcademico.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="item">
              <span htmlFor="campo-amplio">Campo amplio:</span>
              <select
                id="campo-amplio"
                value={campoAmplio}
                onChange={(e) => setCampoAmplio(e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                {camposAmplios.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="fila fila-3">
            <div className="item">
              <span htmlFor="campo-especifico">Campo específico:</span>
              <select
                id="campo-especifico"
                value={campoEspecifico}
                onChange={(e) => setCampoEspecifico(e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                {camposEspecificos.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="item">
              <span htmlFor="sede">Sede:</span>
              <select
                id="sede"
                value={sede}
                onChange={(e) => setSede(e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                {sedes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="item">
              <span htmlFor="departamento">Departamento:</span>
              <select
                id="departamento"
                value={departamento}
                onChange={(e) => setDepartamento(e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                {departamentos.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="matriz">
          <table>
            <thead>
              <tr>
                <th>Vacantes</th>
                <th>Tiempo</th>
              </tr>
            </thead>
            <tbody>
              {matriz.map((m, i) => (
                <tr key={i}>
                  <td>{m.vacantes}</td>
                  <td>{m.tiempo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={enviarDatos}>Enviar</button>
      </div>

     

    </div>
  );
};

export default Interfaz;


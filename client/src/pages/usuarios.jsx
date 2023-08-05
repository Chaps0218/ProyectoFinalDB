import React, { useState } from "react";

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
        <button>Inicio</button>
        <button>Información del postulante</button>
        <button>Seleccionar postulación</button>
        <button>Formato de archivos</button>
        <div className="cerrar-sesion-btn"><button>Cerrar sesión</button></div>
        
      </div>
      <div className="contenedor-derecho">
        <h1>Información de postulación</h1>
        <div className="info-contenedor">
           {/* Orden de los elementos ajustado */}
          <div className="fila">
            <div className="item">
              <label htmlFor="postulacion">Postulación:</label>
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
              <label htmlFor="tipo-de-contratacion">Tipo de contratación:</label>
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
              <label htmlFor="tipo-de-personal-academico">Tipo de personal académico:</label>
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
              <label htmlFor="campo-amplio">Campo amplio:</label>
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
              <label htmlFor="campo-especifico">Campo específico:</label>
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
              <label htmlFor="sede">Sede:</label>
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
              <label htmlFor="departamento">Departamento:</label>
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

      {/* Este es el código CSS para darle estilo a la interfaz */}
      {/* Puedes ajustarlo según tus preferencias */}
      {/* Lo he puesto aquí para que sea más fácil de ver, pero puedes separarlo en otro archivo */}
      <style jsx>{`
  /* Estilos para el cuerpo de la página */
  body {
    background-color: #f4ffe9;
    color: black;
    font-family: "Quattrocento", sans-serif; /* Fuente Quattrocento para los títulos */
  }

  /* Estilos para los contenedores */
  .contenedor-principal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 20px;
  }

  .contenedor-izquierdo {
    width: 20%;
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;
    padding: 20px;
    text-align: center; /* Alineamos el texto al centro */
    line-height: 1.5; /* Espaciado vertical dentro del contenedor izquierdo */
  }

  .contenedor-derecho {
    flex: 1;
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;
    padding: 20px;
    margin-left: 20px;
  }

  .matriz {
    background-color: #f4ffe9;
    border: 2px solid black;
    border-radius: 10px;
    margin-top: 20px;
    text-align: center;
  }

  .matriz table {
    border-collapse: collapse;
    width: 100%;
  }

  .matriz th,
  .matriz td {
    border: 1px solid black;
    padding: 10px;
  }

  .info-contenedor {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    justify-items: center; /* Centrar horizontalmente los elementos */
    align-items: center; /* Centrar verticalmente los elementos */
  }

  /* Estilos para los títulos <h1> */
  h1 {
    font-family: "Quattrocento", sans-serif; /* Fuente Quattrocento para los títulos */
    text-align: center; /* Alineamos el texto al centro */
    font-weight: bold;
  }

  /* Estilos para los select */
  select {
    margin: 10px 0;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    width: 100%; /* Puedes ajustar este valor para cambiar el ancho del select */
    max-width: 200px; /* Puedes ajustar este valor para limitar el ancho máximo */
    font-size: 14px; /* Puedes ajustar este valor para cambiar el tamaño del texto */
  }

  /* Nuevos estilos para los labels */
  label {
    display: block; /* Para que el label ocupe todo el ancho disponible y se muestre en una línea */
    font-weight: bold; /* Puedes ajustar el peso del texto si lo prefieres */
    margin-bottom: 5px; /* Espacio entre el label y el select */
  }

  /* Nuevos estilos para ajustar el espacio entre los elementos en la tercera fila */
  .fila-3 {
    grid-column: 1 / span 2; /* Hacemos que la tercera fila ocupe dos columnas para centrarse horizontalmente */
    display: flex; /* Utilizamos flexbox para alinear los elementos en una misma fila */
    justify-content: center; /* Centramos los elementos horizontalmente */
  }

  .fila-3 .item {
    flex: 1; /* Los elementos ocuparán el mismo espacio disponible en la fila */
    margin-right: 10px; /* Espacio entre los elementos */
  }

  .fila-3 .item:last-child {
    margin-right: 0; /* Eliminamos el margen derecho del último elemento para evitar espacio adicional */
  }

  /* Estilos para el botón "Cerrar sesión" */
  .contenedor-izquierdo .cerrar-sesion-btn {
    margin-top: 20px; /* Espacio superior para separar del contenido anterior */
    border: 2px solid black; /* Borde de color negro */
    border-radius: 5px; /* Bordes redondeados */
    padding: 5px 10px; /* Espaciado interno */
    font-size: 14px; /* Tamaño del texto */
  }

  /* Centramos el botón "Cerrar sesión" horizontalmente */
  .contenedor-izquierdo .cerrar-sesion-btn {
    display: block;
    margin: 0 auto;
  }

  /* Estilos para los botones dentro del contenedor-izquierdo */
  .contenedor-izquierdo button {
    margin-bottom: 10px; /* Espaciado vertical entre botones */
  }

  /* Estilos para la línea horizontal <hr> */
  hr {
    border: 2px solid black; /* Borde de color negro */
    margin-top: 20px; /* Espacio superior */
    margin-bottom: 20px; /* Espacio inferior */
    width: 100%; /* Ancho del hr al 100% del contenedor */
  }

  /* Agregamos estilos para el botón "Enviar" */
  .contenedor-derecho button {
    background-color: #ffffff;
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
    margin-top: 20px; /* Margen superior para separar del contenido anterior */
    margin-left: auto; /* Mueve el botón a la derecha */
    display: block;
  }

  /* Estilo para el botón "Enviar" al pasar el cursor */
  .contenedor-derecho button:hover {
    background-color: #e6e6e6;
  }

  /* Estilos para la versión responsive */
  @media (max-width: 768px) {
    .contenedor-principal {
      flex-direction: column;
      height: auto;
    }

    .contenedor-izquierdo,
    .contenedor-derecho {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }

    .contenedor-derecho {
      margin-top: 20px;
    }

    .info-contenedor {
      grid-template-columns: 1fr;
    }

    /* Alineamos el botón "Enviar" en el centro en dispositivos móviles */
    .contenedor-derecho button {
      margin-left: 0;
      margin-right: 0;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`}</style>

    </div>
  );
};

export default Interfaz;


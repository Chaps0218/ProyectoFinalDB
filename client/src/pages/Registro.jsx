import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './styles.css';
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Registro = () => {

  const [tipoIden, setTipoIden] = useState("cédula");
  const [identificacion, setIdentificacion] = useState("");
  const [sexo, setSexo] = useState("M");
  const [titulo, setTitulo] = useState('');
  const titulos = ['Ingeniero', 'Licenciado', 'Doctor', 'Magister', 'Bachiller'];

  const onCaptchaVerify = (response) => {
    console.log('Captcha verificado:', response);
  };
  
  const handleChange = (event) => {
    setTipoIden(event.target.value);
  };

  const handleChange1 = (event) => {
    setSexo(event.target.value);
  };

  const handleChange2 = (event) => {
    setTitulo(event.target.value);
  };
  const handleChange3 = (event) => {
    setIdentificacion(event.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { signup, isAutheticated, errors: registerErrors } = useAuth();
  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    signup(values);
  });

  useEffect(() => {
    if (isAutheticated) { navigate("/"); }
  }, [isAutheticated]);

  const [showFormulario2, setShowFormulario2] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    
    if (tipoIden === 'cédula') {
      console.log(identificacion);
      let var1 = identificacion.slice(0, 2);
      let var2 = identificacion.slice(2, 3);
    
      if (identificacion.length !== 10) {
        return alert('Cédula incorrecta: La cédula debe tener exactamente 10 caracteres.');
      } else if (isNaN(var1) || var1 < 1 || var1 > 24) {
        return alert('Cédula incorrecta: Los dos primeros dígitos deben estar entre 1 y 24.');
      } else if (isNaN(var2) || var2 < 6) {
        return alert('Cédula incorrecta: El tercer dígito debe ser mayor o igual a 6.');
      } else {
        // Si pasa todas las validaciones, la cédula es correcta
        // Aquí puedes hacer lo que necesites con la cédula válida
        setShowFormulario2(true);
      }
    }
  }
  
  return (
    <div className="login-container" >
      {!showFormulario2 && (
      <div className="login-form" id="login1">
        <h1>REGISTRO DE POSTULANTES A DOCENTES</h1>
        <select
          {...register("tipoIden", { required: true })}
          onChange={handleChange}
          value={tipoIden}
          placeholder="Tipo de Identificación"
        >
          <option value="cédula">Cédula</option>
          <option value="pasaporte">Pasaporte</option>
        </select>
        {errors.tipoIden && (
          <p className="text-red-500">El tipo de identificación es requerido</p>
        )}
        <input
          type="number"
          {...register("identificacion", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border m-3"
          placeholder={tipoIden === "cédula" ? "Cédula" : "Pasaporte"}
          inputMode="numeric"
          maxLength="10"
          onChange={handleChange3}
        />
        {errors.identificacion && (
          <p className="text-red-500">La Identificación es requerida</p>
        )}
        <div className="captcha-container">
          <ReCAPTCHA sitekey="6LdDDVonAAAAAJAr8uMJO4EhneySO80IqjF3Vt6x" onChange={onCaptchaVerify} />
        </div>
        <button type="submit" onClick={handleClick}>
          ENVIAR
        </button>
        <p onClick={() => window.location.href = '/login'}>Ir a Login</p>
      </div>
      )}
      {showFormulario2 && (
      <div className="form-container" id='login2'>
        <div className="form-box">
          <select
            {...register("sexo", { required: true })}
            placeholder="Sexo"
            onChange={handleChange1}
            value={sexo}
          >
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="O">Otro</option>
          </select>
          {errors.sexo && (
            <p className="text-red-500">El sexo es requerido</p>
          )}
          <select
            {...register("titulo", { required: true })}
            onChange={handleChange2}
            placeholder="Título"
          >
            {titulos.map((titulo, i) => (
              <option key={i} value={titulo}>{titulo}</option>
            ))}
          </select>
          {errors.titulo && (
            <p className="text-red-500">El título es requerido</p>
          )}
          <input
            type="text"
            {...register("nombre1", { required: true })}
            placeholder="Primer Nombre"
          />
          {errors.nombre1 && (
            <p className="text-red-500">El Primer Nombre es requerido</p>
          )}
          <input
            type="text"
            {...register("nombre2", { required: false })}
            placeholder="Segundo Nombre"
          />
          <input
            type="text"
            {...register("apellido1", { required: true })}
            placeholder="Primer Apellido"
          />
          {errors.apellido1 && (
            <p className="text-red-500">El Primer Apellido es requerido</p>
          )}
          <input
            type="text"
            {...register("apellido2", { required: true })}
            placeholder="Segundo Apellido"
          />
          {errors.apellido2 && (
            <p className="text-red-500">El Segundo Apellido es requerido</p>
          )}
          <input
            type="date"
            {...register("fecha_nacimiento", { required: true })}
            placeholder="Fecha de Nacimiento"
          />
          {errors.fecha_nacimiento && (
            <p className="text-red-500">La fecha de nacimiento es requerido</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">El correo es requerido</p>}
          <button type="submit" onClick={() => {window.location.href = '/login'; onSubmit();}}>ENVIAR</button>
        </div>
      </div>
      )}
    </div>
  );
};

export default Registro;

import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha'; // Importa el componente de reCAPTCHA
import './styles.css'; // Importa el archivo de estilos
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  // Función que maneja la acción cuando se valida el captcha
  const onCaptchaVerify = (response) => {
    console.log('Captcha verificado:', response);
    // Aquí puedes agregar tu lógica para enviar el formulario o realizar otras acciones
  };
  const [tipoIden, setTipoIden] = useState("cédula");
  const [sexo, setSexo] = useState("M");
  const [titulo, setTitulo] = useState('');
  const titulos = ['Ingeniero', 'Licenciado', 'Doctor', 'Magister', 'Bachiller'];

  const handleChange = (event) => {
    setTipoIden(event.target.value);
  };
  const handleChange1 = (event) => {
    setSexo(event.target.value);
  };
  const handleChange2 = (event) => {
    setTitulo(event.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { signup, isAutheticated, errors: registerErrors } = useAuth();
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  useEffect(() => {
    if (isAutheticated) { navigate("/"); }
  }, [isAutheticated]);

  function handleClick(e) {
    e.preventDefault();
    const login = document.getElementById('login1');
    login.classList.add('display-none');
    const login2 = document.getElementById('login2');
    login2.classList.remove('display-none');
  }

  return (
    <div className="login-container" >
      <div className="login-form" id="login1">
        <h1>REGISTRO DE POSTULANTES A DOCENTES</h1>
        <select
          {...register("tipoIden", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border m-3"
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
          placeholder={tipoIden === "cédula" ? "Cédula" : "Pasaporte"
          }
          inputMode="numeric"
          maxLength="10"
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
        <p onClick={() => window.location.href = '/login2'}>Ir a Login</p>
      </div>
      <div className="form-container display-none" id='login2'>
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
    </div>
  );
};

export default Registro;

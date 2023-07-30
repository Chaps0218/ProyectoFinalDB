import React from 'react';
import './styles.css';

const Formulario = () => {
  return (
    <div className="form-container">
      <div className="form-box">
        <h1>FORMULARIO DE ADMISIÓN PARA DOCENTES</h1>
        <div className="form-row">
          <div className="form-column">
            <label>Nombres Completos</label>
            <input type="text" placeholder="NOMBRE1  NOMBRE2  APELLIDO1  APELLIDO2" />
          </div>
          <div className="form-column">
            <div className="cedula">
            <label>Tipo de identificación</label>
            <select>
              <option value="cedula">Cédula</option>
              <option value="pasaporte">Pasaporte</option>
            </select>
            </div>
          </div>
        </div>

        <label>Número de identificación</label>
        <input type="text" placeholder="1104520281" />

        <label>Selecciona tu título de SENESCYT</label>
        <select>
          <option value="magister1">MAGISTER 1</option>
          <option value="PHD">PHD</option>
          <option value="lic">LICENCIADO</option>
          <option value="ing">INGENIERO</option>
        </select>

        <label>Sexo</label>
        <select>
          <option value="masculino">MASCULINO</option>
          <option value="femenino">FEMENINO</option>
          <option value="otros">OTROS</option>
        </select>

        <label>Email</label>
        <input type="text" placeholder="dsaavedra@gmail.com" />

        <label>Contraseña</label>
        <input type="password" />

        <p>Utilizar solo cuentas de gmail, hotmail, outlook.</p>
        <button type="submit" onClick={() => window.location.href = '/login'}>ENVIAR</button>
      </div>
    </div>
  );
};

export default Formulario;

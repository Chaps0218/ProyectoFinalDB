import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha'; // Importa el componente de reCAPTCHA
import './styles.css'; // Importa el archivo de estilos

const Registro = () => {
  // Función que maneja la acción cuando se valida el captcha
  const onCaptchaVerify = (response) => {
    console.log('Captcha verificado:', response);
    // Aquí puedes agregar tu lógica para enviar el formulario o realizar otras acciones
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>REGISTRO DE POSTULANTES A DOCENTES</h1>
        <label>CÉDULA DE IDENTIDAD</label>
        <input type="text" />
        <div className="captcha-container">
            <ReCAPTCHA
                sitekey="6LdDDVonAAAAAJAr8uMJO4EhneySO80IqjF3Vt6x"
                //onChange={(value) => console.log('Captcha value:', value)}
                onChange={onCaptchaVerify}
            />
        </div>
        <button type="submit" 
            onClick={() => window.location.href = '/formulario'}>
                ENVIAR
        </button>
        <p onClick={() => window.location.href = '/login'}>Ir a Login</p>
      </div>
    </div>
  );
};

export default Registro;

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Popup from "../components/Popup";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {setShowPopup(true);}

  }, [isAuthenticated]);
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/profile");
  };

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="bg-zinc-600 max-w-md w-full p-10 rounded-md">
        {registerErrors.map((error, i) => (
          <div key={i} className="bg-red-500 p-2 text-white">
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border m-3 "
            placeholder="Correo"
          />
          {errors.email && (
            <p className="text-red-500">El correo es requerido</p>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border m-3"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}
          <button type="submit">Login</button>
        </form>
        <p className="flex gap-x-2 justify-between mt-3">
          No tienes una cuenta<Link to="/register" className=" text-sky-500">Registrarse</Link>
        </p>
        {showPopup && (
          <Popup
            mensaje="Tu información será manipulada conforme a la necesidad de la institución sin lugar a reclamos, conforme a la ley de protección de datos, etc."
            ruta="/plataforma" // Aquí pasa la ruta que desees redireccionar desde el componente Login
            onClose={handleClosePopup}
          />
        )}
      </div>

    </div>
  );
};

export default Login;

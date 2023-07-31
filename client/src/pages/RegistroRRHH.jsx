import React from 'react';
import './styles.css';
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegistroRRHH = () => {

    const [cargo, setCargo] = useState('');
    const cargos = ['Ingeniero', 'Licenciado', 'Doctor', 'Magister', 'Bachiller'];

    const handleChange2 = (event) => {
        setCargo(event.target.value);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const { signuprrhh, isAutheticated, errors: registerErrors } = useAuth();
    const onSubmit = handleSubmit(async (values) => {
        await signuprrhh(values); 
    });

    useEffect(() => {
        if (isAutheticated) { navigate("/"); }
    }, [isAutheticated]);

    return (
        <div className="login-container" >
            <div className="form-container" id='login2'>
                <div className="form-box">
                    {registerErrors.map((error, i) => (
                        <div key={i} className="bg-red-500 p-2 text-white">
                            {error}
                        </div>
                    ))}
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Email"
                    />
                    {errors.email && <p className="text-red-500">El correo es requerido</p>}
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border m-3"
                        placeholder="Contraseña"
                    />
                    {errors.password && (
                        <p className="text-red-500">La contraseña es requerida</p>
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
                    <select
                        {...register("cargo", { required: true })}
                        onChange={handleChange2}
                        placeholder="Título"
                    >
                        {cargos.map((cargo, i) => (
                            <option key={i} value={cargo}>{cargo}</option>
                        ))}
                    </select>
                    {errors.cargo && (
                        <p className="text-red-500">El cargo es requerido</p>
                    )}
                    <button type="submit" onClick={() => { onSubmit();}}>ENVIAR</button>
                </div>
            </div>
        </div>
    );
};

export default RegistroRRHH;
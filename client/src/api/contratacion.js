import axios from "axios";

const API = "http://localhost:8800/api";

export const extraerOferta = () => axios.get(`${API}/oferta`, {
    withCredentials: true,
});

export const extraerContrato = () => axios.get(`${API}/contrato`, {
    withCredentials: true,
});

export const extraerTipoContrato = () => axios.get(`${API}/tipo_contrato`, {
    withCredentials: true,
});

export const extraerPersonalAcademico = () => axios.get(`${API}/personal_academico`, {
    withCredentials: true,
});

export const extraercampoAmplio = () => axios.get(`${API}/campo_amplio`, {
    withCredentials: true,
});

export const extraercampoEspecifico = () => axios.get(`${API}/campo_especifico`, {
    withCredentials: true,
});

export const extraerSede = () => axios.get(`${API}/sede`, {
    withCredentials: true,
});

export const extraerDepartamento = () => axios.get(`${API}/departamento`, {
    withCredentials: true,
});

export const extraerActividad = () => axios.get(`${API}/actividad`, {
    withCredentials: true,
});

export const agregarActividad = (actividad) => axios.post(`${API}/actividad`, actividad, {
    withCredentials: true,
});

export const editarActividad = (id, actividad) => {axios.put(`${API}/actividad/${id}`, actividad, {
    withCredentials: true,
}); console.log(id, actividad)}
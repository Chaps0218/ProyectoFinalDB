import axios from "axios";
import jwt from "jsonwebtoken";
import { api } from "../apiroute.js";


export const extraerInfoProcesoCandidato = async (req, res) => {
    const pa_id = req.params.pa_id; // Suponiendo que el pa_id se pasa como parte de la URL

    try {
        const response = await axios.get(`${API}/extraerInfoProcesoCandidato/${pa_id}`);
        return res.json(response.data);
    } catch (error) {
        console.error('Error al obtener titulo_exp:', error);
        return res.status(500).json({ message: 'Error al obtener los datos de titulo_exp' });
    }
}



export const extraerTituloExpPorPaId = async (req, res) => {
    const pa_id = req.params.pa_id; // Suponiendo que el pa_id se pasa como parte de la URL

    try {
        const response = await axios.get(`${API}/titulo_exp_por_pa_id/${pa_id}`);
        return res.json(response.data);
    } catch (error) {
        console.error('Error al obtener titulo_exp:', error);
        return res.status(500).json({ message: 'Error al obtener los datos de titulo_exp' });
    }
}

export const extraerSolicitud = async (req, res) => {
    try {
        const response = await axios.get(`${api}/solicitud/`);
        return res.json(response.data);
    } catch (error) {
        console.error('Error al obtener solicitud:', error);
        return res.status(500).json({ message: 'Error al obtener la solicitud' });
    }
}

export const extraerOferta = async (req, res) => {
    try {
        const response = await axios.get(`${api}/oferta/`);
        const oferta = response.data;
        return res.json({ oferta });
    } catch (error) {
        console.error('Error al obtener oferta:', error);
        return res.status(500).json({ message: 'Error al obtener la oferta' });
    }
}

export const agregarOferta = async (req, res) => {
    try {
        const response = await axios.post(`${api}/oferta/`, req.body);
        const oferta = response.data;
        return res.json({ oferta });
    } catch (error) {
        console.error('Error al agregar oferta:', error);
        return res.status(500).json({ message: 'Error al agregar la oferta' });
    }
}

export const editarOferta = async (req, res) => {
    try {
        const response = await axios.put(`${api}/oferta/${req.params.id}`, req.body);
        const oferta = response.data;
        return res.json({ oferta });
    } catch (error) {
        console.error('Error al editar oferta:', error);
        return res.status(500).json({ message: 'Error al editar la oferta' });
    }
}

export const eliminarOferta = async (req, res) => {
    try {
        const response = await axios.delete(`${api}/oferta/${req.params.id}`);
        const oferta = response.data;
        return res.json({ oferta });
    } catch (error) {
        console.error('Error al eliminar oferta:', error);
        return res.status(500).json({ message: 'Error al eliminar la oferta' });
    }
}

export const extraerContrato = async (req, res) => {
    try {
        const response = await axios.get(`${api}/postulacion/`);
        const contrato = response.data;
        return res.json({ contrato });

    } catch (error) {
        console.error('Error al obtener contrato:', error);
        return res.status(500).json({ message: 'Error al obtener contrato' });
    }
}

export const agregarContrato = async (req, res) => {
    try {
        const response = await axios.post(`${api}/postulacion/`, req.body);
        const contrato = response.data;
        return res.json({ contrato });
    } catch (error) {
        console.error('Error al agregar contrato:', error);
        return res.status(500).json({ message: 'Error al agregar contrato' });
    }
}

export const editarContrato = async (req, res) => {
    try {
        const response = await axios.put(`${api}/postulacion/${req.params.id}`, req.body);
        const contrato = response.data;
        return res.json({ contrato });
    } catch (error) {
        console.error('Error al editar contrato:', error);
        return res.status(500).json({ message: 'Error al editar contrato' });
    }
}

export const eliminarContrato = async (req, res) => {
    try {
        const response = await axios.delete(`${api}/postulacion/${req.params.id}`);
        const contrato = response.data;
        return res.json({ contrato });
    } catch (error) {
        console.error('Error al eliminar contrato:', error);
        return res.status(500).json({ message: 'Error al eliminar contrato' });
    }
}

export const extraerTipoContrato = async (req, res) => {
    try {
        const response = await axios.get(`${api}/contratacion/`);
        const tipoContrato = response.data;
        return res.json({ tipoContrato });
    } catch (error) {
        console.error('Error al obtener tipo contrato:', error);
        return res.status(500).json({ message: 'Error al obtener tipo contrato' });
    }
}

export const agregarTipoContrato = async (req, res) => {
    try {
        const response = await axios.post(`${api}/contratacion/`, req.body);
        const tipoContrato = response.data;
        return res.json({ tipoContrato });
    } catch (error) {
        console.error('Error al agregar tipo contrato:', error);
        return res.status(500).json({ message: 'Error al agregar tipo contrato' });
    }
}

export const editarTipoContrato = async (req, res) => {
    try {
        const response = await axios.put(`${api}/contratacion/${req.params.id}`, req.body);
        const tipoContrato = response.data;
        return res.json({ tipoContrato });
    } catch (error) {
        console.error('Error al editar tipo contrato:', error);
        return res.status(500).json({ message: 'Error al editar tipo contrato' });
    }
}

export const eliminarTipoContrato = async (req, res) => {
    try {
        const response = await axios.delete(`${api}/contratacion/${req.params.id}`);
        const tipoContrato = response.data;
        return res.json({ tipoContrato });
    } catch (error) {
        console.error('Error al eliminar tipo contrato:', error);
        return res.status(500).json({ message: 'Error al eliminar tipo contrato' });
    }
}

export const extraerPersonalAcademico = async (req, res) => {
    try {
        const response = await axios.get(`${api}/personal_academico/`);
        const personalAcademico = response.data;
        return res.json({ personalAcademico });
    } catch (error) {
        console.error('Error al obtener personal academico:', error);
        return res.status(500).json({ message: 'Error al obtener extraer personal academico' });
    }
}

export const agregarPersonalAcademico = async (req, res) => {
    try {
        const response = await axios.post(`${api}/personal_academico/`, req.body);
        const personalAcademico = response.data;
        return res.json({ personalAcademico });
    } catch (error) {
        console.error('Error al agregar personal academico:', error);
        return res.status(500).json({ message: 'Error al agregar personal academico' });
    }
}

export const editarPersonalAcademico = async (req, res) => {
    try {
        const response = await axios.put(`${api}/personal_academico/${req.params.id}`, req.body);
        const personalAcademico = response.data;
        return res.json({ personalAcademico });
    } catch (error) {
        console.error('Error al editar personal academico:', error);
        return res.status(500).json({ message: 'Error al editar personal academico' });
    }
}

export const eliminarPersonalAcademico = async (req, res) => {
    try {
        const response = await axios.delete(`${api}/personal_academico/${req.params.id}`);
        const personalAcademico = response.data;
        return res.json({ personalAcademico });
    } catch (error) {
        console.error('Error al eliminar personal academico:', error);
        return res.status(500).json({ message: 'Error al eliminar personal academico' });
    }
}

export const extraercampoAmplio = async (req, res) => {
    try {
        const response = await axios.get(`${api}/campo_amplio/`);
        const campoAmplio = response.data;
        return res.json({ campoAmplio });
    } catch (error) {
        console.error('Error al obtener campo amplio:', error);
        return res.status(500).json({ message: 'Error al obtener campo amplio' });
    }
}

export const agregarcampoAmplio = async (req, res) => {
    try {
        const response = await axios.post(`${api}/campo_amplio/`, req.body);
        const campoAmplio = response.data;
        return res.json({ campoAmplio });
    } catch (error) {
        console.error('Error al agregar campo amplio:', error);
        return res.status(500).json({ message: 'Error al agregar campo amplio' });
    }
}

export const editarcampoAmplio = async (req, res) => {
    try {
        const response = await axios.put(`${api}/campo_amplio/${req.params.id}`, req.body);
        const campoAmplio = response.data;
        return res.json({ campoAmplio });
    } catch (error) {
        console.error('Error al editar campo amplio:', error);
        return res.status(500).json({ message: 'Error al editar campo amplio' });
    }
}

export const eliminarcampoAmplio = async (req, res) => {
    try {
        const response = await axios.delete(`${api}/campo_amplio/${req.params.id}`);
        const campoAmplio = response.data;
        return res.json({ campoAmplio });
    } catch (error) {
        console.error('Error al eliminar campo amplio:', error);
        return res.status(500).json({ message: 'Error al eliminar campo amplio' });
    }
}

export const extraercampoEspecifico = async (req, res) => {
    try {
        const response = await axios.get(`${api}/campo_especifico/`);
        const campoEspecifico = response.data;
        return res.json({ campoEspecifico });
    } catch (error) {
        console.error('Error al obtener campo especifico:', error);
        return res.status(500).json({ message: 'Error al obtener campo especifico' });
    }
}

export const agregarcampoEspecifico = async (req, res) => {
    try {
        const response = await axios.post(`${api}/campo_especifico/`, req.body);
        const campoEspecifico = response.data;
        return res.json({ campoEspecifico });
    } catch (error) {
        console.error('Error al agregar campo especifico:', error);
        return res.status(500).json({ message: 'Error al agregar campo especifico' });
    }
}

export const editarcampoEspecifico = async (req, res) => {
    try {
        const response = await axios.put(`${api}/campo_especifico/${req.params.id}`, req.body);
        const campoEspecifico = response.data;
        return res.json({ campoEspecifico });
    } catch (error) {
        console.error('Error al editar campo especifico:', error);
        return res.status(500).json({ message: 'Error al editar campo especifico' });
    }
}

export const eliminarcampoEspecifico = async (req, res) => {
    try {
        const response = await axios.delete(`${api}/campo_especifico/${req.params.id}`);
        const campoEspecifico = response.data;
        return res.json({ campoEspecifico });
    } catch (error) {
        console.error('Error al eliminar campo especifico:', error);
        return res.status(500).json({ message: 'Error al eliminar campo especifico' });
    }
}

export const extraerSede = async (req, res) => {
    try {
        const response = await axios.get(`${api}/sede/`);
        const sede = response.data;
        return res.json({ sede });
    } catch (error) {
        console.error('Error al obtener sede:', error);
        return res.status(500).json({ message: 'Error al obtener sede' });
    }
}

export const agregarSede = async (req, res) => {
    try {
        const response = await axios.post(`${api}/sede/`, req.body);
        const sede = response.data;
        return res.json({ sede });
    } catch (error) {
        console.error('Error al agregar sede:', error);
        return res.status(500).json({ message: 'Error al agregar sede' });
    }
}

export const editarSede = async (req, res) => {
    try {
        const response = await axios.put(`${api}/sede/${req.params.id}`, req.body);
        const sede = response.data;
        return res.json({ sede });
    } catch (error) {
        console.error('Error al editar sede:', error);
        return res.status(500).json({ message: 'Error al editar sede' });
    }
}

export const eliminarSede = async (req, res) => {
    try {
        const response = await axios.delete(`${api}/sede/${req.params.id}`);
        const sede = response.data;
        return res.json({ sede });
    } catch (error) {
        console.error('Error al eliminar sede:', error);
        return res.status(500).json({ message: 'Error al eliminar sede' });
    }
}

export const extraerDepartamento = async (req, res) => {
    try {
        const response = await axios.get(`${api}/departamento/`);
        const departamento = response.data;
        return res.json({ departamento });
    } catch (error) {
        console.error('Error al obtener departamento:', error);
        return res.status(500).json({ message: 'Error al obtener departamento' });
    }
}

export const agregarDepartamento = async (req, res) => {
    try {
        const response = await axios.post(`${api}/departamento/`, req.body);
        const departamento = response.data;
        return res.json({ departamento });
    } catch (error) {
        console.error('Error al agregar departamento:', error);
        return res.status(500).json({ message: 'Error al agregar departamento' });
    }
}

export const editarDepartamento = async (req, res) => {
    try {
        const response = await axios.put(`${api}/departamento/${req.params.id}`, req.body);
        const departamento = response.data;
        return res.json({ departamento });
    } catch (error) {
        console.error('Error al editar departamento:', error);
        return res.status(500).json({ message: 'Error al editar departamento' });
    }
}

export const eliminarDepartamento = async (req, res) => {
    try {
        const response = await axios.delete(`${api}/departamento/${req.params.id}`);
        const departamento = response.data;
        return res.json({ departamento });
    } catch (error) {
        console.error('Error al eliminar departamento:', error);
        return res.status(500).json({ message: 'Error al eliminar departamento' });
    }
}

export const extraerActividad = async (req, res) => {
    try {
        const response = await axios.get(`${api}/actividad/`);
        const actividad = response.data;
        return res.json({ actividad });
    } catch (error) {
        console.error('Error al obtener actividad:', error);
        return res.status(500).json({ message: 'Error al obtener actividad' });
    }
}

export const agregarActividad = async (req, res) => {
    try {
        const response = await axios.post(`${api}/actividad/`, req.body);
        const actividad = response.data;
        return res.json({ actividad });
    } catch (error) {
        console.error('Error al agregar actividad:', error);
        return res.status(500).json({ message: 'Error al agregar actividad' });
    }
}

export const editarActividad = async (req, res) => {
    try {
        console.log(req.body)
        const response = await axios.put(`${api}/actividad/${req.body.act_id}`, req.body);
        const actividad = response.data;
        return res.json({ actividad });
    } catch (error) {
        console.error('Error al editar actividad:', error);
        return res.status(500).json({ message: 'Error al editar actividad' });
    }
}

export const eliminarActividad = async (req, res) => {
    try {
        const response = await axios.delete(`${api}/actividad/${req.params.id}`);
        const actividad = response.data;
        return res.json({ actividad });
    } catch (error) {
        console.error('Error al eliminar actividad:', error);
        return res.status(500).json({ message: 'Error al eliminar actividad' });
    }
}
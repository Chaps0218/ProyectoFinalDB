import axios from "axios";
import jwt from "jsonwebtoken";
import { api } from "../apiroute.js";


export const extraerOferta = async(req,res) =>{
  try {
    const response = await axios.get(`${api}/oferta/`);
    const oferta = response.data;
    return res.json({oferta});
  } catch (error) {
    console.error('Error al obtener oferta:', error);
    return res.status(500).json({message: 'Error al obtener la oferta'});
  }

}

export const extraerContrato = async(req,res) =>{
    try {
        const response = await axios.get(`${api}/postulacion/`);
        const contrato = response.data;
        return res.json({contrato});

    } catch (error) {
        console.error('Error al obtener contrato:', error);
        return res.status(500).json({message: 'Error al obtener contrato'});
    }
}

export const extraerTipoContrato = async(req,res) =>{
    try {
        const response = await axios.get(`${api}/contratacion/`);
        const tipoContrato = response.data;
        return res.json({tipoContrato});
    } catch (error) {
        console.error('Error al obtener tipo contrato:', error);
        return res.status(500).json({message: 'Error al obtener tipo contrato'});
    }
}

export const extraerPersonalAcademico = async(req,res) =>{
    try {
        const response = await axios.get(`${api}/personal_academico/`);
        const personalAcademico = response.data;
        return res.json({personalAcademico});
    } catch (error) {
        console.error('Error al obtener personal academico:', error);
        return res.status(500).json({message: 'Error al obtener extraer personal academico'});
    }
}

export const extraercampoAmplio = async(req,res) =>{
    try {
        const response = await axios.get(`${api}/campo_amplio/`);
        const campoAmplio = response.data;
        return res.json({campoAmplio});
    } catch (error) {
        console.error('Error al obtener campo amplio:', error);
        return res.status(500).json({message: 'Error al obtener campo amplio'});
    }
}

export const extraercampoEspecifico = async(req,res) =>{
    try {
        const response = await axios.get(`${api}/campo_especifico/`);
        const campoEspecifico = response.data;
        return res.json({campoEspecifico});
    } catch (error) {
        console.error('Error al obtener campo especifico:', error);
        return res.status(500).json({message: 'Error al obtener campo especifico'});
    }
}   

export const extraerSede = async(req,res) =>{
    try {
        const response = await axios.get(`${api}/sede/`);
        const sede = response.data;
        return res.json({sede});
    } catch (error) {
        console.error('Error al obtener sede:', error);
        return res.status(500).json({message: 'Error al obtener sede'});
    }
}

export const extraerDepartamento = async(req,res) =>{
    try {
        const response = await axios.get(`${api}/departamento/`);
        const departamento = response.data;
        return res.json({departamento});
    } catch (error) {
        console.error('Error al obtener departamento:', error);
        return res.status(500).json({message: 'Error al obtener departamento'});
    }
}

export const extraerActividad = async(req,res) =>{
    try {
        const response = await axios.get(`${api}/actividad/`);
        const actividad = response.data;
        return res.json({actividad});
    } catch (error) {
        console.error('Error al obtener actividad:', error);
        return res.status(500).json({message: 'Error al obtener actividad'});
    }
}

export const agregarActividad = async(req,res) =>{
    try {
        const response = await axios.post(`${api}/actividad/`, req.body);
        const actividad = response.data;
        return res.json({actividad});
    } catch (error) {
        console.error('Error al agregar actividad:', error);
        return res.status(500).json({message: 'Error al agregar actividad'});
    }
}

export const editarActividad = async(req,res) =>{
    try {
        console.log(req.body)
        const response = await axios.put(`${api}/actividad/${req.body.act_id}`, req.body);
        const actividad = response.data;
        return res.json({actividad});
    } catch (error) {
        console.error('Error al editar actividad:', error);
        return res.status(500).json({message: 'Error al editar actividad'});
    }
}
import { Router } from "express";
import {
    extraerOferta,
    agregarOferta,
    editarOferta,
    eliminarOferta,
    extraerContrato,
    agregarContrato,
    editarContrato,
    eliminarContrato,
    extraerTipoContrato,
    agregarTipoContrato,
    editarTipoContrato,
    eliminarTipoContrato,
    extraerPersonalAcademico,
    agregarPersonalAcademico,
    editarPersonalAcademico,
    eliminarPersonalAcademico,
    extraercampoAmplio,
    agregarcampoAmplio,
    editarcampoAmplio,
    eliminarcampoAmplio,
    extraercampoEspecifico,
    agregarcampoEspecifico,
    editarcampoEspecifico,
    eliminarcampoEspecifico,
    extraerSede,
    agregarSede,
    editarSede,
    eliminarSede,
    extraerDepartamento,
    agregarDepartamento,
    editarDepartamento,
    eliminarDepartamento,
    extraerActividad,
    agregarActividad,
    editarActividad,
    eliminarActividad,
    extraerSolicitud,
    agregarSolicitud,
    editarSolicitud,
    eliminarSolicitud,
}
    from "../controllers/procesopostulacion.controller.js";

const router = Router();

router.get("/oferta", extraerOferta);
router.post("/oferta", agregarOferta);
router.put("/oferta/:id", editarOferta);
router.delete("/oferta/:id", eliminarOferta);
router.get("/contrato", extraerContrato);
router.post("/contrato", agregarContrato);
router.put("/contrato/:id", editarContrato);
router.delete("/contrato/:id", eliminarContrato);
router.get("/tipo_contrato", extraerTipoContrato);
router.post("/tipo_contrato", agregarTipoContrato);
router.put("/tipo_contrato/:id", editarTipoContrato);
router.delete("/tipo_contrato/:id", eliminarTipoContrato);
router.get("/personal_academico", extraerPersonalAcademico);
router.post("/personal_academico", agregarPersonalAcademico);
router.put("/personal_academico/:id", editarPersonalAcademico);
router.delete("/personal_academico/:id", eliminarPersonalAcademico);
router.get("/campo_amplio", extraercampoAmplio);
router.post("/campo_amplio", agregarcampoAmplio);
router.put("/campo_amplio/:id", editarcampoAmplio);
router.delete("/campo_amplio/:id", eliminarcampoAmplio);
router.get("/campo_especifico", extraercampoEspecifico);
router.post("/campo_especifico", agregarcampoEspecifico);
router.put("/campo_especifico/:id", editarcampoEspecifico);
router.delete("/campo_especifico/:id", eliminarcampoEspecifico);
router.get("/sede", extraerSede);
router.post("/sede", agregarSede);
router.put("/sede/:id", editarSede);
router.delete("/sede/:id", eliminarSede);
router.get("/departamento", extraerDepartamento);
router.post("/departamento", agregarDepartamento);
router.put("/departamento/:id", editarDepartamento);
router.delete("/departamento/:id", eliminarDepartamento);
router.get("/actividad", extraerActividad);
router.post("/actividad", agregarActividad);
router.put("/actividad/:id", editarActividad);
router.delete("/actividad/:id", eliminarActividad);
router.get("/solicitud", extraerSolicitud);
router.post("/solicitud", agregarSolicitud);
router.put("/solicitud/:id", editarSolicitud);
router.delete("/solicitud/:id", eliminarSolicitud);

export default router;
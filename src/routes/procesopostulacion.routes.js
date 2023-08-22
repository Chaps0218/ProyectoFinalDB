import { Router } from "express";
import {
    extraerOferta,
    extraerContrato,
    extraerTipoContrato,
    extraerPersonalAcademico,
    extraercampoAmplio,
    extraercampoEspecifico,
    extraerSede,
    extraerDepartamento,
    extraerActividad,
    agregarActividad,
    editarActividad,
}
    from "../controllers/procesopostulacion.controller.js";

const router = Router();

router.get("/oferta", extraerOferta);
router.get("/contrato", extraerContrato);
router.get("/tipo_contrato", extraerTipoContrato);
router.get("/personal_academico", extraerPersonalAcademico);
router.get("/campo_amplio", extraercampoAmplio);
router.get("/campo_especifico", extraercampoEspecifico);
router.get("/sede", extraerSede);
router.get("/departamento", extraerDepartamento);
router.get("/actividad", extraerActividad);
router.post("/actividad", agregarActividad);
router.put("/actividad/:id", editarActividad);

export default router;



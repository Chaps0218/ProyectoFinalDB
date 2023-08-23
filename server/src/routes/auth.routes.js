import { Router } from "express";
import {
  login,
  register,
  registerRRHH,
  logout,
  profile,
  verifyToken,
  getUsuarios,
  editarCandidato,
} from "../controllers/auth.controller.js";
//Uso de la fución que valida el acceso a ciertas páginas
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema} from "../middlewares/validator.middleware.js"
import { registerSchema, loginSchema, registerSchemaRRHH } from "../schemas/auth.schema.js";
const router = Router();
//End point de autoización 
router.post("/register",validateSchema(registerSchema), register);
router.post("/registerRRHH",validateSchema(registerSchemaRRHH), registerRRHH);
router.post("/login",validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/usuarios", getUsuarios);
router.put("/usuarios/:id", editarCandidato);
//Ruta protegida con el authRequired
router.get("/profile", authRequired, profile);
//Verificacion de token
router.get("/verify",verifyToken)
export default router;

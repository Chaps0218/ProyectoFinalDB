from typing import Optional
from pydantic import BaseModel

class actividad(BaseModel):
    act_id: Optional[int] = None
    act_nombre: str
    act_descripcion: str

class campo_amplio(BaseModel):
    ca_id: Optional[int] = None
    ca_nombre: str
    ca_descripcion: str

class campo_especifico(BaseModel):
    ce_id: Optional[int] = None
    ce_nombre: str
    ce_descripcion: str
    ca_id: int

class candidato(BaseModel):
    cand_tipo_identificaccion: str
    cand_num_identificacion: str
    cand_sexo: str
    cand_titulo: str
    cand_fecha_nacimiento: str
    cand_id: Optional[int] = None
    cand_correo: str
    cand_password: str
    cand_nombre1: str
    cand_nombre2: str
    cand_apellido1: str
    cand_apellido2: str

class contratacion(BaseModel):
    con_id: Optional[int] = None
    con_nombre: str

class departamento(BaseModel):
    dept_id: Optional[int] = None
    dept_nombre: str
    dept_descripcion: str

class item(BaseModel):
    it_id: Optional[int] = None
    pa_id: str
    it_nombre: str

class oferta(BaseModel):
    ofe_id: Optional[int] = None
    post_id: int
    con_id: int
    ce_id: int
    ca_id: int
    sede_id: int
    dept_id: int
    pa_id: int
    act_id: int
    ofe_vacantes: int
    ofe_horas: int

class personal_academico(BaseModel):
    pa_id: Optional[int] = None
    pa_nombre: str
    pa_descripcion: str

class postulacion(BaseModel):
    post_id: Optional[int] = None
    post_periodo: str

class rechum(BaseModel):
    rh_cargo: str
    rh_id: Optional[int] = None
    rh_correo: str
    rh_password: str
    rh_nombre1: str
    rh_nombre2: str
    rh_apellido1: str
    rh_apellido2: str

class requisito(BaseModel):
    rq_id: Optional[int] = None
    it_id: int
    rq_descripcion: str

class sede(BaseModel):
    sede_id: Optional[int] = None
    sede_nombre: str
    sede_descripcion: str

class solicitud(BaseModel):
    cand_id: int
    sol_id: Optional[int] = None
    rh_id: int
    sol_aprobacion: bool
    ofe_id: int
    sol_notafinal : float
    

class titulo_exp(BaseModel):
    tx_id: Optional[int] = None
    rq_id: int
    tx_descripcion: str
    tx_datalle: str
    tx_puntaje_min: float
    tx_puntaje_max: float
    tx_puntaje_asignado: float
    tx_observacion: str
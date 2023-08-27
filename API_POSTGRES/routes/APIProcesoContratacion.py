from fastapi import APIRouter
import config.db as db
from fastapi import HTTPException
from schemas.SistemaPostulacion import actividad
from schemas.SistemaPostulacion import campo_amplio
from schemas.SistemaPostulacion import campo_especifico
from schemas.SistemaPostulacion import candidato
from schemas.SistemaPostulacion import contratacion
from schemas.SistemaPostulacion import departamento
from schemas.SistemaPostulacion import item
from schemas.SistemaPostulacion import oferta
from schemas.SistemaPostulacion import personal_academico
from schemas.SistemaPostulacion import postulacion
from schemas.SistemaPostulacion import rechum
from schemas.SistemaPostulacion import requisito
from schemas.SistemaPostulacion import sede
from schemas.SistemaPostulacion import solicitud 
from schemas.SistemaPostulacion import titulo_exp


import methods.OwnerMethods as OwnerMethods

APIProcesoContratacion = APIRouter()


# CRUD Completo
@APIProcesoContratacion.get('/actividad')
def get_actividades():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM actividad')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/actividad')
def create_actividad(act: actividad):
    new_actividad = {
        "act_nombre": act.act_nombre,
        "act_descripcion": act.act_descripcion
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO actividad (act_nombre, act_descripcion) VALUES (%(act_nombre)s, %(act_descripcion)s)', new_actividad)
    db.connection.commit()
    return "Actividad created successfully"

@APIProcesoContratacion.put('/actividad/{act_id}')
def update_actividad(act_id: int, updated_actividad: actividad):
    cur = db.connection.cursor()
    # Actualiza la actividad en la base de datos usando el ID proporcionado en la URL
    cur.execute('UPDATE actividad SET act_nombre=%(act_nombre)s, act_descripcion=%(act_descripcion)s WHERE act_id=%(act_id)s', 
                {"act_id": act_id, "act_nombre": updated_actividad.act_nombre, "act_descripcion": updated_actividad.act_descripcion})
    db.connection.commit()
    return "Actividad updated successfully"

@APIProcesoContratacion.delete('/actividad/{act_id}')
def delete_actividad(act_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM actividad WHERE act_id=%s', (act_id,))
    db.connection.commit()
    return "Actividad deleted successfully"



# CRUD Completo para campo_amplio
@APIProcesoContratacion.get('/campo_amplio')
def get_campos_amplios():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM campo_amplio')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/campo_amplio')
def create_campo_amplio(ca: campo_amplio):
    new_campo_amplio = {
        "ca_nombre": ca.ca_nombre,
        "ca_descripcion": ca.ca_descripcion
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO campo_amplio (ca_nombre, ca_descripcion) VALUES (%(ca_nombre)s, %(ca_descripcion)s)', new_campo_amplio)
    db.connection.commit()
    return "Campo amplio created successfully"

@APIProcesoContratacion.put('/campo_amplio/{ca_id}')
def update_campo_amplio(ca_id: int, updated_campo_amplio: campo_amplio):
    cur = db.connection.cursor()
    # Actualiza el campo amplio en la base de datos usando el ID proporcionado en la URL
    cur.execute('UPDATE campo_amplio SET ca_nombre=%(ca_nombre)s, ca_descripcion=%(ca_descripcion)s WHERE ca_id=%(ca_id)s', 
                {"ca_id": ca_id, "ca_nombre": updated_campo_amplio.ca_nombre, "ca_descripcion": updated_campo_amplio.ca_descripcion})
    db.connection.commit()
    return "Campo amplio updated successfully"

@APIProcesoContratacion.delete('/campo_amplio/{ca_id}')
def delete_campo_amplio(ca_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM campo_amplio WHERE ca_id=%s', (ca_id,))
    db.connection.commit()
    return "Campo amplio deleted successfully"


# CRUD Completo para campo_especifico
@APIProcesoContratacion.get('/campo_especifico')
def get_campos_especificos():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM campo_especifico')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/campo_especifico')
def create_campo_especifico(ce: campo_especifico):
    new_campo_especifico = {
        "ce_nombre": ce.ce_nombre,
        "ce_descripcion": ce.ce_descripcion,
        "ca_id": ce.ca_id
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO campo_especifico (ce_nombre, ce_descripcion, ca_id) VALUES (%(ce_nombre)s, %(ce_descripcion)s, %(ca_id)s)', new_campo_especifico)
    db.connection.commit()
    return "Campo especifico created successfully"

@APIProcesoContratacion.put('/campo_especifico/{ce_id}')
def update_campo_especifico(ce_id: int, ce: campo_especifico):
    # Verify if the referenced "ca_id" exists in the "campo_amplio" table
    cur = db.connection.cursor()
    cur.execute('SELECT COUNT(*) FROM campo_amplio WHERE ca_id = %(ca_id)s', {"ca_id": ce.ca_id})
    if cur.fetchone()[0] == 0:
        raise HTTPException(status_code=400, detail="Invalid 'ca_id'. It does not exist in the 'campo_amplio' table.")
    
    updated_campo_especifico = {
        "ce_id": ce_id,
        "ce_nombre": ce.ce_nombre,
        "ce_descripcion": ce.ce_descripcion,
        "ca_id": ce.ca_id
    }
    
    cur = db.connection.cursor()
    cur.execute('UPDATE campo_especifico SET ce_nombre=%(ce_nombre)s, ce_descripcion=%(ce_descripcion)s, ca_id=%(ca_id)s WHERE ce_id=%(ce_id)s', updated_campo_especifico)
    db.connection.commit()
    return "Campo especifico updated successfully"


@APIProcesoContratacion.delete('/campo_especifico/{ce_id}')
def delete_campo_especifico(ce_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM campo_especifico WHERE ce_id=%s', (ce_id,))
    db.connection.commit()
    return "Campo especifico deleted successfully"



# CRUD Completo para candidato
@APIProcesoContratacion.get('/candidato')
def get_candidatos():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM candidato')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/candidato')
def create_candidato(cand: candidato):
    new_candidato = {
        "cand_tipo_identificaccion": cand.cand_tipo_identificaccion,
        "cand_num_identificacion": cand.cand_num_identificacion,
        "cand_sexo": cand.cand_sexo,
        "cand_titulo": cand.cand_titulo,
        "cand_fecha_nacimiento": cand.cand_fecha_nacimiento,
        "cand_correo": cand.cand_correo,
        "cand_password": cand.cand_password,
        "cand_nombre1": cand.cand_nombre1,
        "cand_nombre2": cand.cand_nombre2,
        "cand_apellido1": cand.cand_apellido1,
        "cand_apellido2": cand.cand_apellido2
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO candidato (cand_tipo_identificacion, cand_num_identificacion, cand_sexo, cand_titulo, cand_fecha_nacimiento, cand_correo, cand_password, cand_nombre1, cand_nombre2, cand_apellido1, cand_apellido2) VALUES (%(cand_tipo_identificaccion)s, %(cand_num_identificacion)s, %(cand_sexo)s, %(cand_titulo)s, %(cand_fecha_nacimiento)s, %(cand_correo)s, %(cand_password)s, %(cand_nombre1)s, %(cand_nombre2)s, %(cand_apellido1)s, %(cand_apellido2)s)', new_candidato)
    db.connection.commit()
    return "Candidato created successfully"

@APIProcesoContratacion.put('/candidato/{cand_id}')
def update_candidato(cand_id: int, cand: candidato):
    updated_candidato = {
        "cand_tipo_identificaccion": cand.cand_tipo_identificaccion,
        "cand_num_identificacion": cand.cand_num_identificacion,
        "cand_sexo": cand.cand_sexo,
        "cand_titulo": cand.cand_titulo,
        "cand_fecha_nacimiento": cand.cand_fecha_nacimiento,
        "cand_correo": cand.cand_correo,
        "cand_password": cand.cand_password,
        "cand_nombre1": cand.cand_nombre1,
        "cand_nombre2": cand.cand_nombre2,
        "cand_apellido1": cand.cand_apellido1,
        "cand_apellido2": cand.cand_apellido2,
        "cand_id": cand.cand_id
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE candidato SET cand_tipo_identificacion=%(cand_tipo_identificaccion)s, cand_num_identificacion=%(cand_num_identificacion)s, cand_sexo=%(cand_sexo)s, cand_titulo=%(cand_titulo)s, cand_fecha_nacimiento=%(cand_fecha_nacimiento)s, cand_correo=%(cand_correo)s, cand_password=%(cand_password)s, cand_nombre1=%(cand_nombre1)s, cand_nombre2=%(cand_nombre2)s, cand_apellido1=%(cand_apellido1)s, cand_apellido2=%(cand_apellido2)s WHERE cand_id=%(cand_id)s', updated_candidato)
    db.connection.commit()
    return "Candidato updated successfully"

@APIProcesoContratacion.delete('/candidato/{cand_id}')
def delete_candidato(cand_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM candidato WHERE cand_id=%s', (cand_id,))
    db.connection.commit()
    return "Candidato deleted successfully"



# CRUD Completo para contratacion
@APIProcesoContratacion.get('/contratacion')
def get_contrataciones():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM contratacion')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/contratacion')
def create_contratacion(contrat: contratacion):
    new_contratacion = {
        "con_nombre": contrat.con_nombre
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO contratacion (con_nombre) VALUES (%(con_nombre)s)', new_contratacion)
    db.connection.commit()
    return "Contratacion created successfully"

@APIProcesoContratacion.put('/contratacion/{con_id}')
def update_contratacion(con_id: int, contrat: contratacion):
    updated_contratacion = {
        "con_id": contrat.con_id,
        "con_nombre": contrat.con_nombre
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE contratacion SET con_nombre=%(con_nombre)s WHERE con_id=%(con_id)s', updated_contratacion)
    db.connection.commit()
    return "Contratacion updated successfully"

@APIProcesoContratacion.delete('/contratacion/{con_id}')
def delete_contratacion(con_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM contratacion WHERE con_id=%s', (con_id,))
    db.connection.commit()
    return "Contratacion deleted successfully"



# CRUD Completo para departamento
@APIProcesoContratacion.get('/departamento')
def get_departamentos():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM departamento')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/departamento')
def create_departamento(dept: departamento):
    new_departamento = {
        "dept_nombre": dept.dept_nombre,
        "dept_descripcion": dept.dept_descripcion
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO departamento (dept_nombre, dept_descripcion) VALUES (%(dept_nombre)s, %(dept_descripcion)s)', new_departamento)
    db.connection.commit()
    return "Departamento created successfully"

@APIProcesoContratacion.put('/departamento/{dept_id}')
def update_departamento(dept_id: int, dept: departamento):
    updated_departamento = {
        "dept_id": dept.dept_id,
        "dept_nombre": dept.dept_nombre,
        "dept_descripcion": dept.dept_descripcion
    }
    
    print("updated_departamento:", updated_departamento)  # Add this print statement
    
    cur = db.connection.cursor()
    cur.execute('UPDATE departamento SET dept_nombre=%(dept_nombre)s, dept_descripcion=%(dept_descripcion)s WHERE dept_id=%(dept_id)s', updated_departamento)
    db.connection.commit()
    return "Departamento updated successfully"


@APIProcesoContratacion.delete('/departamento/{dept_id}')
def delete_departamento(dept_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM departamento WHERE dept_id=%s', (dept_id,))
    db.connection.commit()
    return "Departamento deleted successfully"





#CRUD Completo
@APIProcesoContratacion.get('/item')
def get_items():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM item')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/item')
def create_item(item: item):
    new_item = {
        "it_id": item.it_id,
        "pa_id": item.pa_id,
        "it_nombre": item.it_nombre
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO item (it_id, pa_id, it_nombre) VALUES (%(it_id)s, %(pa_id)s, %(it_nombre)s)', new_item)
    db.connection.commit()
    return "Item created successfully"

@APIProcesoContratacion.put('/item/{it_id}')
def update_item(it_id: int, item: item):
    updated_item = {
        "it_id": item.it_id,
        "pa_id": item.pa_id,
        "it_nombre": item.it_nombre
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE item SET it_id=%(it_id)s, pa_id=%(pa_id)s, it_nombre=%(it_nombre)s WHERE it_id=%(it_id)s', updated_item)
    db.connection.commit()
    return "Item updated successfully"

@APIProcesoContratacion.delete('/item/{it_id}')
def delete_item(it_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM item WHERE it_id=%s', (it_id,))
    db.connection.commit()
    return "Item deleted successfully"

# CRUD Completo para item
@APIProcesoContratacion.get('/item')
def get_items():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM item')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/item')
def create_item(item: item):
    new_item = {
        "pa_id": item.pa_id,
        "it_nombre": item.it_nombre
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO item (pa_id, it_nombre) VALUES (%(pa_id)s, %(it_nombre)s)', new_item)
    db.connection.commit()
    return "Item created successfully"

@APIProcesoContratacion.put('/item/{it_id}')
def update_item(it_id: int, item: item):
    updated_item = {
        "pa_id": item.pa_id,
        "it_nombre": item.it_nombre
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE item SET pa_id=%(pa_id)s, it_nombre=%(it_nombre)s WHERE it_id=%(it_id)s', updated_item)
    db.connection.commit()
    return "Item updated successfully"

@APIProcesoContratacion.delete('/item/{it_id}')
def delete_item(it_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM item WHERE it_id=%s', (it_id,))
    db.connection.commit()
    return "Item deleted successfully"


# CRUD Completo para oferta
@APIProcesoContratacion.get('/oferta')
def get_ofertas():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM oferta')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/oferta')
def create_oferta(oferta: oferta):
    new_oferta = {
        "post_id": oferta.post_id,
        "con_id": oferta.con_id,
        "ce_id": oferta.ce_id,
        "ca_id": oferta.ca_id,
        "sede_id": oferta.sede_id,
        "dept_id": oferta.dept_id,
        "pa_id": oferta.pa_id,
        "act_id": oferta.act_id,
        "ofe_vacantes": oferta.ofe_vacantes,
        "ofe_horas": oferta.ofe_horas
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO oferta (post_id, con_id, ce_id, ca_id, sede_id, dept_id, pa_id, act_id, ofe_vacantes, ofe_horas) VALUES (%(post_id)s, %(con_id)s, %(ce_id)s, %(ca_id)s, %(sede_id)s, %(dept_id)s, %(pa_id)s, %(act_id)s, %(ofe_vacantes)s, %(ofe_horas)s)', new_oferta)
    db.connection.commit()
    return "Oferta created successfully"

@APIProcesoContratacion.put('/oferta/{ofe_id}')
def update_oferta(ofe_id: int, oferta: oferta):
    updated_oferta = {
        "post_id": oferta.post_id,
        "con_id": oferta.con_id,
        "ce_id": oferta.ce_id,
        "ca_id": oferta.ca_id,
        "sede_id": oferta.sede_id,
        "dept_id": oferta.dept_id,
        "pa_id": oferta.pa_id,
        "act_id": oferta.act_id,
        "ofe_vacantes": oferta.ofe_vacantes,
        "ofe_horas": oferta.ofe_horas
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE oferta SET post_id=%(post_id)s, con_id=%(con_id)s, ce_id=%(ce_id)s, ca_id=%(ca_id)s, sede_id=%(sede_id)s, dept_id=%(dept_id)s, pa_id=%(pa_id)s, act_id=%(act_id)s, ofe_vacantes=%(ofe_vacantes)s, ofe_horas=%(ofe_horas)s WHERE ofe_id=%(ofe_id)s', updated_oferta)
    db.connection.commit()
    return "Oferta updated successfully"

@APIProcesoContratacion.delete('/oferta/{ofe_id}')
def delete_oferta(ofe_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM oferta WHERE ofe_id=%s', (ofe_id,))
    db.connection.commit()
    return "Oferta deleted successfully"




# CRUD Completo para sede
@APIProcesoContratacion.get('/sede')
def get_sedes():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM sede')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/sede')
def create_sede(sede: sede):
    new_sede = {
        "sede_nombre": sede.sede_nombre,
        "sede_descripcion": sede.sede_descripcion,
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO sede (sede_nombre, sede_descripcion) VALUES (%(sede_nombre)s, %(sede_descripcion)s)', new_sede)
    db.connection.commit()
    return "Sede created successfully"

@APIProcesoContratacion.put('/sede/{sede_id}')
def update_sede(sede_id: int, sede: sede):
    updated_sede = {
        "sede_id": sede.sede_id,
        "sede_nombre": sede.sede_nombre,
        "sede_descripcion": sede.sede_descripcion,
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE sede SET sede_nombre=%(sede_nombre)s, sede_descripcion=%(sede_descripcion)s WHERE sede_id=%(sede_id)s', updated_sede)
    db.connection.commit()
    return "Sede updated successfully"

@APIProcesoContratacion.delete('/sede/{sede_id}')
def delete_sede(sede_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM sede WHERE sede_id=%s', (sede_id,))
    db.connection.commit()
    return "Sede deleted successfully"



# CRUD Completo para postulacion
@APIProcesoContratacion.get('/postulacion')
def get_postulaciones():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM postulacion')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/postulacion')
def create_postulacion(postulacion: postulacion):
    new_postulacion = {
        "post_periodo": postulacion.post_periodo,
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO postulacion (post_periodo) VALUES (%(post_periodo)s)', new_postulacion)
    db.connection.commit()
    return "Postulacion created successfully"

@APIProcesoContratacion.put('/postulacion/{post_id}')
def update_postulacion(post_id: int, postulacion: postulacion):
    updated_postulacion = {
        "post_id": postulacion.post_id,
        "post_periodo": postulacion.post_periodo,
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE postulacion SET post_periodo=%(post_periodo)s WHERE post_id=%(post_id)s', updated_postulacion)
    db.connection.commit()
    return "Postulacion updated successfully"

@APIProcesoContratacion.delete('/postulacion/{post_id}')
def delete_postulacion(post_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM postulacion WHERE post_id=%s', (post_id,))
    db.connection.commit()
    return "Postulacion deleted successfully"



# CRUD Completo para rechum
@APIProcesoContratacion.get('/rechum')
def get_rechums():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM rechum')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/rechum')
def create_rechum(rechum: rechum):
    new_rechum = {
        "rh_cargo": rechum.rh_cargo,
        "rh_correo": rechum.rh_correo,
        "rh_password": rechum.rh_password,
        "rh_nombre1": rechum.rh_nombre1,
        "rh_nombre2": rechum.rh_nombre2,
        "rh_apellido1": rechum.rh_apellido1,
        "rh_apellido2": rechum.rh_apellido2,
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO rechum (rh_cargo, rh_correo, rh_password, rh_nombre1, rh_nombre2, rh_apellido1, rh_apellido2) VALUES (%(rh_cargo)s, %(rh_correo)s, %(rh_password)s, %(rh_nombre1)s, %(rh_nombre2)s, %(rh_apellido1)s, %(rh_apellido2)s)', new_rechum)
    db.connection.commit()
    return "Rechum created successfully"

@APIProcesoContratacion.put('/rechum/{rec_id}')
def update_rechum(rec_id: int, rechum: rechum):
    updated_rechum = {
        "rh_cargo": rechum.rh_cargo,
        "rh_correo": rechum.rh_correo,
        "rh_password": rechum.rh_password,
        "rh_nombre1": rechum.rh_nombre1,
        "rh_nombre2": rechum.rh_nombre2,
        "rh_apellido1": rechum.rh_apellido1,
        "rh_apellido2": rechum.rh_apellido2,
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE rechum SET rh_cargo=%(rh_cargo)s, rh_correo=%(rh_correo)s, rh_password=%(rh_password)s, rh_nombre1=%(rh_nombre1)s, rh_nombre2=%(rh_nombre2)s, rh_apellido1=%(rh_apellido1)s, rh_apellido2=%(rh_apellido2)s WHERE rec_id=%(rec_id)s', updated_rechum)
    db.connection.commit()
    return "Rechum updated successfully"

@APIProcesoContratacion.delete('/rechum/{rec_id}')
def delete_rechum(rec_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM rechum WHERE rec_id=%s', (rec_id,))
    db.connection.commit()
    return "Rechum deleted successfully"



# CRUD Completo para requisito
@APIProcesoContratacion.get('/requisito')
def get_requisitos():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM requisito')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/requisito')
def create_requisito(requisito: requisito):
    new_requisito = {
        "rq_id": requisito.rq_id,
        "it_id": requisito.it_id,
        "rq_descripcion": requisito.rq_descripcion,
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO requisito (rq_id, it_id, rq_descripcion) VALUES (%(rq_id)s, %(it_id)s, %(rq_descripcion)s)', new_requisito)
    db.connection.commit()
    return "Requisito created successfully"

@APIProcesoContratacion.put('/requisito/{rq_id}')
def update_requisito(rq_id: int, requisito: requisito):
    updated_requisito = {
        "rq_id": requisito.rq_id,
        "it_id": requisito.it_id,
        "rq_descripcion": requisito.rq_descripcion,
    }
    cur = db.connection.cursor()
    cur.execute ('UPDATE requisito SET rq_id=%(rq_id)s, it_id=%(it_id)s, rq_descripcion=%(rq_descripcion)s WHERE rq_id=%(rq_id)s', updated_requisito)
    db.connection.commit()
    return "Requisito updated successfully"

@APIProcesoContratacion.delete('/requisito/{rq_id}')
def delete_requisito(rq_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM requisito WHERE rq_id=%s', (rq_id,))
    db.connection.commit()
    return "Requisito deleted successfully"



# CRUD Completo para solicitud
@APIProcesoContratacion.get('/solicitud')
def get_solicitudes():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM solicitud')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/solicitud')
def create_solicitud(solicitud: solicitud):
    new_solicitud = {
        "cand_id": solicitud.cand_id,
        "ofe_id": solicitud.sol_id,
        "rh_id": solicitud.rh_id,
        "sol_aprobacion": solicitud.sol_aprobacion,   
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO solicitud (cand_id, ofe_id, rh_id, sol_aprobacion) VALUES (%(cand_id)s, %(ofe_id)s, %(rh_id)s, %(sol_aprobacion)s)', new_solicitud)
    db.connection.commit()
    return "Solicitud created successfully"

@APIProcesoContratacion.put('/solicitud/{sol_id}')
def update_solicitud(sol_id: int, solicitud: solicitud):
    updated_solicitud = {
        "sol_id": solicitud.sol_id,
        "cand_id": solicitud.cand_id,
        "ofe_id": solicitud.ofe_id,
        "rh_id": solicitud.rh_id,
        "sol_aprobacion": solicitud.sol_aprobacion,
    }
    cur = db.connection.cursor()
    cur.execute ('UPDATE solicitud SET cand_id=%(cand_id)s, ofe_id=%(ofe_id)s, rh_id=%(rh_id)s, sol_aprobacion=%(sol_aprobacion)s WHERE sol_id=%(sol_id)s', updated_solicitud)
    db.connection.commit()
    return "Solicitud updated successfully"

@APIProcesoContratacion.delete('/solicitud/{sol_id}')
def delete_solicitud(sol_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM solicitud WHERE sol_id=%s', (sol_id,))
    db.connection.commit()
    return "Solicitud deleted successfully"


# CRUD Completo para titulo_exp
@APIProcesoContratacion.get('/titulo_exp')
def get_titulos_exp():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM titulo_exp')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/titulo_exp')
def create_titulo_exp(titulo_exp: titulo_exp):
    new_titulo_exp = {
        "tx_id": titulo_exp.tx_id,
        "rq_id": titulo_exp.rq_id,
        "tx_descripcion": titulo_exp.tx_descripcion,
        "tx_datalle": titulo_exp.tx_datalle,
        "tx_puntaje_min": titulo_exp.tx_puntaje_min,
        "tx_puntaje_max": titulo_exp.tx_puntaje_max,
        "tx_puntaje_asignado": titulo_exp.tx_puntaje_asignado,
        "tx_observacion": titulo_exp.tx_observacion
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO titulo_exp (tx_id, rq_id, tx_descripcion, tx_datalle, tx_puntaje_min, tx_puntaje_max, tx_puntaje_asignado, tx_observacion) VALUES (%(tx_id)s, %(rq_id)s, %(tx_descripcion)s, %(tx_datalle)s, %(tx_puntaje_min)s, %(tx_puntaje_max)s, %(tx_puntaje_asignado)s, %(tx_observacion)s)', new_titulo_exp)
    db.connection.commit()
    return "Titulo_exp created successfully"

@APIProcesoContratacion.put('/titulo_exp/{tx_id}')
def update_titulo_exp(tx_id: int, titulo_exp: titulo_exp):
    updated_titulo_exp = {
        "tx_id": titulo_exp.tx_id,
        "rq_id": titulo_exp.rq_id,
        "tx_descripcion": titulo_exp.tx_descripcion,
        "tx_datalle": titulo_exp.tx_datalle,
        "tx_puntaje_min": titulo_exp.tx_puntaje_min,
        "tx_puntaje_max": titulo_exp.tx_puntaje_max,
        "tx_puntaje_asignado": titulo_exp.tx_puntaje_asignado,
        "tx_observacion": titulo_exp.tx_observacion
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE titulo_exp SET tx_id=%(tx_id)s, rq_id=%(rq_id)s, tx_descripcion=%(tx_descripcion)s, tx_datalle=%(tx_datalle)s, tx_puntaje_min=%(tx_puntaje_min)s, tx_puntaje_max=%(tx_puntaje_max)s, tx_puntaje_asignado=%(tx_puntaje_asignado)s, tx_observacion=%(tx_observacion)s WHERE tx_id=%(tx_id)s', updated_titulo_exp)
    db.connection.commit()
    return "Titulo_exp updated successfully"

@APIProcesoContratacion.delete('/titulo_exp/{tx_id}')
def delete_titulo_exp(tx_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM titulo_exp WHERE tx_id=%s', (tx_id,))
    db.connection.commit()
    return "Titulo_exp deleted successfully"


# CRUD Completo para personal_academico
@APIProcesoContratacion.get('/personal_academico')
def get_personal_academicos():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM personal_academico')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/personal_academico')
def create_personal_academico(personal: personal_academico):
    new_personal = {
        "pa_nombre": personal.pa_nombre,
        "pa_descripcion": personal.pa_descripcion
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO personal_academico (pa_nombre, pa_descripcion) VALUES (%(pa_nombre)s, %(pa_descripcion)s)', new_personal)
    db.connection.commit()
    return "Personal academico created successfully"

@APIProcesoContratacion.put('/personal_academico/{pa_id}')
def update_personal_academico(pa_id: int, personal: personal_academico):
    updated_personal = {
        "pa_id": personal.pa_id,
        "pa_nombre": personal.pa_nombre,
        "pa_descripcion": personal.pa_descripcion
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE personal_academico SET pa_nombre=%(pa_nombre)s, pa_descripcion=%(pa_descripcion)s WHERE pa_id=%(pa_id)s', updated_personal)
    db.connection.commit()
    return "Personal academico updated successfully"

@APIProcesoContratacion.delete('/personal_academico/{pa_id}')
def delete_personal_academico(pa_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM personal_academico WHERE pa_id=%s', (pa_id,))
    db.connection.commit()
    return "Personal academico deleted successfully"

from fastapi import APIRouter
from fastapi import Response
import config.db as db
from fastapi import HTTPException
from schemas.SistemaPostulacion import actividad
from schemas.SistemaPostulacion import campo_amplio
from schemas.SistemaPostulacion import campo_especifico
from schemas.SistemaPostulacion import candidato
from schemas.SistemaPostulacion import contratacion
from schemas.SistemaPostulacion import departamento
from schemas.SistemaPostulacion import item
from schemas.SistemaPostulacion import oferta
from schemas.SistemaPostulacion import personal_academico
from schemas.SistemaPostulacion import postulacion
from schemas.SistemaPostulacion import rechum
from schemas.SistemaPostulacion import requisito
from schemas.SistemaPostulacion import sede
from schemas.SistemaPostulacion import solicitud 
from schemas.SistemaPostulacion import titulo_exp
import json


import methods.OwnerMethods as OwnerMethods

APIProcesoContratacion = APIRouter()


# CRUD Completo
@APIProcesoContratacion.get('/actividad')
def get_actividades():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM actividad')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/actividad')
def create_actividad(act: actividad):
    new_actividad = {
        "act_nombre": act.act_nombre,
        "act_descripcion": act.act_descripcion
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO actividad (act_nombre, act_descripcion) VALUES (%(act_nombre)s, %(act_descripcion)s)', new_actividad)
    db.connection.commit()
    return "Actividad created successfully"

@APIProcesoContratacion.put('/actividad/{act_id}')
def update_actividad(act_id: int, updated_actividad: actividad):
    cur = db.connection.cursor()
    # Actualiza la actividad en la base de datos usando el ID proporcionado en la URL
    cur.execute('UPDATE actividad SET act_nombre=%(act_nombre)s, act_descripcion=%(act_descripcion)s WHERE act_id=%(act_id)s', 
                {"act_id": act_id, "act_nombre": updated_actividad.act_nombre, "act_descripcion": updated_actividad.act_descripcion})
    db.connection.commit()
    return "Actividad updated successfully"

@APIProcesoContratacion.delete('/actividad/{act_id}')
def delete_actividad(act_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM actividad WHERE act_id=%s', (act_id,))
    db.connection.commit()
    return "Actividad deleted successfully"



# CRUD Completo para campo_amplio
@APIProcesoContratacion.get('/campo_amplio')
def get_campos_amplios():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM campo_amplio')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/campo_amplio')
def create_campo_amplio(ca: campo_amplio):
    new_campo_amplio = {
        "ca_nombre": ca.ca_nombre,
        "ca_descripcion": ca.ca_descripcion
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO campo_amplio (ca_nombre, ca_descripcion) VALUES (%(ca_nombre)s, %(ca_descripcion)s)', new_campo_amplio)
    db.connection.commit()
    return "Campo amplio created successfully"

@APIProcesoContratacion.put('/campo_amplio/{ca_id}')
def update_campo_amplio(ca_id: int, updated_campo_amplio: campo_amplio):
    cur = db.connection.cursor()
    # Actualiza el campo amplio en la base de datos usando el ID proporcionado en la URL
    cur.execute('UPDATE campo_amplio SET ca_nombre=%(ca_nombre)s, ca_descripcion=%(ca_descripcion)s WHERE ca_id=%(ca_id)s', 
                {"ca_id": ca_id, "ca_nombre": updated_campo_amplio.ca_nombre, "ca_descripcion": updated_campo_amplio.ca_descripcion})
    db.connection.commit()
    return "Campo amplio updated successfully"

@APIProcesoContratacion.delete('/campo_amplio/{ca_id}')
def delete_campo_amplio(ca_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM campo_amplio WHERE ca_id=%s', (ca_id,))
    db.connection.commit()
    return "Campo amplio deleted successfully"


# CRUD Completo para campo_especifico
@APIProcesoContratacion.get('/campo_especifico')
def get_campos_especificos():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM campo_especifico')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/campo_especifico')
def create_campo_especifico(ce: campo_especifico):
    new_campo_especifico = {
        "ce_nombre": ce.ce_nombre,
        "ce_descripcion": ce.ce_descripcion,
        "ca_id": ce.ca_id
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO campo_especifico (ce_nombre, ce_descripcion, ca_id) VALUES (%(ce_nombre)s, %(ce_descripcion)s, %(ca_id)s)', new_campo_especifico)
    db.connection.commit()
    return "Campo especifico created successfully"

@APIProcesoContratacion.put('/campo_especifico/{ce_id}')
def update_campo_especifico(ce_id: int, ce: campo_especifico):
    # Verify if the referenced "ca_id" exists in the "campo_amplio" table
    cur = db.connection.cursor()
    cur.execute('SELECT COUNT(*) FROM campo_amplio WHERE ca_id = %(ca_id)s', {"ca_id": ce.ca_id})
    if cur.fetchone()[0] == 0:
        raise HTTPException(status_code=400, detail="Invalid 'ca_id'. It does not exist in the 'campo_amplio' table.")
    
    updated_campo_especifico = {
        "ce_id": ce_id,
        "ce_nombre": ce.ce_nombre,
        "ce_descripcion": ce.ce_descripcion,
        "ca_id": ce.ca_id
    }
    
    cur = db.connection.cursor()
    cur.execute('UPDATE campo_especifico SET ce_nombre=%(ce_nombre)s, ce_descripcion=%(ce_descripcion)s, ca_id=%(ca_id)s WHERE ce_id=%(ce_id)s', updated_campo_especifico)
    db.connection.commit()
    return "Campo especifico updated successfully"


@APIProcesoContratacion.delete('/campo_especifico/{ce_id}')
def delete_campo_especifico(ce_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM campo_especifico WHERE ce_id=%s', (ce_id,))
    db.connection.commit()
    return "Campo especifico deleted successfully"



# CRUD Completo para candidato
@APIProcesoContratacion.get('/candidato')
def get_candidatos():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM candidato')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/candidato')
def create_candidato(cand: candidato):
    new_candidato = {
        "cand_tipo_identificaccion": cand.cand_tipo_identificaccion,
        "cand_num_identificacion": cand.cand_num_identificacion,
        "cand_sexo": cand.cand_sexo,
        "cand_titulo": cand.cand_titulo,
        "cand_fecha_nacimiento": cand.cand_fecha_nacimiento,
        "cand_correo": cand.cand_correo,
        "cand_password": cand.cand_password,
        "cand_nombre1": cand.cand_nombre1,
        "cand_nombre2": cand.cand_nombre2,
        "cand_apellido1": cand.cand_apellido1,
        "cand_apellido2": cand.cand_apellido2
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO candidato (cand_tipo_identificacion, cand_num_identificacion, cand_sexo, cand_titulo, cand_fecha_nacimiento, cand_correo, cand_password, cand_nombre1, cand_nombre2, cand_apellido1, cand_apellido2) VALUES (%(cand_tipo_identificaccion)s, %(cand_num_identificacion)s, %(cand_sexo)s, %(cand_titulo)s, %(cand_fecha_nacimiento)s, %(cand_correo)s, %(cand_password)s, %(cand_nombre1)s, %(cand_nombre2)s, %(cand_apellido1)s, %(cand_apellido2)s)', new_candidato)
    db.connection.commit()
    return "Candidato created successfully"

@APIProcesoContratacion.put('/candidato/{cand_id}')
def update_candidato(cand_id: int, cand: candidato):
    updated_candidato = {
        "cand_tipo_identificaccion": cand.cand_tipo_identificaccion,
        "cand_num_identificacion": cand.cand_num_identificacion,
        "cand_sexo": cand.cand_sexo,
        "cand_titulo": cand.cand_titulo,
        "cand_fecha_nacimiento": cand.cand_fecha_nacimiento,
        "cand_correo": cand.cand_correo,
        "cand_password": cand.cand_password,
        "cand_nombre1": cand.cand_nombre1,
        "cand_nombre2": cand.cand_nombre2,
        "cand_apellido1": cand.cand_apellido1,
        "cand_apellido2": cand.cand_apellido2
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE candidato SET cand_tipo_identificaccion=%(cand_tipo_identificaccion)s, cand_num_identificacion=%(cand_num_identificacion)s, cand_sexo=%(cand_sexo)s, cand_titulo=%(cand_titulo)s, cand_fecha_nacimiento=%(cand_fecha_nacimiento)s, cand_correo=%(cand_correo)s, cand_password=%(cand_password)s, cand_nombre1=%(cand_nombre1)s, cand_nombre2=%(cand_nombre2)s, cand_apellido1=%(cand_apellido1)s, cand_apellido2=%(cand_apellido2)s WHERE cand_id=%(cand_id)s', updated_candidato)
    db.connection.commit()
    return "Candidato updated successfully"

@APIProcesoContratacion.delete('/candidato/{cand_id}')
def delete_candidato(cand_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM candidato WHERE cand_id=%s', (cand_id,))
    db.connection.commit()
    return "Candidato deleted successfully"



# CRUD Completo para contratacion
@APIProcesoContratacion.get('/contratacion')
def get_contrataciones():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM contratacion')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/contratacion')
def create_contratacion(contrat: contratacion):
    new_contratacion = {
        "con_nombre": contrat.con_nombre
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO contratacion (con_nombre) VALUES (%(con_nombre)s)', new_contratacion)
    db.connection.commit()
    return "Contratacion created successfully"

@APIProcesoContratacion.put('/contratacion/{con_id}')
def update_contratacion(con_id: int, contrat: contratacion):
    updated_contratacion = {
        "con_id": contrat.con_id,
        "con_nombre": contrat.con_nombre
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE contratacion SET con_nombre=%(con_nombre)s WHERE con_id=%(con_id)s', updated_contratacion)
    db.connection.commit()
    return "Contratacion updated successfully"

@APIProcesoContratacion.delete('/contratacion/{con_id}')
def delete_contratacion(con_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM contratacion WHERE con_id=%s', (con_id,))
    db.connection.commit()
    return "Contratacion deleted successfully"



# CRUD Completo para departamento
@APIProcesoContratacion.get('/departamento')
def get_departamentos():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM departamento')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/departamento')
def create_departamento(dept: departamento):
    new_departamento = {
        "dept_nombre": dept.dept_nombre,
        "dept_descripcion": dept.dept_descripcion
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO departamento (dept_nombre, dept_descripcion) VALUES (%(dept_nombre)s, %(dept_descripcion)s)', new_departamento)
    db.connection.commit()
    return "Departamento created successfully"

@APIProcesoContratacion.put('/departamento/{dept_id}')
def update_departamento(dept_id: int, dept: departamento):
    updated_departamento = {
        "dept_id": dept.dept_id,
        "dept_nombre": dept.dept_nombre,
        "dept_descripcion": dept.dept_descripcion
    }
    
    print("updated_departamento:", updated_departamento)  # Add this print statement
    
    cur = db.connection.cursor()
    cur.execute('UPDATE departamento SET dept_nombre=%(dept_nombre)s, dept_descripcion=%(dept_descripcion)s WHERE dept_id=%(dept_id)s', updated_departamento)
    db.connection.commit()
    return "Departamento updated successfully"


@APIProcesoContratacion.delete('/departamento/{dept_id}')
def delete_departamento(dept_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM departamento WHERE dept_id=%s', (dept_id,))
    db.connection.commit()
    return "Departamento deleted successfully"





#CRUD Completo
@APIProcesoContratacion.get('/item')
def get_items():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM item')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/item')
def create_item(item: item):
    new_item = {
        "it_id": item.it_id,
        "pa_id": item.pa_id,
        "it_nombre": item.it_nombre
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO item (it_id, pa_id, it_nombre) VALUES (%(it_id)s, %(pa_id)s, %(it_nombre)s)', new_item)
    db.connection.commit()
    return "Item created successfully"

@APIProcesoContratacion.put('/item/{it_id}')
def update_item(it_id: int, item: item):
    updated_item = {
        "it_id": item.it_id,
        "pa_id": item.pa_id,
        "it_nombre": item.it_nombre
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE item SET it_id=%(it_id)s, pa_id=%(pa_id)s, it_nombre=%(it_nombre)s WHERE it_id=%(it_id)s', updated_item)
    db.connection.commit()
    return "Item updated successfully"

@APIProcesoContratacion.delete('/item/{it_id}')
def delete_item(it_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM item WHERE it_id=%s', (it_id,))
    db.connection.commit()
    return "Item deleted successfully"

# CRUD Completo para item
@APIProcesoContratacion.get('/item')
def get_items():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM item')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/item')
def create_item(item: item):
    new_item = {
        "pa_id": item.pa_id,
        "it_nombre": item.it_nombre
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO item (pa_id, it_nombre) VALUES (%(pa_id)s, %(it_nombre)s)', new_item)
    db.connection.commit()
    return "Item created successfully"

@APIProcesoContratacion.put('/item/{it_id}')
def update_item(it_id: int, item: item):
    updated_item = {
        "pa_id": item.pa_id,
        "it_nombre": item.it_nombre
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE item SET pa_id=%(pa_id)s, it_nombre=%(it_nombre)s WHERE it_id=%(it_id)s', updated_item)
    db.connection.commit()
    return "Item updated successfully"

@APIProcesoContratacion.delete('/item/{it_id}')
def delete_item(it_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM item WHERE it_id=%s', (it_id,))
    db.connection.commit()
    return "Item deleted successfully"


# CRUD Completo para oferta
@APIProcesoContratacion.get('/oferta')
def get_ofertas():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM oferta')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/oferta')
def create_oferta(oferta: oferta):
    new_oferta = {
        "post_id": oferta.post_id,
        "con_id": oferta.con_id,
        "ce_id": oferta.ce_id,
        "ca_id": oferta.ca_id,
        "sede_id": oferta.sede_id,
        "dept_id": oferta.dept_id,
        "pa_id": oferta.pa_id,
        "act_id": oferta.act_id,
        "ofe_vacantes": oferta.ofe_vacantes,
        "ofe_horas": oferta.ofe_horas
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO oferta (post_id, con_id, ce_id, ca_id, sede_id, dept_id, pa_id, act_id, ofe_vacantes, ofe_horas) VALUES (%(post_id)s, %(con_id)s, %(ce_id)s, %(ca_id)s, %(sede_id)s, %(dept_id)s, %(pa_id)s, %(act_id)s, %(ofe_vacantes)s, %(ofe_horas)s)', new_oferta)
    db.connection.commit()
    return "Oferta created successfully"

@APIProcesoContratacion.put('/oferta/{ofe_id}')
def update_oferta(ofe_id: int, oferta: oferta):
    updated_oferta = {
        "post_id": oferta.post_id,
        "con_id": oferta.con_id,
        "ce_id": oferta.ce_id,
        "ca_id": oferta.ca_id,
        "sede_id": oferta.sede_id,
        "dept_id": oferta.dept_id,
        "pa_id": oferta.pa_id,
        "act_id": oferta.act_id,
        "ofe_vacantes": oferta.ofe_vacantes,
        "ofe_horas": oferta.ofe_horas
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE oferta SET post_id=%(post_id)s, con_id=%(con_id)s, ce_id=%(ce_id)s, ca_id=%(ca_id)s, sede_id=%(sede_id)s, dept_id=%(dept_id)s, pa_id=%(pa_id)s, act_id=%(act_id)s, ofe_vacantes=%(ofe_vacantes)s, ofe_horas=%(ofe_horas)s WHERE ofe_id=%(ofe_id)s', updated_oferta)
    db.connection.commit()
    return "Oferta updated successfully"

@APIProcesoContratacion.delete('/oferta/{ofe_id}')
def delete_oferta(ofe_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM oferta WHERE ofe_id=%s', (ofe_id,))
    db.connection.commit()
    return "Oferta deleted successfully"




# CRUD Completo para sede
@APIProcesoContratacion.get('/sede')
def get_sedes():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM sede')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/sede')
def create_sede(sede: sede):
    new_sede = {
        "sede_nombre": sede.sede_nombre,
        "sede_descripcion": sede.sede_descripcion,
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO sede (sede_nombre, sede_descripcion) VALUES (%(sede_nombre)s, %(sede_descripcion)s)', new_sede)
    db.connection.commit()
    return "Sede created successfully"

@APIProcesoContratacion.put('/sede/{sede_id}')
def update_sede(sede_id: int, sede: sede):
    updated_sede = {
        "sede_id": sede.sede_id,
        "sede_nombre": sede.sede_nombre,
        "sede_descripcion": sede.sede_descripcion,
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE sede SET sede_nombre=%(sede_nombre)s, sede_descripcion=%(sede_descripcion)s WHERE sede_id=%(sede_id)s', updated_sede)
    db.connection.commit()
    return "Sede updated successfully"

@APIProcesoContratacion.delete('/sede/{sede_id}')
def delete_sede(sede_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM sede WHERE sede_id=%s', (sede_id,))
    db.connection.commit()
    return "Sede deleted successfully"



# CRUD Completo para postulacion
@APIProcesoContratacion.get('/postulacion')
def get_postulaciones():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM postulacion')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/postulacion')
def create_postulacion(postulacion: postulacion):
    new_postulacion = {
        "post_periodo": postulacion.post_periodo,
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO postulacion (post_periodo) VALUES (%(post_periodo)s)', new_postulacion)
    db.connection.commit()
    return "Postulacion created successfully"

@APIProcesoContratacion.put('/postulacion/{post_id}')
def update_postulacion(post_id: int, postulacion: postulacion):
    updated_postulacion = {
        "post_id": postulacion.post_id,
        "post_periodo": postulacion.post_periodo,
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE postulacion SET post_periodo=%(post_periodo)s WHERE post_id=%(post_id)s', updated_postulacion)
    db.connection.commit()
    return "Postulacion updated successfully"

@APIProcesoContratacion.delete('/postulacion/{post_id}')
def delete_postulacion(post_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM postulacion WHERE post_id=%s', (post_id,))
    db.connection.commit()
    return "Postulacion deleted successfully"



# CRUD Completo para rechum
@APIProcesoContratacion.get('/rechum')
def get_rechums():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM rechum')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/rechum')
def create_rechum(rechum: rechum):
    new_rechum = {
        "rh_cargo": rechum.rh_cargo,
        "rh_correo": rechum.rh_correo,
        "rh_password": rechum.rh_password,
        "rh_nombre1": rechum.rh_nombre1,
        "rh_nombre2": rechum.rh_nombre2,
        "rh_apellido1": rechum.rh_apellido1,
        "rh_apellido2": rechum.rh_apellido2,
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO rechum (rh_cargo, rh_correo, rh_password, rh_nombre1, rh_nombre2, rh_apellido1, rh_apellido2) VALUES (%(rh_cargo)s, %(rh_correo)s, %(rh_password)s, %(rh_nombre1)s, %(rh_nombre2)s, %(rh_apellido1)s, %(rh_apellido2)s)', new_rechum)
    db.connection.commit()
    return "Rechum created successfully"

@APIProcesoContratacion.put('/rechum/{rec_id}')
def update_rechum(rec_id: int, rechum: rechum):
    updated_rechum = {
        "rh_cargo": rechum.rh_cargo,
        "rh_correo": rechum.rh_correo,
        "rh_password": rechum.rh_password,
        "rh_nombre1": rechum.rh_nombre1,
        "rh_nombre2": rechum.rh_nombre2,
        "rh_apellido1": rechum.rh_apellido1,
        "rh_apellido2": rechum.rh_apellido2,
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE rechum SET rh_cargo=%(rh_cargo)s, rh_correo=%(rh_correo)s, rh_password=%(rh_password)s, rh_nombre1=%(rh_nombre1)s, rh_nombre2=%(rh_nombre2)s, rh_apellido1=%(rh_apellido1)s, rh_apellido2=%(rh_apellido2)s WHERE rec_id=%(rec_id)s', updated_rechum)
    db.connection.commit()
    return "Rechum updated successfully"

@APIProcesoContratacion.delete('/rechum/{rec_id}')
def delete_rechum(rec_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM rechum WHERE rec_id=%s', (rec_id,))
    db.connection.commit()
    return "Rechum deleted successfully"



# CRUD Completo para requisito
@APIProcesoContratacion.get('/requisito')
def get_requisitos():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM requisito')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/requisito')
def create_requisito(requisito: requisito):
    new_requisito = {
        "rq_id": requisito.rq_id,
        "it_id": requisito.it_id,
        "rq_descripcion": requisito.rq_descripcion,
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO requisito (rq_id, it_id, rq_descripcion) VALUES (%(rq_id)s, %(it_id)s, %(rq_descripcion)s)', new_requisito)
    db.connection.commit()
    return "Requisito created successfully"

@APIProcesoContratacion.put('/requisito/{rq_id}')
def update_requisito(rq_id: int, requisito: requisito):
    updated_requisito = {
        "rq_id": requisito.rq_id,
        "it_id": requisito.it_id,
        "rq_descripcion": requisito.rq_descripcion,
    }
    cur = db.connection.cursor()
    cur.execute ('UPDATE requisito SET rq_id=%(rq_id)s, it_id=%(it_id)s, rq_descripcion=%(rq_descripcion)s WHERE rq_id=%(rq_id)s', updated_requisito)
    db.connection.commit()
    return "Requisito updated successfully"

@APIProcesoContratacion.delete('/requisito/{rq_id}')
def delete_requisito(rq_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM requisito WHERE rq_id=%s', (rq_id,))
    db.connection.commit()
    return "Requisito deleted successfully"



# CRUD Completo para solicitud
@APIProcesoContratacion.get('/solicitud')
def get_solicitudes():
    cur = db.connection.cursor()
    cur.execute('''
        SELECT s.*, c.*, ce.*, ca.*, ac.*, te.*
        FROM solicitud as s
        LEFT JOIN candidato as c ON s.cand_id = c.cand_id
        LEFT JOIN oferta as o ON s.ofe_id = o.ofe_id
        LEFT JOIN campo_especifico as ce ON o.ce_id = ce.ce_id
        LEFT JOIN campo_amplio as ca ON ce.ca_id = ca.ca_id
        LEFT JOIN actividad as ac ON o.act_id = ac.act_id
        LEFT JOIN personal_academico as pa ON o.pa_id = pa.pa_id
        LEFT JOIN item as i ON pa.pa_id = i.pa_id
        LEFT JOIN requisito as rq ON i.it_id = rq.it_id
        LEFT JOIN titulo_exp as te ON rq.rq_id = te.rq_id
    ''')

    fields = [field_md[0] for field_md in cur.description]
    result = [dict(zip(fields,row)) for row in cur.fetchall()]
    json_str = json.dumps(result, indent=4, default=str)
    print(json_str)
    return Response(content=json_str, media_type='application/json')

@APIProcesoContratacion.post('/solicitud')
def create_solicitud(solicitud: solicitud):
    new_solicitud = {
        "cand_id": solicitud.cand_id,
        "sol_id": solicitud.sol_id,
        "rh_id": solicitud.rh_id,
        "sol_aprobacion": solicitud.sol_aprobacion,
        "ofe_id": solicitud.ofe_id,
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO solicitud (cand_id, sol_id, rh_id, sol_aprobacion,ofe_id) VALUES (%(cand_id)s, %(sol_id)s, %(rh_id)s, %(sol_aprobacion)s), %(ofe_id)s', new_solicitud)
    db.connection.commit()
    return "Solicitud created successfully"

@APIProcesoContratacion.put('/solicitud/{sol_id}')
def update_solicitud(sol_id: int, solicitud: solicitud):
    updated_solicitud = {
        "sol_id": solicitud.sol_id,
        "cand_id": solicitud.cand_id,
        "ofe_id": solicitud.ofe_id,
        "rh_id": solicitud.rh_id,
        "sol_aprobacion": solicitud.sol_aprobacion,
    }
    cur = db.connection.cursor()
    cur.execute ('UPDATE solicitud SET cand_id=%(cand_id)s, sol_aprobacion=%(sol_aprobacion)s, ofe_id=%(ofe_id)s WHERE sol_id=%(sol_id)s', updated_solicitud)
    db.connection.commit()
    return "Solicitud updated successfully"

@APIProcesoContratacion.delete('/solicitud/{sol_id}')
def delete_solicitud(sol_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM solicitud WHERE sol_id=%s', (sol_id,))
    db.connection.commit()
    return "Solicitud deleted successfully"


# CRUD Completo para titulo_exp
@APIProcesoContratacion.get('/titulo_exp')
def get_titulos_exp():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM titulo_exp')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/titulo_exp')
def create_titulo_exp(titulo_exp: titulo_exp):
    new_titulo_exp = {
        "tx_id": titulo_exp.tx_id,
        "rq_id": titulo_exp.rq_id,
        "tx_descripcion": titulo_exp.tx_descripcion,
        "tx_datalle": titulo_exp.tx_datalle,
        "tx_puntaje_min": titulo_exp.tx_puntaje_min,
        "tx_puntaje_max": titulo_exp.tx_puntaje_max,
        "tx_puntaje_asignado": titulo_exp.tx_puntaje_asignado,
        "tx_observacion": titulo_exp.tx_observacion
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO titulo_exp (tx_id, rq_id, tx_descripcion, tx_datalle, tx_puntaje_min, tx_puntaje_max, tx_puntaje_asignado, tx_observacion) VALUES (%(tx_id)s, %(rq_id)s, %(tx_descripcion)s, %(tx_datalle)s, %(tx_puntaje_min)s, %(tx_puntaje_max)s, %(tx_puntaje_asignado)s, %(tx_observacion)s)', new_titulo_exp)
    db.connection.commit()
    return "Titulo_exp created successfully"

@APIProcesoContratacion.put('/titulo_exp/{tx_id}')
def update_titulo_exp(tx_id: int, titulo_exp: titulo_exp):
    updated_titulo_exp = {
        "tx_id": titulo_exp.tx_id,
        "rq_id": titulo_exp.rq_id,
        "tx_descripcion": titulo_exp.tx_descripcion,
        "tx_datalle": titulo_exp.tx_datalle,
        "tx_puntaje_min": titulo_exp.tx_puntaje_min,
        "tx_puntaje_max": titulo_exp.tx_puntaje_max,
        "tx_puntaje_asignado": titulo_exp.tx_puntaje_asignado,
        "tx_observacion": titulo_exp.tx_observacion
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE titulo_exp SET tx_id=%(tx_id)s, rq_id=%(rq_id)s, tx_descripcion=%(tx_descripcion)s, tx_datalle=%(tx_datalle)s, tx_puntaje_min=%(tx_puntaje_min)s, tx_puntaje_max=%(tx_puntaje_max)s, tx_puntaje_asignado=%(tx_puntaje_asignado)s, tx_observacion=%(tx_observacion)s WHERE tx_id=%(tx_id)s', updated_titulo_exp)
    db.connection.commit()
    return "Titulo_exp updated successfully"

@APIProcesoContratacion.delete('/titulo_exp/{tx_id}')
def delete_titulo_exp(tx_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM titulo_exp WHERE tx_id=%s', (tx_id,))
    db.connection.commit()
    return "Titulo_exp deleted successfully"


# CRUD Completo para personal_academico
@APIProcesoContratacion.get('/personal_academico')
def get_personal_academicos():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM personal_academico')
    result = cur.fetchall()
    print(result)
    return result

@APIProcesoContratacion.post('/personal_academico')
def create_personal_academico(personal: personal_academico):
    new_personal = {
        "pa_nombre": personal.pa_nombre,
        "pa_descripcion": personal.pa_descripcion
    }
    cur = db.connection.cursor()
    cur.execute('INSERT INTO personal_academico (pa_nombre, pa_descripcion) VALUES (%(pa_nombre)s, %(pa_descripcion)s)', new_personal)
    db.connection.commit()
    return "Personal academico created successfully"

@APIProcesoContratacion.put('/personal_academico/{pa_id}')
def update_personal_academico(pa_id: int, personal: personal_academico):
    updated_personal = {
        "pa_id": personal.pa_id,
        "pa_nombre": personal.pa_nombre,
        "pa_descripcion": personal.pa_descripcion
    }
    cur = db.connection.cursor()
    cur.execute('UPDATE personal_academico SET pa_nombre=%(pa_nombre)s, pa_descripcion=%(pa_descripcion)s WHERE pa_id=%(pa_id)s', updated_personal)
    db.connection.commit()
    return "Personal academico updated successfully"

@APIProcesoContratacion.delete('/personal_academico/{pa_id}')
def delete_personal_academico(pa_id: int):
    cur = db.connection.cursor()
    cur.execute('DELETE FROM personal_academico WHERE pa_id=%s', (pa_id,))
    db.connection.commit()
    return "Personal academico deleted successfully"





@APIProcesoContratacion.get('/titulo_exp_por_pa_id/{pa_id}')
def get_titulo_exp_por_pa_id(pa_id: int):
    cur = db.connection.cursor()
    cur.execute('''
        SELECT te.*
        FROM titulo_exp te
        JOIN requisito rq ON te.rq_id = rq.rq_id
        JOIN item it ON rq.it_id = it.it_id
        WHERE it.pa_id = %s
        ORDER BY te.tx_id ASC;
    ''', (pa_id,))

    fields = [field_md[0] for field_md in cur.description]
    result = [dict(zip(fields,row)) for row in cur.fetchall()]
    json_str = json.dumps(result, indent=4, default=str)
    print(json_str)
    return Response(content=json_str, media_type='application/json')

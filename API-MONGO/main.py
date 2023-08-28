from fastapi import FastAPI, UploadFile, File, Query, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pymongo import MongoClient
from datetime import datetime
from pydantic import BaseModel
from typing import List
import base64
import io
import zipfile
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from io import BytesIO
from datetime import datetime
import base64

app = FastAPI()

# Configura la conexión a la base de datos MongoDB
origins = [
    "http://localhost:3000",  # Origen permitido
]

client = MongoClient("mongodb://localhost:27017/")
db = client["Documentos"]
collection = db["files"]

# Configura la conexión a la base de datos MongoDB
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
client = MongoClient("mongodb://localhost:27017/")
db = client["Documentos"]
collection = db["files"]

from pydantic import BaseModel
from typing import List

class Calificacion(BaseModel):
    documento_nombre: str
    calificacion: int  # Sin tilde

class ListaCalificaciones(BaseModel):
    calificaciones: List[Calificacion]



@app.post("/guardar_documentos/")
async def guardar_documentos(
    nombres: List[str] =Form(..., explode=True), 
    tipo_documento: str = Form(...),
    id_usuario: str = Form(...),
    archivos: List[UploadFile] = File(...),
    calificaciones: List[int] = Form(..., explode=True)
):

    if len(calificaciones) != len(archivos):
     raise HTTPException(status_code=422, detail="La cantidad de calificaciones y archivos no coincide")
 
    print(f"Recibidos {len(nombres)} nombres y {len(archivos)} archivos.")  # Registro para depuración
    for nombre in nombres:
     print(f"Nombre recibido: {nombre}")
    for archivo in archivos:
     print(f"Nombre recibido: {archivo}")
    # Asegurarse de que la cantidad de nombres y archivos coincida
    if len(nombres) != len(archivos):
        raise HTTPException(status_code=422, detail="La cantidad de nombres y archivos no coincide")
    

    # Resto del código...
    fecha_actual = datetime.now()
    documentos_a_insertar = []

    for idx, archivo in enumerate(archivos):
        nombre = nombres[idx]
        calificacion = calificaciones[idx]  # <-- Nueva línea
        contenido_binario = await archivo.read()
        contenido_base64 = base64.b64encode(contenido_binario).decode('utf-8')

        documento = {
            "nombre": nombre,
            "contenido": contenido_base64,
            "tipo_documento": tipo_documento,
            "calificacion": calificacion  # <-- Nueva línea
        }

        documentos_a_insertar.append(documento)

    # Busca un documento existente con el id_usuario y fecha actual
    usuario_documento = collection.find_one({"id_usuario": id_usuario, "fecha": fecha_actual})

    if usuario_documento:
        collection.update_one(
            {"id_usuario": id_usuario, "fecha": fecha_actual},
            {"$push": {"documentos": {"$each": documentos_a_insertar}}}
        )
    else:
        nuevo_documento = {
            "id_usuario": id_usuario,
            "fecha": fecha_actual,
            "documentos": documentos_a_insertar
        }
        collection.insert_one(nuevo_documento)

    return {"mensaje": "Documentos guardados"}

# ... Resto del código ...

@app.get("/obtener_documento/")
async def obtener_documento(id_usuario: str, doc_idx: int):
    documento = collection.find_one({"id_usuario": id_usuario})

    if not documento:
        raise HTTPException(status_code=404, detail="Documento no encontrado")

    if doc_idx < 0 or doc_idx >= len(documento["documentos"]):
        raise HTTPException(status_code=404, detail="Índice de documento no válido")

    contenido_base64 = documento["documentos"][doc_idx]["contenido"]
    contenido_binario = base64.b64decode(contenido_base64)

    return StreamingResponse(BytesIO(contenido_binario), media_type="application/pdf")


@app.get("/calificaciones_documentos/{id_usuario}")
def obtener_calificaciones(id_usuario: str):
    try:
        documentos = collection.find_one({"id_usuario": id_usuario}, {"documentos.calificacion": 1, "_id": 0})
        
        # Si encontramos los documentos para el id_usuario
        if documentos and 'documentos' in documentos:
            return {"calificaciones": [doc["calificacion"] for doc in documentos["documentos"]]}
        
        # Si no encontramos ningún documento para el id_usuario
        else:
            raise HTTPException(status_code=404, detail="No se encontraron documentos para el id_usuario proporcionado.")
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.put("/actualizar_calificaciones/{id_usuario}")
def actualizar_calificaciones(id_usuario: str, lista_calificaciones: ListaCalificaciones):
    try:
        for calificacion_item in lista_calificaciones.calificaciones:
            collection.update_one(
                {"id_usuario": id_usuario, "documentos.nombre": calificacion_item.documento_nombre},
                {"$set": {"documentos.$.calificacion": calificacion_item.calificacion}}
            )
            
        # Puedes devolver una respuesta genérica indicando que la operación fue realizada
        return {"status": "success", "message": "Las calificaciones han sido actualizadas."}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/validar_documento/{id_usuario}")
def validar_documento(id_usuario: str):
    documento = collection.find_one({"id_usuario": id_usuario, "documentos": {"$exists": True}})
    
    if documento:
        return {"valido": True}
    else:
        return {"valido": False}
@app.post("/guardar_calificaciones/")
async def guardar_calificaciones(
    nombres: List[str] = Form(..., explode=True), 
    id_usuario: str = Form(...),
    calificaciones: List[int] = Form(..., explode=True)
):

    if len(calificaciones) != len(nombres):
        raise HTTPException(status_code=422, detail="La cantidad de calificaciones y nombres no coincide")
 
    print(f"Recibidos {len(nombres)} nombres.")  # Registro para depuración
    for nombre in nombres:
        print(f"Nombre recibido: {nombre}")

    # Asegurarse de que la cantidad de nombres y calificaciones coincida
    if len(nombres) != len(calificaciones):
        raise HTTPException(status_code=422, detail="La cantidad de nombres y calificaciones no coincide")

    # Resto del código...
    fecha_actual = datetime.now()
    calificaciones_a_insertar = []

    for idx, nombre in enumerate(nombres):
        calificacion_valor = calificaciones[idx]

        calificacion = {
            "nombre": nombre,
            "calificacion": calificacion_valor
        }

        calificaciones_a_insertar.append(calificacion)

    # Busca una calificación existente con el id_usuario y fecha actual
    usuario_calificacion = collection.find_one({"id_usuario": id_usuario, "fecha": fecha_actual})

    if usuario_calificacion:
        collection.update_one(
            {"id_usuario": id_usuario, "fecha": fecha_actual},
            {"$push": {"calificaciones": {"$each": calificaciones_a_insertar}}}
        )
    else:
        nueva_calificacion = {
            "id_usuario": id_usuario,
            "fecha": fecha_actual,
            "calificaciones": calificaciones_a_insertar
        }
        collection.insert_one(nueva_calificacion)

    return {"mensaje": "Calificaciones guardadas"}

# ... Resto del código ...

@app.get("/obtener_calificaciones/{id_usuario}")
async def obtener_calificaciones(id_usuario: str):

    # Consultar las calificaciones del usuario en la base de datos
    usuario_calificacion = collection.find_one({"id_usuario": id_usuario})
    
    # Verificar si encontramos alguna calificación para el usuario
    if usuario_calificacion and "calificaciones" in usuario_calificacion:
        # Extraer solo los valores de las calificaciones
        calificaciones_list = [item["calificacion"] for item in usuario_calificacion["calificaciones"]]
        return {"calificaciones": calificaciones_list}
    else:
        raise HTTPException(status_code=404, detail="Calificaciones para el usuario no encontradas")


@app.get("/descargar_documentos_zip/{id_usuario}")
def descargar_documentos_zip(id_usuario: str):
    documentos_pdf_cursor = collection.find(
        {"id_usuario": id_usuario, "documentos.tipo_documento": "pdf"},
        {"documentos.nombre": 1, "documentos.contenido": 1}
    )

    documentos_pdf = list(documentos_pdf_cursor)

    if documentos_pdf:
        zip_filename = f"{id_usuario}_documentos.zip"
        with io.BytesIO() as zip_buffer:
            with zipfile.ZipFile(zip_buffer, 'w') as zipf:
                for documento in documentos_pdf:
                    for doc in documento["documentos"]:
                        nombre = doc["nombre"]
                        contenido_base64 = doc["contenido"]
                        contenido_binario = base64.b64decode(contenido_base64)
                        zipf.writestr(nombre, contenido_binario)

            zip_buffer.seek(0)
            return StreamingResponse(
                iter([zip_buffer.getvalue()]),
                media_type="application/zip",
                headers={
                    "Content-Disposition": f"attachment; filename={zip_filename}"
                },
            )
    else:
        raise HTTPException(status_code=404, detail="No se encontraron documentos PDF para el usuario")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)

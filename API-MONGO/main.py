from fastapi import FastAPI, UploadFile, File, Query, Form
from fastapi.responses import StreamingResponse
from pymongo import MongoClient
from datetime import datetime
from pydantic import BaseModel
import base64
import io

app = FastAPI()

# Configura la conexión a la base de datos MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["Documentos"]
collection = db["files"]

class Documento(BaseModel):
    nombre: str
    tipo: str
    tipo_documento: str  # Nuevo campo Tipo_documento
    id_usuario: str

@app.post("/guardar_documento/")
def guardar_documento(
    nombre: str = Form(...),
    tipo: str = Form(...),
    tipo_documento: str = Form(...),  # Agregar el campo Tipo_documento
    id_usuario: str = Form(...),
    archivo: UploadFile = File(...),
):
    contenido_binario = archivo.file.read()
    contenido_base64 = base64.b64encode(contenido_binario).decode('utf-8')  # Convertir a base64
    
    nuevo_documento = {
        "nombre": nombre,
        "tipo": tipo,
        "tipo_documento": tipo_documento,  # Guardar el valor en MongoDB
        "contenido": contenido_base64,
        "id_usuario": id_usuario,
        "fecha": datetime.now()
    }
    
    resultado = collection.insert_one(nuevo_documento)
    return {"mensaje": "Documento guardado", "id": str(resultado.inserted_id)}

@app.get("/descargar_documento/")
def descargar_documento(nombre: str, id_usuario: str):
    documento = collection.find_one({"nombre": nombre, "id_usuario": id_usuario})
    
    if documento:
        contenido_base64 = documento["contenido"]
        contenido_binario = base64.b64decode(contenido_base64)
        
        archivo = io.BytesIO(contenido_binario)
        tipo_archivo = documento["tipo"]  # Obtener el tipo de archivo de MongoDB
        
        return StreamingResponse(iter([archivo.getvalue()]), media_type=f"application/{tipo_archivo}", headers={"Content-Disposition": f"attachment; filename={nombre}"})
    else:
        return {"mensaje": "Documento no encontrado"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)

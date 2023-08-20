from config.db import connection

def create_id ():
    cur = connection.cursor()
    cur.execute('SELECT MAX(ownerid) FROM owner')
    result = cur.fetchone()
    letras = ""
    numeros = ""
    id = ""
    for i in result[0]:
        if i.isalpha():
            letras += i
        else:
            numeros += i
    print(numeros[0])
    if numeros[0]=="0":
        cambio  = int(numeros)+1
        nuevo = str(cambio)
        nuevo = "0"+nuevo
        id = letras+nuevo
        return id
    else:
        cambio = int(numeros)+1
        nuevo = str(cambio)
        id = letras+nuevo
        return id
    
def validate_username(str):
    cur = connection.cursor()
    cur.execute('SELECT ownerusername FROM owner')
    result = cur.fetchall()
    for i in result:
        if i[0] == str:
            return False
    return True
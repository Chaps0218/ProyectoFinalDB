FROM node:16-alpine

WORKDIR /app

# Copia primero solo los archivos de dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

EXPOSE 8800

CMD ["npm", "start"]

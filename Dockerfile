FROM node:18

#crea la carpeta de trabajo donde va todo lo necesario para correr la aplicacion
WORKDIR /app
#copia todos los archivos que empiecen con package y terminen en .json a la carpeta de trabajo
COPY package*.json ./
#Se crea la carpeta node_modules dentro del contenedor
RUN npm install

#copiar los archivos restantes del programa a la carpeta
COPY ./src/sicei.js ./

#ejecutar la app
CMD ["npm","start"]

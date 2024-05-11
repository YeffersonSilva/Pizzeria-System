# Establecer la imagen base
FROM node:16-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar los archivos package.json y package-lock.json (o yarn.lock si usas Yarn)
COPY package*.json ./
COPY yarn.lock ./

# Instalar dependencias
RUN yarn install --frozen-lockfile

# Copiar todos los archivos de la aplicación al contenedor
COPY . .

# Compilar el código TypeScript a JavaScript
RUN yarn build

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3333

# Comando para ejecutar la aplicación
CMD ["node", "dist/index.js"]

# Glucosa API

API base construida con **Node.js**, **Express**, **Sequelize**, **PostgreSQL (Neon)** y variables de entorno.
Incluye **nodemon**, **CORS**, **Morgan** y **Helmet** para desarrollo y seguridad.

---

## 📁 Estructura del proyecto

```
glucosa-api/
│── src/
│   ├── config/
│   │   └── database.js          # Configuración opcional Sequelize
│   ├── models/                  # Modelos Sequelize
│   ├── controllers/             # Controladores 
│   ├── db/                      # Controladores 
│   │   └── migrations/          # Migraciones (Cambios a la db)
│   │   └── seeders/             # Seeders (Valores insertados)
│   ├── repositories/            # Repositorios
│   ├── routes/
│   │   └── index.routes.js      # Rutas Express
│   ├── services/                # Servicios
│   ├── app.js                   # Configuración de Express
│   └── server.js                # Servidor principal
│── config/
│   └── config.js                # Configuración Sequelize CLI
│── .env                         # Variables de entorno
│── package.json
│── .gitignore
```

---
---

## ⚙️ Instalación inicial

1. Clonar el repositorio:

```bash
git clone https://github.com/Jesp11/glucosa-api
cd glucosa-api
```

2. Instalar dependencias:

```bash
npm install
```

---

## ⚙️ Dependencias

### Producción

```
npm install express sequelize pg pg-hstore dotenv cors morgan helmet
```

### Desarrollo

```
npm install --save-dev sequelize-cli nodemon
```

---

## 📝 Configuración de variables de entorno

Crea un archivo `.env` en la raíz:

```
PORT=3000
DB_URL=postgres://usuario:password@ep-xxx.us-east-2.aws.neon.tech/mi_base?sslmode=require
```
> ⚠️ No subas este archivo al repositorio.
---

## 🚀 Inicialización del proyecto

1. Inicializa Sequelize CLI (si aún no está):

```
npx sequelize-cli init
```

2. Crear modelos y migraciones de ejemplo:

```
npx sequelize-cli model:generate --name Usuario --attributes nombre:string,email:string
```

3. Ejecutar migraciones para crear las tablas en la base de datos:

```
npx sequelize-cli db:migrate
```

4. (Opcional) Ejecutar seeders para datos de prueba:

```
npx sequelize-cli db:seed:all
```

---

## 🛠️ Scripts de `package.json`

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js",
  "migrate": "sequelize-cli db:migrate",
  "seed": "sequelize-cli db:seed:all",
  "model": "sequelize-cli model:generate"
}
```

* `npm start` → iniciar servidor en modo producción
* `npm run dev` → iniciar servidor con **nodemon** (recarga automática)
* `npm run migrate` → ejecutar migraciones
* `npm run seed` → ejecutar seeders
* `npm run model` → generar un nuevo modelo con Sequelize CLI

---

## 🔹 Middlewares incluidos

* **cors** → Permite peticiones desde otros dominios
* **morgan** → Logger de peticiones HTTP
* **helmet** → Seguridad básica con headers HTTP
* **express.json() / express.urlencoded()** → Parseo de JSON y formularios

---

## 🔹 Rutas disponibles (ejemplo `Usuario`)

| Método | URL                 | Acción                        |
| ------ | ------------------- | ----------------------------- |
| GET    | `/api/health`       | Verificar que la API funciona |
| GET    | `/api/usuarios`     | Obtener todos los usuarios    |
| GET    | `/api/usuarios/:id` | Obtener un usuario por ID     |
| POST   | `/api/usuarios`     | Crear un nuevo usuario        |
| PUT    | `/api/usuarios/:id` | Actualizar usuario            |
| DELETE | `/api/usuarios/:id` | Eliminar usuario              |

---

## 🔹 Iniciar el servidor

```bash
npm run dev
```

* El servidor correrá en el puerto definido en `.env` (por defecto `3000`).
* La base de datos se conectará automáticamente usando Sequelize y Neon.

---

## ⚠️ Notas

* Neon requiere conexión con SSL (`?sslmode=require`).
* No subas tu `.env` al repositorio.
* La carpeta `node_modules` no debe subirse (`.gitignore` incluida).

---

## 📌 Recursos útiles

* [Sequelize Docs](https://sequelize.org/)
* [Express Docs](https://expressjs.com/)
* [Neon Docs](https://neon.tech/docs)
* [Nodemon](https://nodemon.io/)
* [Helmet](https://helmetjs.github.io/)
* [CORS](https://www.npmjs.com/package/cors)
* [Morgan](https://www.npmjs.com/package/morgan)


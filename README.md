# Back-Tutorias

## Descripción 

Este backend corresponde al proyecto **Plataforma Web de Tutorías Universitarias**, una aplicación donde los estudiantes puedan ofrecer tutorías en materias específicas y otros estudiantes puedan agendar sesiones según disponibilidad, de forma rápida, organizada y segura.

Está construido usando el stack **Node.js + Express + MongoDB**.

---

## Estructura del Proyecto

Back-Tutorias/
├── server.js # Punto de entrada principal del servidor
├── routes/ # Rutas HTTP agrupadas por entidad
│ └── sessionRoutes.js # Rutas relacionadas con sesiones de tutoría
├── models/ # Esquemas de Mongoose para MongoDB
│ └── (esperado: user.js, session.js, subject.js)
├── controllers/ # Lógica para manejar peticiones y coordinar modelo-vista
├── config/ # Archivos de configuración (BD, entorno)
│ └── db.js # Conexión a MongoDB
├── .env # Variables de entorno (puerto, URI, etc.)
├── package.json # Dependencias y scripts del proyecto

-----


---

## Restricción Tecnológica

Lenguaje obligatorio: JavaScript (frontend y backend).

---

## Componentes Principales

### `server.js`
Archivo principal del backend. Carga:
- Configuración de entorno (`dotenv`)
- Middleware (`express.json`, `cors`)
- Conexión a la base de datos (`db.js`)
- Enrutadores (`/api`)

### `routes/`
Contiene los endpoints de la API REST.

### `models/`
Define los esquemas de datos usados en MongoDB.
- Usuario (tutor o estudiante)
- Materias ofrecidas
- Sesiones agendadas

### `controllers/`
Maneja la lógica del negocio. Aquí se procesan las peticiones antes de responder al cliente.

### `config/db.js`
Establece la conexión a la base de datos MongoDB mediante Mongoose.

---

## Autenticación y Seguridad

- Autenticación básica (correo y contraseña).
- Las rutas están pensadas para segmentarse por **roles** (estudiante o tutor).

---

## Despliegue

1. Instala las dependencias
    npm install

2. Ejecuta el servidor en desarrollo
    npm run dev

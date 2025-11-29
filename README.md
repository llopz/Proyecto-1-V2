# Proyecto Biblioteca -- Backend (Node + Express + MongoDB)

Este proyecto implementa el backend de un sistema para la gestión de una
biblioteca universitaria.\
Incluye manejo de usuarios, libros, reservas, autenticación con JWT,
asignación de permisos y control de acceso.

## Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- TypeScript
- JWT (jsonwebtoken)
- argon2
- dotenv

## Estructura del Proyecto

    core/
     │── database.ts
    src/
     |
     │── user/
     │── book/
     │── borrow/
     │── security/
     └── server.ts

## Sistema de Permisos

Debe crearse inicialmente la siguiente lista de permisos:

### Permisos de Gestión de Libros

1.  CREAR_LIBRO
2.  MODIFICAR_LIBRO
3.  INHABILITAR_LIBRO

### Permisos de Gestión de Usuarios

4.  MODIFICAR_USUARIO (no necesario para modificarse a sí mismo)
5.  INHABILITAR_USUARIO (no necesario para inhabilitarse a sí mismo)
6.  GESTIONAR_PERMISOS

## Middlewares principales

- authMiddleware
- requirePermission()
- canModifyUser
- canDisableUser

## Variables de entorno

    MONGO_URI=...
    JWT_SECRET=...
    JWT_EXPIRES_IN=1d
    PORT=8080

## Ejecución

    npm install
    npm run dev

## 🚀 ENDPOINTS PARA PROBAR EL SISTEMA

La base de todos los _endpoints_ es: `http://localhost:8080`

---

### 🔑 AUTENTICACIÓN

| Método   | Endpoint          | Descripción               | Body/Headers                                                                  |
| :------- | :---------------- | :------------------------ | :---------------------------------------------------------------------------- |
| **POST** | `/api/auth/login` | Inicia sesión del usuario | **Body:**<br>`json\n{\n  "email": "test@test.com",\n  "password": "123"\n}\n` |

---

### 👤 USUARIOS

| Método     | Endpoint                           | Descripción                              | Body/Headers                                                                                                                                                            |
| :--------- | :--------------------------------- | :--------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **POST**   | `/api/users/`                      | Crea un nuevo usuario.                   | **Body:**<br>`json\n{\n  "name": "Luis",\n  "lastname": "Lopez",\n  "email": "test@test.com",\n  "password": "123"\n}\n`                                                |
| **GET**    | `/api/users`                       | Obtiene la lista de todos los usuarios.  |
| **GET**    | `/api/users/:id`                   | Obtener usuario por id.                  |
| **PUT**    | `/api/users/:id`                   | Actualiza un usuario por ID.             | **Headers:** `Authorization: Bearer <token>`<br>**Body (campo(s) a cambiar):**<br>`json\n{\n  "name": "Luis",\n  "lastname": "Lopez",\n  "email": "test@test.com"\n}\n` |
| **DELETE** | `/api/users/:id`                   | Elimina un usuario por ID (soft delete). | **Headers:** `Authorization: Bearer <token>`                                                                                                                            |
| **PUT**    | `/api/users/:id/addPermissions`    | Asigna un permiso a un usuario.          | **Body:**<br>`json\n{\n  "permissionName": "CREAR_LIBRO"\n}\n`                                                                                                          |
| **PUT**    | `/api/users/:id/removePermissions` | Elimina un permiso de un usuario.        | **Body:**<br>`json\n{\n  "permissionName": "CREAR_LIBRO"\n}\n`                                                                                                          |

---

### 📚 LIBROS

| Método     | Endpoint          | Descripción                            | Body/Headers                                                                                                                                                                                                                      |
| :--------- | :---------------- | :------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **GET**    | `/api/libros`     | Busca libros con filtros (opcionales). | **Query Params:** `?titulo=harry&autor=gabo&editorial=MundoFiccion&disponible=true&page=1&limit=10`                                                                                                                               |
| **GET**    | `/api/libros/:id` | Busca libros por id.                   |
| **POST**   | `/api/libros`     | Crea un nuevo libro.                   | **Headers:** `Authorization: Bearer <token>`<br>**Body:**<br>`json\n{\n  "titulo": "Nuevo libro",\n  "autor": "Autor",\n  "editorial": "Casa",\n  "fechaPublicacion": "2020-01-01",\n  "genero": "Acción"\n}\n`                   |
| **PUT**    | `/api/libros/:id` | Actualiza un libro por ID.             | **Headers:** `Authorization: Bearer <token>`<br>**Body (campos a editar):**<br>`json\n{\n  "titulo": "Nuevo libro",\n  "autor": "Autor",\n  "editorial": "Casa",\n  "fechaPublicacion": "2020-01-01",\n  "genero": "Acción"\n}\n` |
| **DELETE** | `/api/libros/:id` | Elimina un libro por ID (soft delete). | **Headers:** `Authorization: Bearer <token>`                                                                                                                                                                                      |

---

### 🗓️ RESERVAS

| Método   | Endpoint                     | Descripción                                            | Body/Headers                                                                                                                     |
| :------- | :--------------------------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| **POST** | `/api/reservas`              | Crea una nueva reserva.                                | **Headers:** `Authorization: Bearer <token>`<br>**Body:**<br>`json\n{\n  "usuarioId": "usuarioId",\n  "libroId": "libroId"\n}\n` |
| **PUT**  | `/api/reservas/entregar/:id` | Marca la reserva correspondiente al id como entregada. | **Headers:** `Authorization: Bearer <token>`                                                                                     |
| **GET**  | `/api/reservas/libro/:id`    | Obtiene reservas por ID de libro.                      |                                                                                                                                  |
| **GET**  | `/api/reservas/usuario/:id`  | Obtiene reservas por ID de usuario.                    |                                                                                                                                  |
| **GET**  | `/api/reservas/`             | Obtiene todas las reservas.                            |                                                                                                                                  |

### 🛡️ PERMISOS

| Método     | Endpoint               | Descripción                          | Body/Headers                                                                                                                                        |
| :--------- | :--------------------- | :----------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| **POST**   | `/api/permissions`     | Crea un nuevo permiso.               | **Headers:** `Authorization: Bearer <token>`<br>**Body:**<br>`json\n{\n  "name": "NUEVO_PERMISO",\n  "description": "Descripción del permiso"\n}\n` |
| **GET**    | `/api/permissions`     | Lista todos los permisos existentes. | **Headers:** `Authorization: Bearer <token>`                                                                                                        |
| **DELETE** | `/api/permissions/:id` | Elimina un permiso por su ID.        | **Headers:** `Authorization: Bearer <token>`                                                                                                        |

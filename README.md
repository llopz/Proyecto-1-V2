# Proyecto Biblioteca -- Backend (Node + Express + MongoDB)

Este proyecto implementa el backend de un sistema para la gestión de una
biblioteca universitaria.\
Incluye manejo de usuarios, libros, reservas, autenticación con JWT,
asignación de permisos y control de acceso.

## Tecnologías Utilizadas

-   Node.js
-   Express.js
-   MongoDB + Mongoose
-   TypeScript
-   JWT (jsonwebtoken)
-   argon2
-   dotenv

## Estructura del Proyecto

    src/
     ├── core/
     │    ├── database.ts
     │    ├── middlewares/
     │    │       ├── authMiddleware.ts
     │    │       ├── requirePermission.ts
     │    │       ├── canModifyUser.ts
     │    │       └── canDisableUser.ts
     │
     ├── modules/
     │    ├── user/
     │    ├── book/
     │    ├── borrow/
     │    ├── permissions/
     │
     ├── app.ts
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

-   authMiddleware
-   requirePermission()
-   canModifyUser
-   canDisableUser

## Variables de entorno

    MONGO_URI=...
    JWT_SECRET=...
    JWT_EXPIRES_IN=1d
    PORT=8080

## Ejecución

    npm install
    npm run dev

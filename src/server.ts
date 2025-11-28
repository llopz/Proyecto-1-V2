import { Request, Response } from "express";
import { connectDB } from "../core/database";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

// API ROUTES IMPORTS
import userRoutes from "./user/user.routes";
import libroRoutes from "./book/book.routes";
import reservaRoutes from "./borrow/borrow.routes";
import authRoutes from "./security/auth/auth.routes";
import permissionRoutes from "./security/permission/permission.routes";

// MIDDLEWARES
const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const SERVER_VERSION = "/api/";
app.use(SERVER_VERSION + "permissions", permissionRoutes);
app.use(SERVER_VERSION + "auth", authRoutes);
app.use(SERVER_VERSION + "users", userRoutes);
app.use(SERVER_VERSION + "libros", libroRoutes);
app.use(SERVER_VERSION + "reservas", reservaRoutes);

// FALLBACKS

function routeNotFound(request: Request, response: Response) {
  response.status(404).json({
    message: "Route not found.",
  });
}

app.use(routeNotFound);

// CONNECT TO DB
connectDB();

// START SERVER
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server listening to port 8080.");
});

import { Router, Request, Response } from "express";
import {
  getLibrosController,
  getLibroByIdController,
  createLibroController,
  updateLibroController,
  deleteLibroController,
} from "./book.controller";

const libroRoutes = Router();

// GET ALL
libroRoutes.get("/", async (req: Request, res: Response) => {
  const libros = await getLibrosController();
  res.status(200).json(libros);
});

// GET BY ID
libroRoutes.get("/:id", async (req: Request, res: Response) => {
  const libro = await getLibroByIdController(req.params.id);
  if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
  res.status(200).json(libro);
});

// CREATE
libroRoutes.post("/", async (req: Request, res: Response) => {
  const nuevo = await createLibroController(req.body);
  res.status(201).json(nuevo);
});

// UPDATE
libroRoutes.put("/:id", async (req: Request, res: Response) => {
  const actualizado = await updateLibroController(req.params.id, req.body);
  if (!actualizado)
    return res.status(404).json({ error: "Libro no encontrado" });
  res.status(200).json(actualizado);
});

// DELETE (soft)
libroRoutes.delete("/:id", async (req: Request, res: Response) => {
  const eliminado = await deleteLibroController(req.params.id);
  if (!eliminado) return res.status(404).json({ error: "Libro no encontrado" });
  res.status(200).json({ message: "Libro deshabilitado", libro: eliminado });
});

export default libroRoutes;

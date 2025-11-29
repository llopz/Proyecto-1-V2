import { Router, Request, Response } from "express";
import { requirePermission } from "../middlewares/requirePermission";
import { requireAuth } from "../middlewares/requireAuth";
import {
  createPermission,
  getPermissions,
  deletePermission,
} from "./permission.controller";

const permissionRoutes = Router();

// Crear permiso
permissionRoutes.post(
  "/",
  requireAuth,
  requirePermission("GESTIONAR_PERMISOS"),
  async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const permiso = await createPermission(name, description);
    res.status(201).json(permiso);
  }
);

// Listar permisos
permissionRoutes.get("/", requireAuth, async (req: Request, res: Response) => {
  const permisos = await getPermissions();
  res.status(200).json(permisos);
});

// Eliminar permiso
permissionRoutes.delete(
  "/:id",
  requireAuth,
  requirePermission("GESTIONAR_PERMISOS"),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    await deletePermission(id);
    res.status(200).json({ message: "Permiso eliminado" });
  }
);

export default permissionRoutes;

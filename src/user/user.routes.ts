import { Router, Request, Response } from "express";
import { requireAuth } from "../security/middlewares/requireAuth";
import { requirePermission } from "../security/middlewares/requirePermission";
import canModifyUser from "../security/middlewares/canModifyUser";
import canDisableUser from "../security/middlewares/canDisableUser";
import {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
  assignPermission,
  removePermission,
} from "./user.controller";

const userRoutes = Router();

// GET ALL USERS
userRoutes.get("/", async (req: Request, res: Response) => {
  const users = await getUsersController();
  res.status(200).json(users);
});

// GET BY ID
userRoutes.get("/:id", async (req: Request, res: Response) => {
  const user = await getUserByIdController(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.status(200).json(user);
});

// CREATE USER
userRoutes.post("/", async (req: Request, res: Response) => {
  const newUser = await createUserController(req.body);
  res.status(201).json(newUser);
});

// UPDATE USER
userRoutes.put(
  "/:id",
  requireAuth,
  canModifyUser,
  async (req: Request, res: Response) => {
    const updated = await updateUserController(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updated);
  }
);

// ADD PERMISSION
userRoutes.put(
  "/:id/addPermissions",
  requireAuth,
  requirePermission("GESTIONAR_PERMISOS"),
  async (req: Request, res: Response) => {
    const updated = await assignPermission(
      req.params.id,
      req.body.permissionName
    );
    res.status(200).json(updated);
  }
);

// REMOVE PERMISSION
userRoutes.put(
  "/:id/removePermissions",
  requireAuth,
  requirePermission("GESTIONAR_PERMISOS"),
  async (req: Request, res: Response) => {
    const updated = await removePermission(
      req.params.id,
      req.body.permissionName
    );
    res.status(200).json(updated);
  }
);

// SOFT DELETE USER
userRoutes.delete(
  "/:id",
  requireAuth,
  canDisableUser,
  async (req: Request, res: Response) => {
    const deleted = await deleteUserController(req.params.id);
    if (!deleted) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User disabled", user: deleted });
  }
);

export default userRoutes;

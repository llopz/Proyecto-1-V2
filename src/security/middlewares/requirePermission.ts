import { Request, Response, NextFunction } from "express";

export function requirePermission(permissionName: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user) {
      return res.status(401).json({ error: "No autenticado" });
    }

    const hasPermission = user.permissions.some(
      (p: any) => p.name === permissionName
    );

    if (!hasPermission) {
      return res.status(403).json({
        error: "No tienes permiso para realizar esta acción",
        required: permissionName,
      });
    }

    next();
  };
}

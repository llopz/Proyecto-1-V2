import { Request, Response, NextFunction } from "express";

export function requirePermission(permission: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user) return res.status(401).json({ error: "No autenticado" });

    if (!user.permissions || !user.permissions.includes(permission))
      return res.status(403).json({ error: "Permiso insuficiente" });

    next();
  };
}

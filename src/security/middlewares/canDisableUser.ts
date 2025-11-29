import { Request, Response, NextFunction } from "express";

function canDisableUser(req: Request, res: Response, next: NextFunction) {
  const loggedUser = (req as any).user;
  const targetId = req.params.id;

  if (!loggedUser) {
    return res.status(401).json({ message: "No autenticado" });
  }

  if (loggedUser._id.toString() === targetId) {
    return next();
  }

  const hasPermission = loggedUser.permissions?.some(
    (p: any) => p.name === "INHABILITAR_USUARIO"
  );

  if (!hasPermission) {
    return res.status(403).json({
      message: "No tienes permiso para inhabilitar a otros usuarios",
      required: "INHABILITAR_USUARIO",
    });
  }

  next();
}

export default canDisableUser;

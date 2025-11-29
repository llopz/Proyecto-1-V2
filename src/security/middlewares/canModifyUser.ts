import { Request, Response, NextFunction } from "express";

function canModifyUser(req: Request, res: Response, next: NextFunction) {
  const loggedUser = (req as any).user;
  const targetId = req.params.id;

  if (!loggedUser) {
    return res.status(401).json({ message: "No autenticado" });
  }

  if (loggedUser._id.toString() === targetId) {
    return next();
  }

  const hasPermission = loggedUser.permissions?.some(
    (p: any) => p.name === "MODIFICAR_USUARIO"
  );

  if (!hasPermission) {
    return res.status(403).json({
      message: "Permiso insuficiente para modificar otros usuarios",
      required: "MODIFICAR_USUARIO",
    });
  }

  next();
}

export default canModifyUser;

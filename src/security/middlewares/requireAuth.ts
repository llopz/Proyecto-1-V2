import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../../user/user.model";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);

    // Cargar usuario REAL desde BD
    const user = await UserModel.findById(decoded.id).populate("permissions");

    if (!user) {
      return res.status(401).json({ error: "Usuario no encontrado" });
    }

    // Guardar usuario completo en req.user
    (req as any).user = user;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
}

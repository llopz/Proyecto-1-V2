import { Router, Request, Response } from "express";
import { requireAuth } from "../security/middlewares/requireAuth";
import { requirePermission } from "../security/middlewares/requirePermission";
import {
  createReservaController,
  entregarLibroController,
  historialLibroController,
  historialUsuarioController,
  getReservasController,
} from "./borrow.controller";

const reservaRoutes = Router();

reservaRoutes.post("/", requireAuth, async (req: Request, res: Response) => {
  const { usuarioId, libroId } = req.body;

  const reserva = await createReservaController(usuarioId, libroId);

  res.status(201).json(reserva);
});

reservaRoutes.put(
  "/entregar/:id",
  requireAuth,
  async (req: Request, res: Response) => {
    const reserva = await entregarLibroController(req.params.id);

    if (!reserva)
      return res.status(404).json({ error: "Reserva no encontrada" });

    res.status(200).json(reserva);
  }
);

reservaRoutes.get(
  "/libro/:id",
  requireAuth,
  async (req: Request, res: Response) => {
    const historial = await historialLibroController(req.params.id);
    res.status(200).json(historial);
  }
);

reservaRoutes.get(
  "/usuario/:id",
  requireAuth,
  async (req: Request, res: Response) => {
    const historial = await historialUsuarioController(req.params.id);
    res.status(200).json(historial);
  }
);

reservaRoutes.get("/", requireAuth, async (req: Request, res: Response) => {
  const reservas = await getReservasController();
  res.status(200).json(reservas);
});

export default reservaRoutes;

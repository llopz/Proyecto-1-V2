import { Router, Request, Response } from "express";
import { loginController } from "./auth.controller";

const authRoutes = Router();

authRoutes.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await loginController(email, password);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default authRoutes;

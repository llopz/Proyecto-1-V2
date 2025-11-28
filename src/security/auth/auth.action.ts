import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { UserModel, UserType } from "../../user/user.model";
import { response } from "express";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
const EXPIRES = process.env.JWT_EXPIRES_IN || "1h";

// LOGIN
async function loginAction(email: string, password: string) {
  const user = await UserModel.findOne({ email });

  //if (!user) throw new Error("Credenciales inválidas");
  if (!user) response.status(400).json({ mensage: "Credenciales inválidas" });

  const valid = await argon2.verify(user!.password, password);
  if (!valid) throw new Error("Credenciales inválidas");

  const token = jwt.sign(
    {
      id: user!._id.toString(),
      permissions: user!.permissions,
    },
    JWT_SECRET,
    { expiresIn: EXPIRES }
  );

  const userObj = user!.toObject();
  delete (userObj as any).password;

  return { token, user: userObj };
}

export { loginAction };

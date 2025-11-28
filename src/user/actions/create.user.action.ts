import { UserModel, UserType } from "../user.model";
import argon2 from "argon2";

// CREATE/REGISTER USER
async function createUserAction(userData: Partial<UserType>) {
  const { name, email, password } = userData;

  const exists = await UserModel.findOne({ email });
  if (exists) throw new Error("El email ya está registrado");

  const hashed = await argon2.hash(password!);

  const user = await UserModel.create({
    ...userData,
    password: hashed,
  });

  return { message: "Usuario registrado exitosamente", id: user._id };
}

export { createUserAction };

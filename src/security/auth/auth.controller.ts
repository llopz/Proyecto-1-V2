import { loginAction } from "./auth.action";

async function loginController(email: string, password: string) {
  return await loginAction(email, password);
}

export { loginController };

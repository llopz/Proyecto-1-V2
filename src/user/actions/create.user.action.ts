import { UserModel, UserType } from "../user.model";

// CREATE USER
async function createUserAction(
  userData: Partial<UserType>
): Promise<UserType> {
  return await UserModel.create(userData);
}

export { createUserAction };

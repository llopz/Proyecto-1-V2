import { UserModel, UserType } from "../user.model";

// GET ALL USERS
async function getUsersAction(): Promise<UserType[]> {
  return await UserModel.find({ enabled: true });
}

// GET USER BY ID
async function getUserByIdAction(id: string): Promise<UserType | null> {
  return await UserModel.findById(id);
}

export { getUsersAction, getUserByIdAction };

import { UserModel, UserType } from "../user.model";

// GET ALL USERS
async function getUsersAction(): Promise<UserType[]> {
  return await UserModel.find({ enabled: true }).select("-password");
}

// GET USER BY ID
async function getUserByIdAction(id: string): Promise<UserType | null> {
  return await UserModel.findById(id).select("-password");
}

export { getUsersAction, getUserByIdAction };

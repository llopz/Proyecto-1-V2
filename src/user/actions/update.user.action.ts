import { UserModel, UserType } from "../user.model";

// UPDATE USER
async function updateUserAction(
  id: string,
  userData: Partial<UserType>
): Promise<UserType | null> {
  return await UserModel.findByIdAndUpdate(id, userData, { new: true });
}

export { updateUserAction };

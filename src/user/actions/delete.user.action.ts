import { UserModel, UserType } from "../user.model";

// SOFT DELETE USER
async function deleteUserAction(id: string): Promise<UserType | null> {
  return await UserModel.findByIdAndUpdate(
    id,
    { enabled: false },
    { new: true }
  ).select("-password");
}

export { deleteUserAction };

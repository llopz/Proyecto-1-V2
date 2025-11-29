import { UserModel, UserType } from "../user.model";
import { PermissionModel } from "../../security/permission/permission.model";

// UPDATE USER
async function updateUserAction(
  id: string,
  userData: Partial<UserType>
): Promise<UserType | null> {
  return await UserModel.findByIdAndUpdate(id, userData, { new: true }).select(
    "-password"
  );
}

async function assignPermissionAction(userId: string, permissionName: string) {
  // Buscar permiso por nombre
  const permission = await PermissionModel.findOne({ name: permissionName });
  if (!permission) throw new Error("Permiso no encontrado");

  return await UserModel.findByIdAndUpdate(
    userId,
    { $addToSet: { permissions: permission._id } },
    { new: true }
  ).populate("permissions");
}

async function removePermissionAction(userId: string, permissionName: string) {
  const permission = await PermissionModel.findOne({ name: permissionName });
  if (!permission) throw new Error("Permiso no encontrado");

  return await UserModel.findByIdAndUpdate(
    userId,
    { $pull: { permissions: permission._id } },
    { new: true }
  ).populate("permissions");
}

export { assignPermissionAction, removePermissionAction, updateUserAction };

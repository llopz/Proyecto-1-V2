import { PermissionModel } from "./permission.model";

export async function createPermissionAction(
  name: string,
  description?: string
) {
  return await PermissionModel.create({ name, description });
}

export async function getPermissionsAction() {
  return await PermissionModel.find();
}

export async function deletePermissionAction(id: string) {
  return await PermissionModel.findByIdAndUpdate(
    id,
    { deleted: false },
    { new: true }
  );
}

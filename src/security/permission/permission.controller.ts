import {
  createPermissionAction,
  getPermissionsAction,
  deletePermissionAction,
} from "./permission.action";

export async function createPermission(name: string, description?: string) {
  return await createPermissionAction(name, description);
}

export async function getPermissions() {
  return await getPermissionsAction();
}

export async function deletePermission(id: string) {
  return await deletePermissionAction(id);
}

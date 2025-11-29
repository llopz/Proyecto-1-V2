import { createUserAction } from "./actions/create.user.action";
import { getUsersAction, getUserByIdAction } from "./actions/read.user.action";
import {
  updateUserAction,
  removePermissionAction,
  assignPermissionAction,
} from "./actions/update.user.action";
import { deleteUserAction } from "./actions/delete.user.action";

async function getUsersController() {
  return await getUsersAction();
}

async function getUserByIdController(id: string) {
  return await getUserByIdAction(id);
}

async function createUserController(data: any) {
  return await createUserAction(data);
}

async function updateUserController(id: string, data: any) {
  return await updateUserAction(id, data);
}

async function deleteUserController(id: string) {
  return await deleteUserAction(id);
}

async function assignPermission(id: string, permission: any) {
  return await assignPermissionAction(id, permission);
}

async function removePermission(id: string, permission: string) {
  return await removePermissionAction(id, permission);
}

export {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
  assignPermission,
  removePermission,
};

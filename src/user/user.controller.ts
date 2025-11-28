import { createUserAction } from "./actions/create.user.action";
import { getUsersAction, getUserByIdAction } from "./actions/read.user.action";
import { updateUserAction } from "./actions/update.user.action";
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

export {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
};

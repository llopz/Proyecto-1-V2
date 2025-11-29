import { deleteLibroAction } from "./actions/delete.book.action";
import { updateLibroAction } from "./actions/update.book.action";
import { createLibroAction } from "./actions/create.book.action";
import {
  getLibrosAction,
  getLibroByIdAction,
} from "./actions/read.book.action";
import { query } from "express";

async function getLibrosController(query: any) {
  return await getLibrosAction(query);
}

async function getLibroByIdController(id: string) {
  return await getLibroByIdAction(id);
}

async function createLibroController(data: any) {
  return await createLibroAction(data);
}

async function updateLibroController(id: string, data: any) {
  return await updateLibroAction(id, data);
}

async function deleteLibroController(id: string) {
  return await deleteLibroAction(id);
}

export {
  getLibrosController,
  getLibroByIdController,
  createLibroController,
  updateLibroController,
  deleteLibroController,
};

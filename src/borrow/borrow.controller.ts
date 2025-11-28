import { createReservaAction } from "./actions/create.borrow.action";
import { historialLibroAction } from "./actions/read.borrow.action";
import { historialUsuarioAction } from "./actions/read.borrow.action";
import { getReservasAction } from "./actions/read.borrow.action";
import { entregarLibroAction } from "./actions/update.borrow.action";

async function createReservaController(usuario: string, libro: string) {
  return await createReservaAction(usuario, libro);
}

async function entregarLibroController(id: string) {
  return await entregarLibroAction(id);
}

async function historialLibroController(id: string) {
  return await historialLibroAction(id);
}

async function historialUsuarioController(id: string) {
  return await historialUsuarioAction(id);
}

async function getReservasController() {
  return await getReservasAction();
}

export {
  createReservaController,
  entregarLibroController,
  historialLibroController,
  historialUsuarioController,
  getReservasController,
};

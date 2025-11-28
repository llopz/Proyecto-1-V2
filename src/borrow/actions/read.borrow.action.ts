import { ReservaModel, ReservaType } from "../borrow.model";

// GET HYSTORY BY BOOK
async function historialLibroAction(libroId: string) {
  return await ReservaModel.find({ libro: libroId })
    .populate("usuario", "name email")
    .populate("libro", "titulo autor");
}

// GET HISTORY BY USER
async function historialUsuarioAction(usuarioId: string) {
  return await ReservaModel.find({ usuario: usuarioId })
    .populate("usuario", "name email")
    .populate("libro", "titulo autor");
}

// GET ALL BORROWS
async function getReservasAction() {
  return await ReservaModel.find()
    .populate("usuario", "name email")
    .populate("libro", "titulo autor");
}

export { historialLibroAction, historialUsuarioAction, getReservasAction };

import { ReservaModel, ReservaType } from "../borrow.model";
import { Types } from "mongoose";
import { LibroModel } from "../../book/book.model";

// CREATE BORROW
async function createReservaAction(
  usuarioId: string,
  libroId: string
): Promise<ReservaType> {
  const reserva = await ReservaModel.create({
    usuario: usuarioId,
    libro: libroId,
    fechaReserva: new Date(),
  });

  await LibroModel.findByIdAndUpdate(libroId, { disponible: false });

  return reserva;
}

export { createReservaAction };

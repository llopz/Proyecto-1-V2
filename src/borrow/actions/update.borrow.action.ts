import { ReservaModel, ReservaType } from "../borrow.model";
import { LibroModel } from "../../book/book.model";

// UPDATE BORROW - REGISTER BOOK RETURN
async function entregarLibroAction(
  reservaId: string
): Promise<ReservaType | null> {
  const reserva = await ReservaModel.findByIdAndUpdate(
    reservaId,
    { fechaEntrega: new Date() },
    { new: true }
  );

  if (reserva) {
    // marcar libro como disponible
    await LibroModel.findByIdAndUpdate(reserva.libro, {
      disponible: true,
    });
  }

  return reserva;
}

export { entregarLibroAction };

import { model, Schema, Types } from "mongoose";

export type ReservaType = {
  usuario: Types.ObjectId;
  libro: Types.ObjectId;
  fechaReserva: Date;
  fechaEntrega?: Date;
};

const ReservaSchema = new Schema<ReservaType>({
  usuario: { type: Schema.Types.ObjectId, ref: "User", required: true },
  libro: { type: Schema.Types.ObjectId, ref: "Libro", required: true },
  fechaReserva: { type: Date, default: Date.now },
  fechaEntrega: { type: Date },
});

export const ReservaModel = model<ReservaType>("Reserva", ReservaSchema);

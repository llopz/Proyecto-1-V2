import { model, Schema } from "mongoose";

export type LibroType = {
  titulo: string;
  autor: string;
  descripcion?: string;
  disponible: boolean;
};

const LibroSchema = new Schema<LibroType>({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  descripcion: { type: String },
  disponible: { type: Boolean, default: true },
});

export const LibroModel = model<LibroType>("Libro", LibroSchema);

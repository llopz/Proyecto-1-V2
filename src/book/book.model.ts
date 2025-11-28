import { model, Schema } from "mongoose";

export type LibroType = {
  titulo: string;
  autor: string;
  genero?: string;
  fechaPublicacion?: Date;
  editorial?: string;
  descripcion?: string;
  disponible: boolean;
};

const LibroSchema = new Schema<LibroType>({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  genero: { type: String },
  fechaPublicacion: { type: Date },
  editorial: { type: String },
  descripcion: { type: String },
  disponible: { type: Boolean, default: true },
});

export const LibroModel = model<LibroType>("Libro", LibroSchema);

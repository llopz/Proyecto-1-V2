import { model, Schema } from "mongoose";

type LibroType = {
  titulo: string;
  autor: string;
  genero: string;
  editorial: string;
  fechaPublicacion: Date;
  descripcion?: string;
  disponible: boolean;
};

const LibroSchema = new Schema<LibroType>({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  genero: { type: String, required: true },
  editorial: { type: String, required: true },
  fechaPublicacion: { type: Date, required: true },
  descripcion: { type: String },
  disponible: { type: Boolean, default: true },
});

const LibroModel = model<LibroType>("Libro", LibroSchema);

export { LibroType, LibroModel };

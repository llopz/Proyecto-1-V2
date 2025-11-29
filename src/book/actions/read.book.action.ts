import { LibroModel, LibroType } from "../book.model";

// GET ALL WITH FILTERS
async function getLibrosAction(query: any) {
  const {
    titulo,
    autor,
    categoria,
    editorial,
    disponible,
    fechaInicio,
    fechaFin,
    page = 1,
    limit = 10,
  } = query;

  const filters: any = {};

  if (titulo) filters.titulo = new RegExp(titulo, "i");
  if (autor) filters.autor = new RegExp(autor, "i");
  if (categoria) filters.categoria = categoria;
  if (editorial) filters.editorial = editorial;

  if (disponible !== undefined) {
    filters.disponible = disponible === "true";
  }

  // Rango de fechas opcional
  if (fechaInicio || fechaFin) {
    filters.fechaPublicacion = {};

    if (fechaInicio) filters.fechaPublicacion.$gte = new Date(fechaInicio);
    if (fechaFin) filters.fechaPublicacion.$lte = new Date(fechaFin);
  }

  const skip = (Number(page) - 1) * Number(limit);

  const total = await LibroModel.countDocuments(filters);

  const libros = await LibroModel.find(filters)
    .select("titulo")
    .skip(skip)
    .limit(Number(limit));

  return {
    page: Number(page),
    totalPages: Math.ceil(total / Number(limit)),
    limit: Number(limit),
    totalResults: total,
    libros,
  };
}

// GET BY ID
async function getLibroByIdAction(id: string): Promise<LibroType | null> {
  return await LibroModel.findById(id);
}

export { getLibrosAction, getLibroByIdAction };

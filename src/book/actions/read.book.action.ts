import { LibroModel, LibroType } from "../book.model";

// GET ALL
async function getLibrosAction(): Promise<LibroType[]> {
  return await LibroModel.find({ disponible: true });
}

// GET BY ID
async function getLibroByIdAction(id: string): Promise<LibroType | null> {
  return await LibroModel.findById(id);
}

export { getLibrosAction, getLibroByIdAction };

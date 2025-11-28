import { LibroModel, LibroType } from "../book.model";

// CREATE
async function createLibroAction(data: Partial<LibroType>): Promise<LibroType> {
  return await LibroModel.create(data);
}

export { createLibroAction };

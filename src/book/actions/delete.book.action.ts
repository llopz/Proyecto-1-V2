import { LibroModel, LibroType } from "../book.model";

// SOFT DELETE
async function deleteLibroAction(id: string): Promise<LibroType | null> {
  return await LibroModel.findByIdAndUpdate(
    id,
    { disponible: false },
    { new: true }
  );
}

export { deleteLibroAction };

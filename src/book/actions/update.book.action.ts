import { LibroModel, LibroType } from "../book.model";

// UPDATE
async function updateLibroAction(
  id: string,
  data: Partial<LibroType>
): Promise<LibroType | null> {
  return await LibroModel.findByIdAndUpdate(id, data, { new: true });
}

export { updateLibroAction };

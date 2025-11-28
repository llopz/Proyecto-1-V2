import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    const uri = process.env.MONGO_URI as string;

    if (!uri) {
      throw new Error("ERROR: MONGO_URI no está definido en el archivo .env");
    }

    await mongoose.connect(uri);

    console.log("Conectado a MongoDB exitosamente");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    process.exit(1);
  }
}

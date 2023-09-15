import mongoose from "mongoose";
import config from "config"

// Logger
import Logger from "./logger";

export async function dbConnect() {
  const dbUri = config.get<string>("dbUri")

  try{

    await mongoose.connect(dbUri);
    Logger.info("Conectou ao banco de dados!")

  } catch(e) {
    Logger.error("Não foi possível conectar!")
    Logger.error(`Error: ${e}`)
    process.exit(1);
  }
}
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });

export const { PORT } = process.env;

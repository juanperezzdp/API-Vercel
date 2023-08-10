import { config } from "dotenv";

config();

export const mongodbURL =
  process.env.MONGODB_URL || "mongodb://0.0.0.0:27017/ApiCrud";

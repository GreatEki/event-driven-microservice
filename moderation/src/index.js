import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import router from "./router/index.js";

const app = express();

app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "./config/config.env") });

app.use("/moderation", router);

const PORT = process.env.PORT || 4002;

app.listen(PORT, () =>
  console.log(`Moderation service running on PORT ${PORT}`)
);

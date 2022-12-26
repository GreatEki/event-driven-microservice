import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import router from "./router/index.js";

const app = express();

app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "./config/config.env") });

app.use("/api/events", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Event bus is running on PORT ${PORT}`));

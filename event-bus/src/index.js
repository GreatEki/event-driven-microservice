import express from "express";
import dotenv from "dotenv";
import path from "path";
import router from "./router/index.js";

const app = express();

app.use(express.json());

dotenv.config();

app.use("/api/events", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Event bus is running on PORT ${PORT}`));

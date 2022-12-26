import express from "express";
import cors from "cors";
import router from "./router/index.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/comment", router);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () =>
  console.log(`Comments microservice running on PORT ${PORT}`)
);

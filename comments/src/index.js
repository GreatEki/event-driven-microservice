import express from "express";
import router from "./router/index.js";

const app = express();

app.use(express.json());

app.use("/api/comment", router);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () =>
  console.log(`Comments microservice running on PORT ${PORT}`)
);

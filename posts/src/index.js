import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use("/api/post", router);

app.listen(PORT, () =>
  console.log(`Post microservice running on PORT ${PORT}`)
);

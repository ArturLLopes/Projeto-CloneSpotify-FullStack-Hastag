import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 5005;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Olá, MUNDO!");
});

app.get("/artists", async (req, res) => {
    res.send(await db.collection("artists").find({}).toArray());
  });
  app.get("/songs", async (req, res) => {
    res.send(await db.collection("songs").find({}).toArray());
  });

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});

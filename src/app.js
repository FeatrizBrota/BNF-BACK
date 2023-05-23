import express from "express";
import cors from "cors"; // importe o pacote cors
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão com o banco"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();

// Configure o middleware cors para permitir solicitações de qualquer origem
app.use(cors());

app.use(express.json());
routes(app);

export default app;

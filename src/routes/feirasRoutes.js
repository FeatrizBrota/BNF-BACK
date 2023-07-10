import express from "express";
import FeiraController from "../controllers/feirasController.js";
import MensagemController from "../controllers/MensagemController.js";

const router = express.Router();

router
    .get("/feiras",FeiraController.listarFeiras)
    .get("/feiras/:id",FeiraController.listarFeirasPorId)
    .post("/feiras",FeiraController.cadastrarFeira)
    .put("/feiras/:id",FeiraController.atualizarFeira)
    .delete("/feiras/:id",FeiraController.excluirFeira)
    .get("/mensagens",MensagemController.listarMensagens)
    .post("/mensagens",MensagemController.cadastrarMensagem)

    export default router;
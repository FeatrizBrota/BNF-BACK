import express from "express";
import FeiraController from "../controllers/feirasController.js";


const router = express.Router();


router
    .get("/feiras",FeiraController.listarFeiras)
    .get("/feiras/:id",FeiraController.listarFeirasPorId)
    .post("/feiras",FeiraController.cadastrarFeira)
    .put("/feiras/:id",FeiraController.atualizarFeira)
    .delete("/feiras/:id",FeiraController.excluirFeira)

    export default router;
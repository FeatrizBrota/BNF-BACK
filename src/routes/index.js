import express from "express"
import feiras from "./feirasRoutes.js"
import { LoginController } from "../controllers/LoginController.js"

const routes = (app) =>{
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo: "Brota na feira"})
    })

    app.route('/login').post(new LoginController().handle);

    app.use(
        express.json(),
        feiras
    )
}

export default routes
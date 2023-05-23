import express from "express"
import feiras from "./feirasRoutes.js"

const routes = (app) =>{
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo: "Brota na feira"})
    })

    app.use(
        express.json(),
        feiras
    )
}

export default routes
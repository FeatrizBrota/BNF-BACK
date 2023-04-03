import express from "express";
import db from "./config/dbConnect.js";
import feiras from "./models/Feira.js";


db.on("error", console.log.bind(console,'Erro de conexão com o banco'))
db.once("open", ()=>{
    console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json())


// METODOS GET
app.get('/', (req, res)=>{
    res.status(200).send('Brota na Feira');
})


app.get('/feiras', (req, res)=>{
    feiras.find((err, feiras)=>{
        res.status(200).json(feiras);

    })
   
})

app.get('/feiras/:id', (req,res)=>{
    let index = buscaFeira(req.params.id);
    res.json(feiras[index]);

})

// METODOS GET


//METODOS POST
app.post('/feiras' ,(req,res)=>{
    feiras.push(req.body);
    res.status(201).send('feira cadastrada com sucesso')
})

//METODOS PUT
app.put('/feiras/:id', (req,res)=>{
    let index = buscaFeira(req.params.id);
    feiras[index].nome = req.body.nome;
    res.json(feiras);

})

//METODOS DELETE

app.delete('/feiras/:id', (req,res)=>{
    let {id} = req.params
    let index = buscaFeira(id);
    feiras.splice(index,1)
    res.send(`feira ${id} deletado com sucesso`);

})

function buscaFeira(id){
    return feiras.findIndex(feira => feira.id == id)
}

export default app
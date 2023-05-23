import feiras from "../models/Feira.js"

class FeiraController{

    static listarFeiras= (req,res)=>{
        feiras.find((err, feiras)=>{
            res.status(200).json(feiras);
    
        })

    }

    static listarFeirasPorId = (req,res) =>{
        const id =req.params.id
        feiras.findById(id,(err,feiras)=>{
            if(err){
                res.status(400).send({message: `${err.message} - id da feira não localizada`})
            } else {
                res.status(200).send(feiras)
            }
        })
    }

    static cadastrarFeira = (req,res)=>{
        let feira = new feiras(req.body);

        feira.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar feira`})
            } else {
                res.status(201).send(feira.toJSON())
            }
        })
    }

    static atualizarFeira = (req,res)=>{
        const id = req.params.id

        feiras.findByIdAndUpdate(id,{$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Feira atualizada com sucesso!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })

    }

    static excluirFeira = (req,res)=>{
        const id = req.params.id
        feiras.findByIdAndDelete(id,(err)=>{
            if (!err){
                res.status(200).send({message: 'Feira removida com sucesso'})
            } else{
                res.status(500).send({message: err.message})
            }
        })

    }
}

export default FeiraController
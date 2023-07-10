import mensagens from "../models/Mensagem.js"

class MensagemController{

    static listarMensagens= (req,res)=>{
        mensagens.find((err, mensagens)=>{
            res.status(200).json(mensagens);
    
        })

    }


    static cadastrarMensagem = (req,res)=>{
        let mensagem = new mensagens(req.body);

        mensagem.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar feira`})
            } else {
                res.status(201).send(mensagem.toJSON())
            }
        })
    }

}

export default MensagemController
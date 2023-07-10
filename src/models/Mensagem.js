import mongoose from "mongoose";

const MensagemSchema = new mongoose.Schema(
 {
       id:{type: Object},
       nome: {type: String, required: true},
       tipo: {type: String, required:true},
       mensagem: {type: String, required: true},
       email: {type: String, required: false},
       id_feira:{type: Object, required: false},

}
);

const mensagens = mongoose.model('mensagens', MensagemSchema)

export default mensagens;
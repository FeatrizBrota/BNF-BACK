import mongoose from "mongoose";

const feiraSchema = new mongoose.Schema(
 {
       id:{type: Object},
       nome: {type: String, required: true},
       bairro: {type: String, required: true},
       tipo: {type: String, required:true},
       endereco: {type: String, required: true},
       referencia: {type: String, required: false},
       observacao: {type: String, required: false},
       telefone: {type: String, required: false},
       link_maps: {type: String, required: true},
       dia_da_semana : {type: Array, required:true},
       horario_inicial: {type: String, required:true},
       horario_final: {type: String, required:true},

}
);

const feiras = mongoose.model('feira', feiraSchema)

export default feiras;
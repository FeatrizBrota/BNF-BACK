import mongoose from "mongoose";

const feiraSchema = new mongoose.Schema(
 {
       id:{type: Object},
       nome: {type: String, required: true},
       bairro: {type: String, required: true},
       tipo: {type: Array, required:true},
       dia_da_semana : {type: String, required:true},
       horario_inicial: {type: Date, required:true},
       horario_final: {type: Date, required:true},

}
);

const feiras = mongoose.model('feira', feiraSchema)

export default feiras;
import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  id: { type: Object },
  email: {type: String, required : true},
  nome: {type: String, required : true},
  foto: {type: String, required : false},
  jti: {type: String, required : false},
});

export default mongoose.model('usuario', usuarioSchema);
import Usuario from "../models/Usuario.js";

export default class UsuarioService {
  async execute({ email, name, picture, jti }) {
    const usuarioExistente = await Usuario.findOne({ jti }).exec();

    if (!usuarioExistente) {
      const novoUsuario = await Usuario.create({
        email,
        nome: name,
        foto: picture,
        jti,
      });

      console.log(`Usuario criado: ${novoUsuario._id}}`);
      return novoUsuario;
    }

    console.log("Retornando usuario EXISTENTE");
    return usuarioExistente;
  }
}

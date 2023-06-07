import jwtDecode from "jwt-decode";
import UsuarioService from "../services/UsuarioService.js";

export class LoginController {
  async handle(request, response) {
    const { token } = request.body;
    const usuarioService = new UsuarioService();

    const dadosGoogleAuth = jwtDecode(token);

    const user = await usuarioService.execute(dadosGoogleAuth);

    return response.json(user);
  }
}

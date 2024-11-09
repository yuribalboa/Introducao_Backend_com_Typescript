import GetRequest from "../dtos/get.request";
import IdadeHelper from "./idade.helper";

export default class BemvindoHelper {
    static criarMensagem(input: GetRequest): string{

        let mensagem = " Boas vindas "

        if(input.nome){
            mensagem = mensagem + input.nome + ", "
        } else {
            mensagem = mensagem + "visitante, "
        }

        if(input.idade){
            const ehAdulto = IdadeHelper.ehAdulto(parseInt(input.idade))

            if(ehAdulto){
                mensagem = mensagem + "você é maior de idade."
            } else {
                mensagem = mensagem + "você é menor de idade."
            }

        } else {
            mensagem = mensagem + "não consegui identificar sua idade."
        }

        return mensagem
    }
}
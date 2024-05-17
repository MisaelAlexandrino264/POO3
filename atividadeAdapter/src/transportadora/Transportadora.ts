import Rastreio from "../utils/Rastreio";
import ITransportadora from "./interfaces/ITranportadora";

export default class Transportadora implements ITransportadora{

    private rastreio : Rastreio;

    rastreioEncomenda(): Rastreio {
        return new Rastreio();
    }
    send(): void {
        this.rastreio = this.rastreioEncomenda();
        console.log("Seu código de rastreio é:" + this.rastreio.getRastreio());
        console.log("Objeto enviado pela Transportadora.");
    }
    receive(): void {
        console.log("Objeto recebido pela Transportadora.");
    }

}
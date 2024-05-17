import Rastreio from "../utils/Rastreio";
import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios{
    private rastreio : Rastreio;

    rastreioEncomenda(): Rastreio {
        return new Rastreio();
    }
    sendCorreios(): void {
        this.rastreio = this.rastreioEncomenda();
        console.log("Seu código de rastreio é:" + this.rastreio.getRastreio());
        console.log("Objeto enviado pelos Correios.");
    }
    receiveCorreios(): void {
        console.log("Objeto recebido por agência dos Correios.");
    }

}
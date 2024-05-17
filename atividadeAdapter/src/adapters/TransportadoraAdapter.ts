import ICorreios from "../correios/interfaces/ICorreios";
import Transportadora from "../transportadora/Transportadora";
import Rastreio from "../utils/Rastreio";

export default class TransportadoraAdapter implements ICorreios{
    private rastreio : Rastreio;

    constructor(private transportadora : Transportadora){

        console.log("Adaptando Transportadora nos Correios.");
    }
    rastreioEncomenda(): Rastreio {
        return new Rastreio();
    }
    sendCorreios(): void {
        return this.transportadora.send();
    }
    receiveCorreios(): void {
        return this.transportadora.receive();
    }

}
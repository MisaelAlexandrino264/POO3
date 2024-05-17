import Rastreio from "../../utils/Rastreio";

export default interface ITransportadora{

    rastreioEncomenda(): Rastreio;
    send(): void;
    receive(): void;

}
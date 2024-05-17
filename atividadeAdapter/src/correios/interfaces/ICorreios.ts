import Rastreio from "../../utils/Rastreio";

export default interface ICorreios{

    rastreioEncomenda(): Rastreio;
    sendCorreios(): void;
    receiveCorreios(): void;
    
}
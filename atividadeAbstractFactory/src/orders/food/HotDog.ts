import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    startDelivery(): void {
        this.getCargo();
        console.log("Cachorro Quente:Seu pedido saiu para entrega...");
    }
    getCargo(): void {
        console.log("Cachorro Quente: Seu pedido está em produção!");
    }

}
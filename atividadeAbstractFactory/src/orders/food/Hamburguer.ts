import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    startDelivery(): void {
        this.getCargo();
        console.log("Hamburguer: Seu pedido saiu para entrega...")
    }
    getCargo(): void {
        console.log("Hamburguer: Seu pedido está em produção!")
    }

}
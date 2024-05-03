import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery(): void {
        this.getCargo();
        console.log("Refrigerante: Sua encomenda saiu para entrega...")
    }
    getCargo(): void {
        console.log("Refrigerante: Sua encomenda está sendo processada!")
    }

}
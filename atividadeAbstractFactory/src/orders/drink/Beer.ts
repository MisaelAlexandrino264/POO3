import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        this.getCargo();
        console.log("Cerveja: Sua encomenda saiu para entrega...")
    }
    getCargo(): void {
        console.log("Cerveja: Sua encomenda está sendo processada!")
    }

}
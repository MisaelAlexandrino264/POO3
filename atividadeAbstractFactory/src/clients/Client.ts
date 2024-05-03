import IDeliveryFactory from "../delivery/interfaces/IDeliveryFactory";
import IDrink from "../orders/drink/interfaces/IDrink";
import IFood from "../orders/food/interfaces/IFood";

export default class Client{
    private drink: IDrink;
    private food: IFood;

    constructor(factory: IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();

    }
    startDelivery(): void{
        this.drink.startDelivery();
        this.food.startDelivery();
    }
}
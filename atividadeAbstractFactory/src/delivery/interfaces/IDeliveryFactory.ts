import IDrink from "../../orders/drink/interfaces/IDrink";
import IFood from "../../orders/food/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}
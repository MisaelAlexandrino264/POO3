import IDeliveryFactory from "../delivery/interfaces/IDeliveryFactory";
import Beer from "./drink/Beer";
import IDrink from "./drink/interfaces/IDrink";
import Hamburguer from "./food/Hamburguer";
import IFood from "./food/interfaces/IFood";

export default class AiqFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }

}
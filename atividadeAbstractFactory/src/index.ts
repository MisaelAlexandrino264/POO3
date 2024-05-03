import Client from "./clients/Client";
import Company from "./delivery/Company";
import IDeliveryFactory from "./delivery/interfaces/IDeliveryFactory";
import AiqFomeDelivery from "./orders/AiqFomeDelivery";
import IFoodDelivery from "./orders/IFoodDelivery";

const currenCompany = Company.AIQFOME;
let factory: IDeliveryFactory;

switch(currenCompany){
    case Company.IFOOD :
        factory = new IFoodDelivery();
        break;
    case Company.AIQFOME :
        factory = new AiqFomeDelivery();
        break;
    default :
        console.log("Companhia não definida.");
    
}
const client = new Client(factory);
client.startDelivery();
import Client from "./clients/Client";
import Company from "./transport/Company";
import ITranportFactory from "./transport/interfaces/ITransportFactory";
import InDriveTransport from "./vehicles/InDriveTransport";
import NineNineTransport from "./vehicles/NineNineTransport";
import UberTransport from "./vehicles/UberTransport";

const currenCompany = Company.NineNine;
let factory: ITranportFactory;

switch(currenCompany){
    case Company.UBER :
        factory = new UberTransport();
        break;
    case Company.NineNine :
        factory = new NineNineTransport();
        break;
    case Company.InDrive :
        factory = new InDriveTransport();
        break;
    default :
        console.log("Companhia não definida!");
}
const client = new Client(factory);
client.startRoute();
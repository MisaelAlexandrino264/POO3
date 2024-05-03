import ITranportFactory from "../transport/interfaces/ITransportFactory";
import Helicopter from "./aerial/Helicopter";
import IAircraft from "./aerial/interfaces/IAircraft";
import ILandVehicle from "./land/interfaces/ILandVehicle";
import Motorcycle from "./land/Motorcycle";


export default class NineNineTransport implements ITranportFactory {
    createTransportVehicle(): ILandVehicle {
        return new Motorcycle();
    }
    creteTransportAircraft(): IAircraft {
        return new Helicopter();
    }

}
    
        
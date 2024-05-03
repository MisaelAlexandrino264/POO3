import ITranportFactory from "../transport/interfaces/ITransportFactory";
import Airplane from "./aerial/Airplane";
import IAircraft from "./aerial/interfaces/IAircraft";
import Car from "./land/Car";
import ILandVehicle from "./land/interfaces/ILandVehicle";

export default class UberTransport implements ITranportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Car();
    }
    creteTransportAircraft(): IAircraft {
        return new Airplane();
    }

}
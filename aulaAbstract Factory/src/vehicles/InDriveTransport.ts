import ITranportFactory from "../transport/interfaces/ITransportFactory";
import Drone from "./aerial/Drone";
import IAircraft from "./aerial/interfaces/IAircraft";
import ILandVehicle from "./land/interfaces/ILandVehicle";
import Scooter from "./land/Scooter";

export default class InDriveTransport implements ITranportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Scooter();
    }
    creteTransportAircraft(): IAircraft {
        return new Drone();
    }

}
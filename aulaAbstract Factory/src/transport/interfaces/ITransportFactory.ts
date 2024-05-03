import IAircraft from "../../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../../vehicles/land/interfaces/ILandVehicle";

export default interface ITranportFactory{
    createTransportVehicle(): ILandVehicle;
    creteTransportAircraft(): IAircraft;
}
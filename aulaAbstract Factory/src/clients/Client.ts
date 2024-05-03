import ITranportFactory from "../transport/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";

export default class Client{
    private vehicle : ILandVehicle;
    private aircraft : IAircraft;

    constructor(factory: ITranportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.creteTransportAircraft();
    }

    startRoute() : void{
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }

}
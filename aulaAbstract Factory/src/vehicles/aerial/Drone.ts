import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone:Drone pronto, Iniciando...")
    }
    getCargo(): void {
        console.log("Drone: Produto colocado!")
    }
    checkWind(): void {
        console.log("Drone: Vento a 20km.")
    }

}
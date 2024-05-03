import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft{
    startRoute(): void {
       this.checkWind();
       this.getCargo();
       console.log("Avião Iniciando a decolagem...")
    }
    getCargo(): void {
        console.log("Avião: Passageiros embarcando!")
    }
    checkWind(): void {
        console.log("Avião: Vento a 25km!")
    }

}
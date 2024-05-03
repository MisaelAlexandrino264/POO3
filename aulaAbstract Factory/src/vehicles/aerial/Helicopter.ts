import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicópetero: Hélices ligadas! Iniciando");
    }
    getCargo(): void {
        console.log("Helicópetero: passageiros embarcando!");
    }
    checkWind(): void {
        console.log("Helicópetero: ventos 42km, Sudoeste!");
    }

}
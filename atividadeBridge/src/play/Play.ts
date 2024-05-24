import IConsole from "../consoles/interfaces/IConsole";
import IPlay from "./interfaces/IPlay";

export default class Play implements IPlay{

    constructor(private consoles: IConsole){}
    playing(): void {
        console.log("Carregando jogo.");
    }
    result(): void {
        console.log("Jogo iniciado com sucesso!");
    }

}
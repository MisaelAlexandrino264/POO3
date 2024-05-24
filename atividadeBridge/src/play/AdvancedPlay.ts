import IConsole from "../consoles/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    
    constructor(consoles : IConsole){
        super(consoles);
    }
    challenge(): void{
        console.log("Encontre o monstro.");
    }

}
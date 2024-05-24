import IConsole from "./interfaces/IConsole";

export default class Xbox implements IConsole{

    constructor(){
        this.configureGame();
        console.log("Xbox: Jogo sendo iniciados!");
    }

    configureGame(): void {
        this.authToken();
        console.log("Xbox: Carregando jogos da biblioteca.");
    }
    authToken(): void {
        console.log("Xbox: Autorizando sessão.");
    }
    

}
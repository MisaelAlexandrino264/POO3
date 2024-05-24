import IConsole from "./interfaces/IConsole";

export default class Playstation implements IConsole{

    constructor(){
        this.configureGame();
        console.log("Playstation: Jogo sendo iniciados!");
    }

    configureGame(): void {
        this.authToken();
        console.log("Playstation: Carregando jogos da biblioteca.");
    }
    authToken(): void {
        console.log("Playstation: Autorizando sessão.");
    }

}
import IItem from "./interface/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("O Jogo está começando");
    }
    getDescription(): void {
        console.log("Jogo: O jogo está pronto e começara em breve!")
    }

}
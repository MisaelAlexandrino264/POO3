import IItem from "./interface/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("O Filme está começando")
    }
    getDescription(): void {
        console.log("Filme: O filme está pronto e começara em breve!")
    }


}
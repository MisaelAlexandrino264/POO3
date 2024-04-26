import IItem from "./item/interface/IItem";

export default abstract class Location{


    startItem(): void{
        const item  = this.createItem();
        item.start();
    }
    protected abstract createItem() : IItem;
}
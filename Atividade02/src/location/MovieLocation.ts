import IItem from "./item/interface/IItem";
import Movie from "./item/Movie";
import Location from "./Location";

export default class MovieLocation extends Location{

    protected createItem() : IItem{
        return new Movie()
    }
}
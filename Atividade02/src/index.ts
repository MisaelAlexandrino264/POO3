import GameLocation from "./location/GameLocation";
import Location from "./location/Location";
import MovieLocation from "./location/MovieLocation";


declare var process;

let  location: Location;

if(process.argv.includes("filme")){
    location = new MovieLocation();

}else if(process.argv.includes("jogo")){
    location = new GameLocation();

}else{
    console.log("Selecione o tipo do item ")

}

if(location) location.startItem();
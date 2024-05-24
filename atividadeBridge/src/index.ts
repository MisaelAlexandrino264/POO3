import IConsole from "./consoles/interfaces/IConsole";
import Playstation from "./consoles/Playstation";
import Xbox from "./consoles/Xbox";
import AdvancedPlay from "./play/AdvancedPlay";
import Play from "./play/Play";

function startAdvancedPlay(consoles: IConsole){
    console.log("Aguarde...");
    const play = new AdvancedPlay(consoles);
        play.playing();
        play.result();
        play.challenge();
}
startAdvancedPlay(new Playstation());
startAdvancedPlay(new Xbox());



import SanduicheBuilder from "./builder/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./lunchs/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructHotDog();
const hotdog :  Sanduiche = builder.getSanduiche();
console.log("Hot Dog está sendo preparado...");
console.log("Tipo: "+hotdog.sanduichetype);
console.log("Pão:" +hotdog.bread);
console.log("Proteina:" +hotdog.protein);
console.log("Molhos: "+hotdog.sauceTodos);

director.constructorXSalad();
const xsalada :  Sanduiche = builder.getSanduiche();
console.log("Sanduiche está sendo preparado...");
console.log("Tipo: "+xsalada.sanduichetype);
console.log("Pão:" +xsalada.bread);
console.log("Proteina:" +xsalada.protein);
console.log("Molhos: "+xsalada.sauceTodos);
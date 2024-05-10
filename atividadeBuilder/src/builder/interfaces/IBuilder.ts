import Bread from "../../ingredients/Bread";
import Protein from "../../ingredients/Protein";
import Salad from "../../ingredients/Salad";
import SanduicheType from "../../ingredients/SanduicheType";
import Sauce from "../../ingredients/Sauce";
import Sanduiche from "../../lunchs/Sanduiche";

export default interface IBuilder{
    reset(): void;
    getSanduiche() : Sanduiche;
    setSanduicheType(value: SanduicheType);
    setBread(bread: Bread);
    setProtein(protein: Protein);
    setSalad(salad: Salad);
    addSauce(sauce: Sauce);
}
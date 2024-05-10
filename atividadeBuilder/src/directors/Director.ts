import IBuilder from "../builder/interfaces/IBuilder";
import Bread from "../ingredients/Bread";
import Protein from "../ingredients/Protein";
import Salad from "../ingredients/Salad";
import SanduicheType from "../ingredients/SanduicheType";
import Sauce from "../ingredients/Sauce";

export default class Director{

    constructor(private builder: IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.PAODEFORMA);
        this.builder.setProtein(Protein.VINA);
        this.builder.setSalad(Salad.COMPLETO);
        this.builder.addSauce(Sauce.KETCHUP);
        this.builder.addSauce(Sauce.MOSTARDA);
        this.builder.addSauce(Sauce.MOLHOVERDE);
        
    }
    constructorXSalad(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(Bread.INTEGRAL);
        this.builder.setProtein(Protein.HAMBURGUER);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.addSauce(Sauce.MAIONESE);
        this.builder.addSauce(Sauce.KETCHUP);
    }
}
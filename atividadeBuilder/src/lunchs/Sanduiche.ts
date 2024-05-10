import Bread from "../ingredients/Bread";
import Protein from "../ingredients/Protein";
import Salad from "../ingredients/Salad";
import SanduicheType from "../ingredients/SanduicheType";
import Sauce from "../ingredients/Sauce";

export default class Sanduiche{

    private _bread : Bread;
    private _protein : Protein;
    private _salad : Salad;
    private _sauce : Sauce[] = [];
    private _sanduichetype : SanduicheType;
    /**
     * Getter bread
     * @return {Bread}
     */
	public get bread(): Bread {
		return this._bread;
	}
    addSauce(sauce: Sauce){
        this.sauce.push(sauce);
    }

    /**
     * Getter protein
     * @return {Protein}
     */
	public get protein(): Protein {
		return this._protein;
	}

    /**
     * Getter salad
     * @return {Salad}
     */
	public get salad(): Salad {
		return this._salad;
	}

    /**
     * Getter sauce
     * @return {Sauce[] }
     */
	public get sauce(): Sauce[]  {
		return this._sauce;
	}
    get sauceTodos() : number{
        return this._sauce.length;
    }

    /**
     * Getter sanduichetype
     * @return {SanduicheType}
     */
	public get sanduichetype(): SanduicheType {
		return this._sanduichetype;
	}

    /**
     * Setter bread
     * @param {Bread} value
     */
	public set bread(value: Bread) {
		this._bread = value;
	}

    /**
     * Setter protein
     * @param {Protein} value
     */
	public set protein(value: Protein) {
		this._protein = value;
	}

    /**
     * Setter salad
     * @param {Salad} value
     */
	public set salad(value: Salad) {
		this._salad = value;
	}

    /**
     * Setter sauce
     * @param {Sauce[] } value
     */
	public set sauce(value: Sauce[] ) {
		this._sauce = value;
	}

    /**
     * Setter sanduichetype
     * @param {SanduicheType} value
     */
	public set sanduichetype(value: SanduicheType) {
		this._sanduichetype = value;
	}
    
    
}
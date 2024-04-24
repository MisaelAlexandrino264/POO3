export class Telefone{
    
    private _ddd: number;
    private _numero: number;
    private _tipo: string;

	constructor(ddd: number, numero: number, tipo: string) {
		this._ddd = ddd;
		this._numero = numero;
		this._tipo = tipo;
	}
    /**
     * Getter ddd
     * @return {number}
     */
	public get ddd(): number {
		return this._ddd;
	}

    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Getter tipo
     * @return {string}
     */
	public get tipo(): string {
		return this._tipo;
	}

    /**
     * Setter ddd
     * @param {number} value
     */
	public set ddd(value: number) {
		this._ddd = value;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter tipo
     * @param {string} value
     */
	public set tipo(value: string) {
		this._tipo = value;
	}
    
    
    
}
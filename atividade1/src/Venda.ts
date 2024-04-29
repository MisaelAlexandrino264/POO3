import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

export class Venda{

   private _codigo: number;
   private _data: number;
   private _cliente: Cliente;
   private _produto: Produto[];


	constructor(codigo: number, data: number, cliente: Cliente, produto: Produto[]) {
		this._codigo = codigo;
		this._data = data;
		this._cliente = cliente;
		this._produto = produto;
	}
    /**
     * Getter codigo
     * @return {number}
     */
	public get codigo(): number {
		return this._codigo;
	}

    /**
     * Getter data
     * @return {number}
     */
	public get data(): number {
		return this._data;
	}

    /**
     * Getter cliente
     * @return {Cliente}
     */
	public get cliente(): Cliente {
		return this._cliente;
	}

    /**
     * Getter produto
     * @return {Produto[]}
     */
	public get produto(): Produto[] {
		return this._produto;
	}

    /**
     * Setter codigo
     * @param {number} value
     */
	public set codigo(value: number) {
		this._codigo = value;
	}

    /**
     * Setter data
     * @param {number} value
     */
	public set data(value: number) {
		this._data = value;
	}

    /**
     * Setter cliente
     * @param {Cliente} value
     */
	public set cliente(value: Cliente) {
		this._cliente = value;
	}

    /**
     * Setter produto
     * @param {Produto[]} value
     */
	public set produto(value: Produto[]) {
		this._produto = value;
	}
    public calcularTotal(): number{
        let i: number;
        let soma: number = 0;
        
        for(i=0; i<this.produto.length;i++){
            
            soma+= this.produto[i].valor;
        }
        return soma;


    }


}
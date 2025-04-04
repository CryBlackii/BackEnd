import { Cliente } from "./cliente";
import { Produto } from "./Produto";

export class Venda {
    private _Codigo: number;
    private _data: number;
    private _cliente: Cliente;
    private _produtos: Produto[];

    constructor(Codigo : number, data: number, cliente: Cliente, produtos: Produto[]) {
        this. _Codigo = Codigo;
        this. _data = data;
        this._cliente = cliente;
        this._produtos = produtos;
    }

    get codigo(): number {
        return this._Codigo;
    }

    set nome(codigo: number) {
        this._Codigo = codigo;
    }

    get data() : number{
        return this._data;
    }

    set data(data : number){
        this._data = data;
    }

    get cliente() : Cliente{
        return this._cliente;
    }

    set Cliente(Cliente : Cliente ){
        this._cliente = Cliente;
    }

    get Produtos() : Produto[]{
        return this._produtos;
    }

    set Produtos( Produtos : Produto[]){
        this._produtos = Produtos;
    }

    calcularTotal(): number {
        return this._produtos.reduce((total, produto) => total + produto.valor, 0);
    }
}
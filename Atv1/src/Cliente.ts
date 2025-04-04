import { Telefone } from "./Telefone";
import { Endereco } from "./Endereco";

export class Cliente {
    private _nome: string;
    private _cpf: number;
    private _dataNasc: number;
    private _sexo: string;
    private _endereco: Endereco;
    private _telefones: Telefone[];

    constructor(nome: string, cpf: number, dataNasc: number, sexo: string, endereco: Endereco, telefones: Telefone[]) {
        this._nome = nome;
        this._cpf = cpf;
        this._dataNasc = dataNasc;
        this._sexo = sexo;
        this._endereco = endereco;
        this._telefones = telefones;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf(): number {
        return this._cpf;
    }

    set cpf(cpf: number) {
        this._cpf = cpf;
    }

    get dataNasc(): number {
        return this._dataNasc;
    }

    set dataNasc(dataNasc: number) {
        this._dataNasc = dataNasc;
    }

    get sexo(): string {
        return this._sexo;
    }

    set sexo(sexo: string) {
        this._sexo = sexo;
    }

    get endereco(): Endereco {
        return this._endereco;
    }

    set endereco(endereco: Endereco) {
        this._endereco = endereco;
    }

    get telefones(): Telefone[] {
        return this._telefones;
    }

    set telefones(telefones: Telefone[]) {
        this._telefones = telefones;
    }
}
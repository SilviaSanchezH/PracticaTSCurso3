import { Tipos } from "./mail";


export class Telefono {
    _tipo: Tipos;
    _numero: number;


    constructor(tipo: Tipos, numero: number){
        this._tipo = tipo;
        this._numero = numero;
    }

    set tipo (tipo:Tipos){
        this._tipo = tipo;
    }

    set numero (numero: number){
        this._numero = numero;
    }

    get tipo () {
        return this._tipo;
    }

    get numero () {
        return this._numero;
    }

}
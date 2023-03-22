
export type Tipos = 'personal' | 'trabajo' | 'otro';

export class Mail{
    _tipo: Tipos;
    _direccion: string;


    constructor(tipo: Tipos, direccion: string){
        this._tipo = tipo;
        this._direccion = direccion;
    }

    set tipo (tipo:Tipos){
        this._tipo = tipo;
    }

    set direccion (direccion: string){
        this._direccion = direccion;
    }

    get tipo () {
        return this._tipo;
    }

    get direccion () {
        return this._direccion;
    }
}




export class Direccion{
    _calle: string;
    _número: number;
    _piso: string;
    _letra: string;
    _codigoPostal: number;
    _poblacion: string;
    _provincia: string;

    constructor(calle: string, numero: number, piso: string, letra: string, codigoPostal: number, poblacion: string, provincia:string){
        this._calle = calle;
        this._número = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    set calle (calle: string) {
        this._calle = calle;
    }

    get calle () {
        return this._calle;
    }

    set numero (numero: number) {
        this._número = numero;
    }

    get numero () {
        return this._número;
    }

    set piso (piso: string) {
        this._piso = piso;
    }

    get piso () {
        return this._piso;
    }

    set letra (letra: string) {
        this._letra = letra;
    }

    get letra () {
        return this._letra;
    }

    set codigoPostal (codigoPostal: number) {
        this._codigoPostal = codigoPostal;
    }

    get codigoPostal () {
        return this._codigoPostal;
    }

    set poblacion (poblacion: string) {
        this._poblacion = poblacion;
    }

    get poblacion () {
        return this._poblacion;
    }

    set provincia (provincia: string) {
        this._provincia = provincia;
    }

    get provincia () {
        return this._provincia;
    }
}
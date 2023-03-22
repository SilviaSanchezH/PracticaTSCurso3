"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._número = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    set calle(calle) {
        this._calle = calle;
    }
    get calle() {
        return this._calle;
    }
    set numero(numero) {
        this._número = numero;
    }
    get numero() {
        return this._número;
    }
    set piso(piso) {
        this._piso = piso;
    }
    get piso() {
        return this._piso;
    }
    set letra(letra) {
        this._letra = letra;
    }
    get letra() {
        return this._letra;
    }
    set codigoPostal(codigoPostal) {
        this._codigoPostal = codigoPostal;
    }
    get codigoPostal() {
        return this._codigoPostal;
    }
    set poblacion(poblacion) {
        this._poblacion = poblacion;
    }
    get poblacion() {
        return this._poblacion;
    }
    set provincia(provincia) {
        this._provincia = provincia;
    }
    get provincia() {
        return this._provincia;
    }
}
exports.Direccion = Direccion;

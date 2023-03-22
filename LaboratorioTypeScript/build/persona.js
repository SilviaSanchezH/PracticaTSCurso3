"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    get apellidos() {
        return this._apellidos;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    set dni(dni) {
        this._dni = dni;
    }
    get dni() {
        return this._dni;
    }
    set cumpleaños(cumpleaños) {
        this._cumpleaños = cumpleaños;
    }
    get cumpleaños() {
        return this._cumpleaños;
    }
    set colorFavorito(colorFavorito) {
        this._colorFavorito = colorFavorito;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
    set direcciones(direcciones) {
        this._direcciones = direcciones;
    }
    get direcciones() {
        return this._direcciones;
    }
    set mails(mails) {
        this._mails = mails;
    }
    get mails() {
        return this._mails;
    }
    set telefonos(telefonos) {
        this._telefonos = telefonos;
    }
    get telefonos() {
        return this._telefonos;
    }
    set notas(notas) {
        this._notas = notas;
    }
    get notas() {
        return this._notas;
    }
}
exports.Persona = Persona;

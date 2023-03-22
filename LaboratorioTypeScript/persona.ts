import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

type Sexo = 'masculino' | 'femenino';

export class Persona{
    _nombre: string;
    _apellidos: string;
    _edad: number;
    _dni: string;
    _cumpleaños: Date;
    _colorFavorito: string;
    _sexo: Sexo;
    _direcciones: Direccion [];
    _mails: Mail [];
    _telefonos: Telefono[];
    _notas: string [];

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: Date, colorFavorito: string, sexo: Sexo, direcciones: Direccion [], 
                mails: Mail [], telefonos: Telefono[], notas: string []){
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

    set nombre (nombre: string) {
        this._nombre = nombre;
    }

    get nombre () {
        return this._nombre;
    }

    set apellidos (apellidos: string) {
        this._apellidos = apellidos;
    }

    get apellidos () {
        return this._apellidos;
    }

    set edad (edad: number) {
        this._edad = edad;
    }

    get edad () {
        return this._edad;
    }

    set dni (dni: string) {
        this._dni = dni;
    }

    get dni () {
        return this._dni;
    }

    set cumpleaños (cumpleaños: Date) {
        this._cumpleaños = cumpleaños;
    }

    get cumpleaños () {
        return this._cumpleaños;
    }

    set colorFavorito (colorFavorito: string) {
        this._colorFavorito = colorFavorito;
    }

    get colorFavorito () {
        return this._colorFavorito;
    }

    set sexo (sexo: Sexo) {
        this._sexo = sexo;
    }

    get sexo () {
        return this._sexo;
    }

    set direcciones (direcciones: Direccion[]) {
        this._direcciones = direcciones;
    }

    get direcciones () {
        return this._direcciones;
    }

    set mails (mails: Mail []) {
        this._mails = mails;
    }

    get mails () {
        return this._mails;
    }

    set telefonos (telefonos: Telefono []) {
        this._telefonos = telefonos;
    }

    get telefonos () {
        return this._telefonos;
    }

    set notas (notas: string []) {
        this._notas = notas;
    }

    get notas () {
        return this._notas;
    }
}
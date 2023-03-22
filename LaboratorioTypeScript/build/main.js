"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const direccion_1 = require("./direccion");
const mail_1 = require("./mail");
const telefono_1 = require("./telefono");
const persona_1 = require("./persona");
//Datos persona 1
const direcciones1 = [new direccion_1.Direccion('SOL', 9, '4º', 'B', 28888, 'Madrid', 'Madrid'), new direccion_1.Direccion('LUNA', 9, '4º', 'B', 27777, 'Albacete', 'Albacete')];
const mail1 = [new mail_1.Mail('personal', 'pepe@gmail.com')];
const telefono1 = [new telefono_1.Telefono('otro', 689333746)];
const persona1 = new persona_1.Persona('Pepe', 'Sanchez', 20, '47583384L', new Date('2000-09-12'), 'azul', 'femenino', direcciones1, mail1, telefono1, ['Tengo que comer', 'Tengo que hacer deberes']);
//Datos persona 2
const direcciones2 = [new direccion_1.Direccion('PLUTÓN', 7, '5º', 'B', 28888, 'Madrid', 'Madrid'), new direccion_1.Direccion('LUNA', 9, '4º', 'B', 27777, 'Albacete', 'Albacete')];
const mail2 = [new mail_1.Mail('personal', 'manola@gmail.com')];
const telefono2 = [new telefono_1.Telefono('otro', 689333433)];
const persona2 = new persona_1.Persona('Manola', 'Sanchez', 20, '77583384K', new Date('2002-09-12'), 'azul', 'femenino', direcciones2, mail2, telefono2, ['Tengo que comer', 'Tengo que hacer deberes']);
//Datos persona 3
const direcciones3 = [new direccion_1.Direccion('SATURNO', 7, '5º', 'B', 28888, 'Madrid', 'Madrid'), new direccion_1.Direccion('LUNA', 9, '4º', 'B', 27777, 'Albacete', 'Albacete')];
const mail3 = [new mail_1.Mail('personal', 'saturnino@gmail.com')];
const telefono3 = [new telefono_1.Telefono('otro', 689333433)];
const persona3 = new persona_1.Persona('Saturnino', 'Sanchez', 20, '77583344H', new Date('2001-09-12'), 'azul', 'masculino', direcciones3, mail3, telefono3, ['Tengo que comer', 'Tengo que hacer deberes']);
let personas = [persona1, persona2, persona3];
//Mostramos personas en la terminal
//console.log(personas);
//Realizamos busqueda por DNI y añadimos una dirección, mail y teléfono a esa persona
let personaEditada = personas.find(persona => persona.dni === '47583384L');
personaEditada === null || personaEditada === void 0 ? void 0 : personaEditada.direcciones.push(new direccion_1.Direccion('JUPITER', 2, '1º', 'A', 28888, 'Madrid', 'Madrid'));
personaEditada === null || personaEditada === void 0 ? void 0 : personaEditada.mails.push(new mail_1.Mail('trabajo', 'pepetrabajo@gmail.com'));
personaEditada === null || personaEditada === void 0 ? void 0 : personaEditada.telefonos.push(new telefono_1.Telefono('personal', 673847444));
//Volvemos a mostrar a las personas
console.log(personas);

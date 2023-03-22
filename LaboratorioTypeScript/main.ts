import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";
import { Persona } from "./persona";


//Datos persona 1
const direcciones1 = [new Direccion('SOL', 9, '4º', 'B', 28888, 'Madrid', 'Madrid'), new Direccion('LUNA', 9, '4º', 'B', 27777, 'Albacete', 'Albacete')]
const mail1 = [new Mail('personal', 'pepe@gmail.com')];
const telefono1 = [new Telefono('otro', 689333746)];
const persona1 = new Persona('Pepe', 'Sanchez', 20, '47583384L', new Date('2000-09-12'), 'azul', 'femenino', direcciones1, mail1, telefono1, ['Tengo que comer', 'Tengo que hacer deberes']);

//Datos persona 2
const direcciones2 = [new Direccion('PLUTÓN', 7, '5º', 'B', 28888, 'Madrid', 'Madrid'), new Direccion('LUNA', 9, '4º', 'B', 27777, 'Albacete', 'Albacete')]
const mail2 = [new Mail('personal', 'manola@gmail.com')];
const telefono2 = [new Telefono('otro', 689333433)];
const persona2 = new Persona('Manola', 'Sanchez', 20, '77583384K', new Date('2002-09-12'), 'azul', 'femenino', direcciones2, mail2, telefono2, ['Tengo que comer', 'Tengo que hacer deberes']);

//Datos persona 3
const direcciones3 = [new Direccion('SATURNO', 7, '5º', 'B', 28888, 'Madrid', 'Madrid'), new Direccion('LUNA', 9, '4º', 'B', 27777, 'Albacete', 'Albacete')]
const mail3 = [new Mail('personal', 'saturnino@gmail.com')];
const telefono3 = [new Telefono('otro', 689333433)];
const persona3 = new Persona('Saturnino', 'Sanchez', 20, '77583344H', new Date('2001-09-12'), 'azul', 'masculino', direcciones3, mail3, telefono3, ['Tengo que comer', 'Tengo que hacer deberes']);


let personas = [persona1, persona2, persona3];



//Realizamos busqueda por DNI y añadimos una dirección, mail y teléfono a esa persona

let personaEditada = personas.find(persona=>persona.dni === '47583384L');

personaEditada?.direcciones.push(new Direccion('JUPITER', 2, '1º', 'A', 28888, 'Madrid', 'Madrid'));
personaEditada?.mails.push(new Mail('trabajo', 'pepetrabajo@gmail.com'));
personaEditada?.telefonos.push(new Telefono('personal', 673847444));


//Mostramos las personas
console.log(personas);

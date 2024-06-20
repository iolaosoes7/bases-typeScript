import {UsuarioInterface} from './02-object-interface';
import { Person, Trabajo } from './05-clases';


const juan: UsuarioInterface = {
    firstName: 'Juan',
    lastName: 'Perez',
    email:      'juan@gmail.com',
    password:   'juan123',
    edad:       40,
    isAdmin:    false,
    telefono:   '0984483275'
};

console.log({juan});

const tony = new Person('tony', '123');

const tonyTrabajo = new Trabajo(1500,'desarrollador web', tony);

console.log(tonyTrabajo);

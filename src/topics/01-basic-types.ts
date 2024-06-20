

let nombre: string = 'Atom';
let edad: number = 30.20;
const isAdmin: boolean = true;

let cedula: string | number | undefined;
cedula = '0105332688';

let fecha: Date = new Date();

const isAdmininstrador: null = null;

let nacimiento: any;

nacimiento = 'fecha de nacimiento';
nacimiento = new Date();
nacimiento = 1984;
nacimiento = true;


let rol: 'ADMINISTRADOR' | 'SECRETARIA' | 'MENSAJERO' | number;

//rol = 'Cocinero';
//rol = 'admininstrador';
rol = 'ADMINISTRADOR';

/* ***
* Arreglos
*** */

const colores: string[] = ['amarillo','azul','cafe'];

colores.push('verde');


console.log({nombre,
    edad: Number(edad),
    isAdmin,
    cedula,
    fecha,
    isAdmininstrador,
    nacimiento,
    rol,
    colores
});



export {};
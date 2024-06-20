
export class Person {

    public name:        string;
    public password:   string;

    constructor(nombre: string, clave: string){
        this.name = nombre;
        this.password= clave;

    }
}

/* export class Trabajo extends Person {
    
    constructor(private salario: number, 
        public puesto: string, 
        public name: string, 
        private password: string)
    {
        super(name,password);
    }
} */


export class Trabajo {
    constructor(
        public salario: number, 
        public puesto: string, 
        public person: Person
        ){}
}
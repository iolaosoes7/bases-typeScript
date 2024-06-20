
// interface -> descripcion del objeto, de que se compone 

interface UsuarioInterface {
    email:          string,
    password:       string,
    edad:           number,
    isAdmin:        boolean,
    address?:       string,   // propiedad opcional
    numeroCasa?:    number,
    telefono?:      string | number,
    firstName:      string,
    lastName:      string,
    fullname?: () => void
}


const israel: UsuarioInterface = {
    firstName: 'Israel',
    lastName: 'Lopez',
    email:      'israel@gmail.com',
    password:   'israel123',
    edad:       40,
    isAdmin:    false,
    telefono:   '0984483275'
};

const pedro: UsuarioInterface = {
    email: 'pedro@gmail.com',
    password: 'pedro',
    edad: 35,
    isAdmin: true,
    address: 'Riobamba',
    numeroCasa: 24,
    firstName: "Pedro",
    lastName: "Torres"
};




console.log({israel,
    pedro
});


export{}
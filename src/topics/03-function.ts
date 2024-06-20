function addNumeros (a: number, b: number): string
{
    return Number(a + b).toFixed(2);
}

const addnNumerosArrow = (a: number, b: number): number => {
    return a + b;

}

const numeros = addNumeros(10, 20);

console.log('resultado: ' , numeros);


const numerosArrow = addnNumerosArrow(46, 48);

console.log('resultadoArrow: ' , numerosArrow);

export{};

// ...rest operator [...var], ...spread

let numeros = [1,2,3,4,5]

const [primeiro, segundo, ...resto] = numeros
console.log(numeros)

const [p1, , p2, , p3] = numeros;

console.log(p1, p2 ,p3)

numeros = [10,20,30,40,50]
console.log(numeros)

console.log(primeiro, segundo) 
console.log(resto)


const numeros1 = [
    [1,2,3], //0
    [4,5,6], //1
    [7,8,9], //2
];

const [,[,,seis]] = numeros1;
const cinco = numeros1[1][1];
console.log(cinco)
console.log(seis)



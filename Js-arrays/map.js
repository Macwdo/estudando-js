const numbers = [19,11,92,73,19,24,125,53,2,9,32,42,65,94,82];

const numeroEmDobro = numbers.map( value => value % 2 == 0 ? value + 1000: value + 5000)

console.log(numbers, numeroEmDobro)

const pessoas = [
    {nome: "Danilo", idade: 18},
    {nome: "Pedro", idade: 18},
    {nome: "Carlos", idade: 12},
    {nome: "Jessica", idade: 45},
    {nome: "Joana", idade: 50},
    {nome: "Caua", idade: 23},
    {nome: "Vini", idade: 10}
];

const soNomeObj = pessoas.map( obj => obj.nome);
const objComID = pessoas.map( (obj, id) =>{ 
    const newObj = {...obj}
    newObj["id"] = id;
    return newObj;
});

// const objSemKeyNome = pessoas.map(obj => {
//     return {idade: obj.idade}
// })

const objSemKeyNome = pessoas.map(obj => ({idade: obj.idade}))

console.log(pessoas)
console.log(objComID)
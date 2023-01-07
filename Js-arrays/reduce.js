const numbers = [19,11,92,73,19,24,125,53,2,9,32,42,65,94,82];

const total = numbers.reduce((count, value, index, array) => {
    count += value;
    return count;
})

const test = numbers.reduce((count, value, index, array) => {
    if (value % 53 === 0){
        count.push(value)
    };
    return count;
}, [])
// console.log(total, test);

const pessoas = [
    {nome: "Danilo", idade: 18},
    {nome: "Pedro", idade: 18},
    {nome: "Carlos", idade: 12},
    {nome: "Jessica", idade: 45},
    {nome: "Joana", idade: 50},
    {nome: "Caua", idade: 23},
    {nome: "Vini", idade: 10}
];

// const pessoaMaisVelha = pessoas.reduce((count, value) => {
//     if (value.idade > count){
//         count = value.idade;
//     };
//     return count;
    
// }, 0);

const pessoaMaisVelha = pessoas.reduce((count, value) => {
    if(count.idade > value.idade) return count;
    return value;
});
console.log(pessoaMaisVelha);
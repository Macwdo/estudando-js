// Filter Sempre Retorna um array com a mesma quantidade ou menos.
const numbers = [19,11,92,73,19,24,125,53,2,9,32,42,65,94,82];

// function callbackFilter (value, index, array) {
//     return value > 10;
// }

// const numbersFilter = numbers.filter(function(valor){
//     return valor > 10;
// });
    
const numbersFilter = numbers.filter(value => value > 10);
// console.log(numbers)
// console.log(numbersFilter);
    
const pessoas = [
    {nome: "Danilo", idade: 18},
    {nome: "Pedro", idade: 18},
    {nome: "Carlos", idade: 12},
    {nome: "Jessica", idade: 45},
    {nome: "Joana", idade: 50},
    {nome: "Caua", idade: 23},
    {nome: "Vini", idade: 10}
];

const pessoasComNomeGrande = pessoas.filter(value => value.nome.length > 5)
const pessoasQueTerminamemA = pessoas.filter(value => value.nome.toLocaleLowerCase().endsWith("a"))
const pessoasMaioresDeIdade = pessoas.filter(value => value.idade >= 18)

console.log(pessoasComNomeGrande, pessoasQueTerminamemA, pessoasMaioresDeIdade)


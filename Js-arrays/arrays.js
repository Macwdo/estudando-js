const nomes = ["Danilo", "Macedo", "Joao","Carlos", "Popó"];
const nome = "Danilo Macedo";
const nomeSp = nome.split(" ");
const nomeSptoString = nomeSp.join(" ");


const numbers = [19,11,92,73,19,24,125,53,2,9,32,42,65,94,82];

const numerosFMR = numbers.filter(value => value % 2 === 0)
.map(value => value ** 2)
.reduce((counter, value) => counter + value);

console.log(numerosFMR)
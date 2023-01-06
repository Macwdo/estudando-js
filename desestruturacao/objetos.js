const pessoa = {
    nome: "Danilo",
    sobrenome: "Macedo",
    idade: 18,
    endereco: {
        rua: "D Paulo alonso",
        numero: 839
    }
}
console.log(pessoa)

const { nome: nomedocara } = pessoa;
const { nome } = pessoa;

const {endereco: {rua, numero}} = pessoa

const {endereco: r ,...dados} =pessoa

console.log(r, dados)

console.log(pessoa)
console.log(nomedocara)
console.log(rua, numero)


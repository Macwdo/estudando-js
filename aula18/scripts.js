const pessoa1 = {
    nome: 'danilo',
    idade: '18',

    fala () {
        console.log("Oi eu sou o", this.nome)
    } 
};

// const criarPessoa = (nome, idade) => {
//     return {
//         nome: nome,
//         idade: idade
//     }
// };

const criarPessoa = (nome, idade) => {
    return {nome, idade}
};

const pessoa2 = criarPessoa("Pedro", 10);

pessoa2["sobrenome"] = "julio";

console.log(typeof pessoa2)
console.log(pessoa2)
console.log(pessoa1.fala())
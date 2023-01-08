const pessoa1 = {
    nome: "Danilo",
    sobrenome: "Macedo"
}

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}

const pessoa2 = new Pessoa("Carlos", "Machado")

console.log(pessoa2);
pessoa2.nome = "Machado";
console.log(pessoa2);
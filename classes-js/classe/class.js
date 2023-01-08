class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está comendo`)
    }
}


const p1 = new Pessoa("Danilo","Macedo");
const p2 = new Pessoa("Danilo","Mcadsa");

console.log(p1,p2)

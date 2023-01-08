// Construtora molde class

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `ORiginal${this.nome} ${this.sobrenome}`
}

Pessoa.prototype.nomeCompleto = function (){return `${this.nome} ${this.sobrenome}`};

const objA = {
    chaveA: "A",
    //__proto__: object.prototype
};

const objB = {
    chaveB: "B"
    //__proto__: object.prototype
};

Object.setPrototypeOf(objA, objB)

function Produto(){

};
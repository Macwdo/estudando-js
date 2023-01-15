class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    fala() {
        console.log(this.nome +" Está falando!")
    }
}

module.exports = Pessoa

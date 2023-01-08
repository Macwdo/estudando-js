class DispElet{

    constructor(nome){
        this.nome = nome;
        this.estado = false;
    }

    ligar () {
        if (this.estado == true) return console.log("Ja ligado");
        this.estado = true;
        console.log("Ligando")
    }

    desligar () {
        if (this.estado == false) return console.log("Ja desligado");
        this.estado = false;
        console.log("Desligando");
    }

}

class Smartphone extends DispElet{
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    }

    trocaCor (cor) {
        this.cor = cor;
        console.log("Agora a cor é",this.cor)
    }

}

const celular = new Smartphone("Iphone", "Azul");

celular.trocaCor("Preto")

console.log(celular.cor)

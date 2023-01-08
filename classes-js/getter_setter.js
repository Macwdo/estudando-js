// Simbol

const _velocidade = Symbol("velocidade");

class Carro{

   constructor (nome) {
        this.nome = nome;  
        this[_velocidade] = 0;
   }

   get velocidade () {
    return this[_velocidade]
    }
    set velocidade (value) {
        if(value > 100 || value <=0 || typeof value !== "number" ) return;
        this[_velocidade] = value;
    }

   acelerar () {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
   }

   freiar () {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
   }

}

const fusca = new Carro("fusca");

for(let i=0;i<120;i++){
    fusca.acelerar();
}

console.log(fusca.velocidade)


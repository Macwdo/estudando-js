class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0
    }
// Metodo de Instancia

    aumentarVolume () {
        this.volume += 2;
    }

// Metodo de Instancia

    diminuirVolume () {
        this.volume -= 2;
    }
// Metodo estatico

    static trocaPilha (){
        console.log("Trocando tudo")
    }
}

const controle1 = new ControleRemoto("LG");
console.log(controle1)
ControleRemoto.trocaPilha()

controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()

console.log(controle1)


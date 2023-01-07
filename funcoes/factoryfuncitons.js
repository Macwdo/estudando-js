// Factory Function

function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {
            return this.nome + " " + this.sobrenome
        },
        set nomeCompleto(nomecompleto) {
            const nomec = nomecompleto.split(" ");
            this.nome = nomec[0];
            nomec.shift();
            this.sobrenome = nomec.join(" ");
            return console.log(`${this.nome} ${this.sobrenome}`)
        },
        fala (assunto = "Nada") {
            return `${this.nome} ${this.sobrenome} está falando sobre ${assunto}`
        },
        peso: peso,
        altura: altura,
        get imc () {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    }

}
// get imc() -> imc finge se um atributo - getter


const pessoa1 = criaPessoa("Danilo", "Macedo", 78, 1.73)

console.log(pessoa1.nomeCompleto)
console.log(pessoa1.fala("Dinheiro"))
pessoa1.nomeCompleto = "Joao pedro albuquerque"
console.log(pessoa1.fala())

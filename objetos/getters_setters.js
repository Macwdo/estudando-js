// defineProperty -> Getters - Setters

function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, "estoque", {
        enumerable: true, // Mostra a chave
        configurable: false, // Configuravel - Pode reconfigurar ou apagar
        get: function (){
            return estoquePrivado;
        },
        set: function (value){
            if (typeof value !== 'number')
                throw new TypeError("Need Integer");
            estoquePrivado = value;

        }
    })
}

function criaProduto(nome){
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            nome = valor;
        }
    }
}


const p1 = new Produto("Bola", "18", 10);
p1.estoque = 3;

const p2 = criaProduto("Comida");

console.log(p2.nome);
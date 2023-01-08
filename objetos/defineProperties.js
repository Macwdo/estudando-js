
function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Valor
            writable: true, // Pode alterar
            configurable: false // Configuravel - Pode reconfigurar ou apagar
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Valor
            writable: true, // Pode alterar
            configurable: false // Configuravel - Pode reconfigurar ou apagar
        },
        estoque: {
            enumerable: true, // Mostra a chave
            value: estoque, // Valor
            writable: false, // Pode alterar
            configurable: false // Configuravel - Pode reconfigurar ou apagar
        }
    })

};

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 10;
console.log(Object.keys(p1))
console.log(p1);
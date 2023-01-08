// Preço -> aumento, desconto;
// Camiseta, Lapís, Caneca.
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

const p1 = new Produto("Caneca", 200);


function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor;
};
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
Camiseta.prototype.aumento = function (percent) {
    this.preco += this.preco * percent/100;
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material;

    Object.defineProperty(this, 'estoque', {
        get: function(){
            return estoque
        },
        set: function(quantia){
            estoque = quantia;
        },
        configurable: false,
        enumerable: true
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca



const camiseta = new Camiseta('Regata', 20, "Azul")
const caneca = new Caneca('flaneca', 10, 'Porcelana',4);
caneca.estoque = 10;
console.log(camiseta)
console.log(caneca)

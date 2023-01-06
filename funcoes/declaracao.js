// declaração de func (função hoisting)
// Possibilidade de chamar funçao antes exemplo V
// 
sayHello();

function sayHello() {
    console.log('Hello');
}

// First-Class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function() {
    console.log("Bolota")
}

function executaFuncao (funcao) {
    console.log("Executando sua função.")
    funcao();
}

executaFuncao(souUmDado);

// Arrow Function - Arrow Function não tem args

const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}

funcaoArrow();

// Dentro de um objeto

const obj = {
    falar: function () {
        console.log("Bla bla bla");
    }
}

obj.falar();
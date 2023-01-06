function retornaFuncao() {
    const nome =  "Danilo";
    return function () {
        return nome;
    };
}

const func = retornaFuncao();
console.log(retornaFuncao())
console.log(func())
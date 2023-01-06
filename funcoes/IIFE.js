// IIFE -> Funções Imediatamente invocada

const nome = "pedro";
(function(idade,peso) {
    const nome = "Danilo";
    function criarPessoa(){
        return nome +" "+ idade +" "+ peso;
    }

    function mostrarPessoa(pessoa){
        console.log(pessoa)
    }
    const pessoa1 = criarPessoa();
    mostrarPessoa(pessoa1);
})(18,78);

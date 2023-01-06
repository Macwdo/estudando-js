function formulario() {
    const form = document.querySelector('.form');
    const lista = []
    const resultado = document.querySelector('.resultado')

    form.addEventListener("submit", function (e) {
        e.preventDefault()
        const nome = document.querySelector('.Nome');
        const idade = document.querySelector('.Idade');
        const sobrenome = document.querySelector('.Sobrenome');
        const peso = document.querySelector('.Peso');
        const altura = document.querySelector('.Altura');

        
        const obj = {
            nome: nome.value,
            idade: idade.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }
        lista.push(obj)
        resultado.innerHTML += `<p>${obj.nome} ${obj.idade} ${obj.sobrenome} ${obj.peso} ${obj.altura}</p>`
        console.log(lista)

    })



};

formulario();
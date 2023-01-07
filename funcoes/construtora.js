
function Pessoa(nome, sobrenome){
    // Privados
    const ID = 123;

    const interno = () => {
        return this.nome + " " + ID
    };

    // Publicos - this
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome +" Olá")
    }

    this.metodoInterno = () => {
        console.log(interno());
    }
}

const p1 = new Pessoa("Danilo", "Macedo");
p1.metodo();
p1.metodoInterno();
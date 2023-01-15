const nome = 'danilo';
const sobrenome = 'macedo';
const idade = 30;

export function soma(x, y){
    return x + y
}

// export default idade;

export {nome};

export {nome as default, sobrenome}

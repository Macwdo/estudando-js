const falar = {
    falar(){
        console.log(this.nome)
    }
}

const comer = {
    comer(){
        console.log(this.nome)
    }
}

const beber = {
    beber(){
        console.log(this.nome)
    }
}

// const pessoaProto = {...falar, ...comer, ...beber}
const pessoaProto = Object.assign({}, falar, comer, beber)

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaProto, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

// function criaPessoa(nome, sobrenome){
//     const pessoaProto = {
//         falar(){
//             console.log(this.nome)
//         },
//         comer(){
//             console.log(this.nome)
//         },
//         beber(){
//             console.log(this.nome)
//         }
//     }
//     return Object.create(pessoaProto, {
//         nome: {value: nome},
//         sobrenome: {value: sobrenome}
//     })
// }



const p1 = criaPessoa("danilo", "macedo")


console.log(criaPessoa.prototype)

console.log(p1)
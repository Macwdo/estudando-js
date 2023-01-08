const pessoas = [
    {id:2, nome:"joao"},
    {id:3, nome:"pedro"},
    {id:1, nome:"carlos"},
    {id:0, nome:"junior"}
]

// const novasPessoas = {};

// for (const pessoa of pessoas){
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa}
// }

const novasPessoas = new Map();

for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa})
}

// for (const [iDN, {id, nome}] of novasPessoas){
//     console.log(iDN, id, nome)
// }

// for (const id of novasPessoas.keys()){
//     console.log(id)
// }

// for (const values of novasPessoas.values()){
//     console.log(values)
// }



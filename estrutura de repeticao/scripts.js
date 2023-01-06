const obs = [{nome: "danilo", idade: 12}, {nome: "dani", idade: 55}]
const obj = {nome: "carl", idade: 32}
const string = "ola meu amigo"

// for(let i=0;i<obs.length;i++){
//     console.log(obs[i].nome)
// }

// console.log("///")

// for (let i in obs){
//     console.log(obs[i].idade, obs[i].nome)
// }

// console.log("///")

// for (let i in obj){
//     console.log(i ,obj[i])
// }


// for (const dado of obs) {
//     console.log(dado.nome, dado.idade)
// }

const locais = {
    estado: "Rj",
    cidades: ["Arraial", "Teresópolis"]
}

for (const cidades of locais.cidades) {
    console.log(cidades)
}

// obs.forEach(function (valor, indice, array) {
//     console.log(valor)
//     console.log(indice)
//     console.log(typeof array)
//     console.log("///")

// })

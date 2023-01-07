// nomes.splice(indice, delete, elem1, elem2, ...)
const nomes = ["Danilo", "Macedo", "Joao","Carlos", "Popó", "Daniel"];
console.log(nomes)
// const removidos = nomes.splice(0,2);

const addNovo = nomes.splice(2,0,"Lucas");

// Pop
// nomes.splice(-1, 1)

// Push
// nomes.splice(-1, 0, "Novo")

// Shift
// nomes.splice(0,1)

// Unshift
// nomes.splice(0, 0, "Novo")
// Tipos de dados - Primitivos

//  string - numbers - boolean - undefined - null - (bigint , symbol)

let a = 1;
let b = a;

// Copia o valor

// Referencia - array, object, function - Passados por referência.

let listaA = [1, 2 ,3];
// Aponta para o mesmo endereço , Referencia
let listaB = listaA;

// Caso queira copia
let listaRealB = [...listaA];

// Mesmo

let objA = {
    nome: "Danilo",
    idade: 19,
    sobrenome: "Macedo"
}

let objB = objA;

let objRealB = {...objA}
objRealB["altura"] = 1.73

console.log(objA, objB)
console.log(objRealB)
console.log(objA)


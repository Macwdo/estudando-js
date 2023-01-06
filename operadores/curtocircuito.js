/*
    || 
    && -> false && false -> "false" o valor mesmo

    True -> Retorna o ultimo valor

    FALSY
    *false 
    0
    '' "" ``
    null / undefined
    NaN

*/

const fncOi = () => {
    return "Oi"
};

console.log("Danilo" && "Dan")
console.log("Danilo" && undefined)
console.log("Danilo" && NaN)
console.log("Danilo" && "")
console.log(false && fncOi())
console.log(false || fncOi())

const corNull = null;
const corDefault = corNull || "Preto";

console.log(corDefault)
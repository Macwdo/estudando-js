const a1 = ["Banana", "Maça"];
const a2 = ["Uva", "Laranja"];

// const a3 = a1.concat(a2, "Pedro", 321);
// ...rest , ... spread -Espalhando array
const a3 = [...a1, ...a2, ...[1,2,4]]

console.log(a3)

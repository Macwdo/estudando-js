const alunos = ["Danilo", "Pedro", "Joao"]

console.log(alunos);

alunos[1] = "Carlos";
console.log(alunos);

alunos[3] = "Julia";
console.log(alunos);

alunos[6] = "Fernanda";
console.log(alunos);

alunos.push("Daniel") // Ultimo
console.log(alunos);
alunos.unshift("Tiago") // Primeiro
console.log(alunos);
alunos.pop() // Ultimo
alunos.shift() // Primeiro
console.log(alunos);

console.log(alunos.slice(0,3))

console.log(typeof alunos)
console.log(alunos instanceof Array)

// for (i=0; i<alunos.length;i++){
    
//     console.log(alunos[i], typeof alunos[i]);

// }

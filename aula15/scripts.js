
const num = prompt("Digite um numero");

const numeros = document.getElementById("numeros");

numeros.innerHTML = "";

numeros.innerHTML += `<p>Raiz quadrada de ${num} é ${Math.sqrt(num)} </p>`;
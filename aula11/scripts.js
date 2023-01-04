

function app() {
    const confirma = confirm("Deseja confirmar");
    if (confirma){
        alert("Confirmado");
        const senha = prompt("Digite sua senha");
        alert(`Sua senha é ${senha}`);
    }
    else
        alert("Não confirmado");

};

let var1 = 1;
let var2 = 6;
let var3 = 4;
console.log(var1, var2 ,var3);

[var1, var2 , var3] = [var2, var3, var1];

console.log(var1, var2 ,var3);

app();
function funcao() {
    let total = 0;
    for(let i of arguments){
        total += i;
    }
    console.log(total);
    
}
funcao(1,512,215,623,632);

function soma(a, b=0) {
    console.log(a + b);
}
soma(1) 

function soma3(a, b=12, c=1){
    console.log(a +b + c)
}

soma3(1, undefined, 2); //Apenas passando b - como undefined para ele assumir seu valor

// Passando Objeto ou desestruturando-o


const obj0 = {nome: "Danilo", idade: 20}
function funcDesObj ({nome, idade}) {
    console.log(nome, idade)
}

funcDesObj(obj0)

// Rest operator


const obj1 = {nome: "Danilo", idade: 20, cidade: "Rio", estado: "RJ"}
function funcDesObjRest ({nome, idade, ...resto}) {
    console.log(nome, idade, resto)
}

funcDesObjRest(obj1)

// Passando Objeto ou desestruturando-o


const arr0 = ["danilo", "joao", "pedro", "juca"]
function funcDesArr ([primeiro, segundo]){
    console.log("primeiro -", primeiro, "Segundo -", segundo)
}

funcDesArr(arr0)

const arr1 = ["danilo", "joao", "pedro", "juca"]
function funcDesArrRest ([primeiro, segundo, ...resto]){
    console.log("primeiro -", primeiro, "Segundo -", segundo, "resto -", resto)
}

funcDesArrRest(arr1)
// let i = 0;

// while(i<=10){
//     console.log(i)
//     i++
// }

const random = (max, min) =>{
    let rand = Math.random() * (max-min) + min;
    return Math.floor(rand)

}


let rand = random(50,1)

let cont = 0;

rand = 10;
console.log(rand !== 10)

// while(rand !== 10){
//     rand = random(50,1)
//     console.log(rand)
//     cont++
// }

rand = 10;

do{    
    console.log(rand)

    rand = random(50,1)
    console.log(rand)
    cont++}
while(rand !== 10);

console.log("/")
console.log(cont)

let n = 0;
while(n < 10){
    n++
    if (n === 2){
        console.log("Aqui era o 2");
        continue;
    }
    console.log(n)
}

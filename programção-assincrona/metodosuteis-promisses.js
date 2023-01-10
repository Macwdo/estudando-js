function aleatorio(min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== "string") reject("BAD VALUE");
            resolve(msg + "- Passou na Promise");
        }, tempo)
    });
}

// Promise.all()
// Promise.race()
// Promise.reject()
// Promise.resolve()

// const promisses = [
//     esperaAi('Promisse 1', aleatorio(1,3)),
//     esperaAi('Promisse 2', aleatorio(1,3)),
//     esperaAi('Promisse 3', aleatorio(1,3)),
//     esperaAi(312, aleatorio(1,3))
// ]

 
// Promise.all(promisses).then(
//     value => console.log(value)
// )
// .catch(
//     error => console.log(error)
// )


// function baixaPagina () {
//     const emCache = true;

//     if (emCache){ 
//         return Promise.reject('Em cache')
//     }
//     else {
//          return esperaAi("Baixou", 2000)
//     }
// }

function baixaPagina () {
    const emCache = true;

    if (emCache){ 
        return Promise.resolve('Em cache')
    }
    else {
         return esperaAi("Baixou", 2000)
    }
}
baixaPagina()
.then(res => console.log(res))
.catch(e => console.log('ERROR' + e))
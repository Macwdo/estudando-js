function aleatorio(min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject("BAD VALUE");
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

esperaAi("Frase 1", aleatorio(1, 3))
    .then(response => {
    console.log(response);
    return esperaAi(2222, aleatorio(1, 3))
 }).then(response => {
        console.log(response)
        return esperaAi('Frase 3', aleatorio(1, 3));
    }
 ).then(response => {
        console.log(response)
    }
)
 .catch(
    e => {
        console.log('ERRO', e)
    }
 );



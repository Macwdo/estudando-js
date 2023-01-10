function aleatorio(min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== "string"){
                reject("BAD VALUE")
                return
            }
            resolve(msg + " Passou na promisse");
            return;

        }, tempo)
    });
}




// const resp = esperaAi("Fase1", aleatorio(0,3))
// .then( response => {
//     return esperaAi("Fase1", aleatorio(0,3));
// }).then()

async function executa(){
    try {
        const fase1 = await esperaAi('Fase 1', aleatorio(1, 3))
        console.log(fase1)
        const fase2 = await esperaAi('Fase 2', aleatorio(1, 3))
        console.log(fase2)
        const fase3 = await esperaAi(1, aleatorio(1, 3))
        console.log(fase3)
        const fase4 = await esperaAi('Fase 4', aleatorio(1, 3))
        console.log(fase4)
    } catch (e){
        console.log(e)
    }


}


executa()
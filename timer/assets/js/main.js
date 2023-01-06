const comecar = document.querySelector("#comecar")
const pausar = document.querySelector("#pausar")
const parar = document.querySelector("#parar")
let timer;
let secs = 0;

const criaHoras = (sec) =>{
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: "GMT"
    })
}

function tempInit () { 
    timer = setInterval( function () {
    secs++
    let temp = criaHoras(secs)
    document.querySelector(".timer").innerHTML = temp;
}, 1000)
}

document.addEventListener("click", function (e) {
    const elem = e.target.id;
    if (elem === "comecar"){
        tempInit()
    }

    else if (elem === "pausar"){
        clearInterval(timer)
    }

    else if (elem === "parar"){
            clearInterval(timer)
            secs = 0;
            document.querySelector(".timer").innerHTML = criaHoras(0);
    }
}
)

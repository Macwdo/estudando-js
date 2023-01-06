try {
    const num = 10;
    num = 32
} catch (e) {
    console.log("Sem error")
}

const soma = (x, y) => {
    if (typeof x !== "number" || typeof y !== "number")
    throw("tem erro aqui"); // new Error(); ValidationError-> Python
    return x + y;
}

try{
    soma("5",2)
} catch (e){
    console.log(e)
}

const transf = (v) => {
    if (v > 10){
        throw("Valor Invalido")
    }
    return "Transferindo";
}

const valor = 2;

try{
    console.log(transf(valor))
} catch {
    console.log("Invalido")
} finally {
    console.log("Finalizou Operação")
}
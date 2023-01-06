function rand (min=500, max=1500){
    const random =  Math.random() * (max - min) + min;
    return Math.floor(random);

}

function f1 (callback) {
    setTimeout(function () {
        console.log("F1")
        if (callback) callback();
    }, rand())
}

function f2 (callback) {
    setTimeout(function () {
        console.log("F2")
        if (callback) callback();
    }, rand())
}

function f3 (callback) {
    setTimeout(function () {
        console.log("F3")
        if (callback) callback();
    }, rand())
}

// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log("Hello world")
//         });
//     })
// })
// samething

f1(f1callback);

function f1callback() {
    f2(f2callback);

};

function f2callback() {
    f3(f3callback);    
}
function f3callback(){
    console.log("Hello world")
}



function calc1 (callback){
    let sum = 0;
    console.log("Começou pesado")
    for(let i=0; i<1000000;i++){
        sum += i;
    }
    console.log("Foi Pesado")

    if (callback) callback();
}

function calc2 (callback){
    console.log("Foi Leve")
    if (callback) callback();
}

calc1(callback => {
    calc2( callback => {
        console.log("Fim")
    })
});


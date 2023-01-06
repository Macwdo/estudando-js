function soma(a, b) {
    return a + b;
}

console.log(soma(4,2));

function falaFrase (comeco) {
    function falaResto (resto){
        return comeco + " " + resto;
    }
    return falaResto;
}

const func1 = falaFrase("Ola");

console.log(func1("Mundo"));

// function multiplicador (multiplic) {
//     function multiplica(n) {
//         return n * multiplic;
//     }
//     return multiplica;
// }

function multiplicador (multiplic) {
    return function multiplica(n) {
        return n * multiplic;
    };
}


const mult1 = multiplicador(10);

const tri = mult1(3);

console.log(tri)
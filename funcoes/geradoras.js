function* geradora1(){
    // Codigo...
    yield 'valor1';
    // Codigo...
    yield 'valor2';
    // Codigo...
    yield 'valor3';
}
const g1 = geradora1();
const g2 = geradora1();
const g3 = geradora1();

function* geradora2(){
    yield 1;
    yield 2;
    yield 3;
}

function* gerador3(){
    yield* geradora2();
    yield 4;
    yield 5;
    yield 6;

}

function* gerador4(){
    yield function(){
        console.log("Foi y1")
    }

    yield function(){
        console.log("Foi y2")
    }
}
const ger4 = gerador4();
const ger4_1 = ger4.next();
const ger4_2 = ger4.next();

ger4_1.value()
ger4_2.value()


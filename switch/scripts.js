const data = new Date()

console.log(data)

let diaDaSemana;

switch(data.getDay()){
    case 0:
        diaDaSemana = "Domingo";
        break;
    case 1:
        diaDaSemana = "Segunda"
        break;
    case 2:
        diaDaSemana = "Terça"
        break;
    case 3:
        diaDaSemana = "Quarta"
        break;
    case 4:
        diaDaSemana = "Quinta"
        break;
    case 5:
        diaDaSemana = "Sexta"
        break;
    case 6:
        diaDaSemana = "Sabado"
        break;

}

console.log(diaDaSemana)

const data = new Date(2019, 3, 10); // Ano - Mes (0, 11) - Dia - Hora - Minuto - Segundo - Milesimo
const data1 = new Date('2012-04-10 13:00:00')
const dataAt = new Date()

console.log(data1)
console.log(data.toJSON())
console.log("Dia", dataAt.getDate())
console.log("Mês", parseInt(dataAt.getMonth()) + 1)
console.log("Ano", dataAt.getFullYear())
console.log("Hora", dataAt.getHours())
console.log("Min", dataAt.getMinutes())
console.log("Seg", dataAt.getSeconds())
console.log("Dia da semana", dataAt.getDay())
console.log(Date.now())

func
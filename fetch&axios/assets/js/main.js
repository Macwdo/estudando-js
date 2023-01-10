// fetch('pessoas.json')
// .then(
//     response => {return response.json()}
// )
// .then(
//     json => loadItems(json)
// )

axios('pessoas.json')
.then(resposta => loadItems(resposta.data))

function loadItems(json){
    const table = document.createElement('table')
    const cont = document.querySelector('.resultado')
    for (let i of json){

        let tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = i.nome
        tr.appendChild(td)


        let td2 = document.createElement('td')
        td2.innerHTML = "R$" + i.salario
        tr.appendChild(td2)

        table.appendChild(tr)
    }
    cont.appendChild(table)
    
}
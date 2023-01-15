const path = require('path');
const writ = require('./modules/escrever')
const readd = require('./modules/ler')

const caminhoArquivo = path.resolve(__dirname , 'teste.json')

const pessoas = [
    {nome: 'joao'},
    {nome: 'joaos'},
    {nome: 'joaof'},
    {nome: 'joaog'}
]

// writ(caminhoArquivo, pessoas)

async function ler (caminho) {
    const dados = await readd(caminho);
    renderiza(dados);
}

function renderiza (dados) {
    data = JSON.parse(dados);
    data.forEach( val => console.log(val));
}


ler(caminhoArquivo)


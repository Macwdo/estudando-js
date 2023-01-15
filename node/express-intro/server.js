const express = require('express')
const app = express();


app.get('/', (req, res) => { 
    res.send(`
    <form action="/" method="POST">
    nome: <input type="text" name="nome">
    <button> Enviar </button>
    
    </form>
    `)
});

app.post('/', (req, res) => {
    res.send('Recebi o Formulario')
})

app.get('/contato', (req, res) => {
    res.send('Contato')
})

app.listen(3000, () => {
    console.log('Aplicação rodando: http://localhost:3000')
});

const express = require('express')
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

app.get('/', (req, res) => { 
    res.send(`
    <form action="/" method="POST">
    nome: <input type="text" name="nome">
    <button> Envia </button>
    
    </form>
    `)
});

app.get('/teste/:idUsuario?/:parametro?', (req, res) => {
    res.send(req.params)
    console.log( req.query, req.params)
})

app.post('/', (req, res) => {
    res.send('Recebi o Formulario')
    console.log(req.body)
})

app.listen(3000, () => {
    console.log('Aplicação rodando: http://localhost:3000')
});

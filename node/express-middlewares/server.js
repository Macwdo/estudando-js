const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const {middlewareGlobal, middlewareTest} = require('./src/middlewares/middleware');


app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)
// Middle wares

app.use(middlewareGlobal)
// app.use(middlewareTest)

app.use(routes)
app.use(express.static(path.resolve(__dirname, "public")))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');



app.listen(3000, () => {
    console.log('Aplicação rodando: http://localhost:3000')
});

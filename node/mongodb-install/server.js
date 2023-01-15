require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')


mongoose.set('strictQuery', true)

mongoose.connect(process.env.DATABASEURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(connect => {
    app.emit('ready')
})
.catch(
    e => console.log(e)
);

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


app.on('ready', () => {
    app.listen(3000, () => {
        console.log('Aplicação rodando: http://localhost:3000')
    });    
})

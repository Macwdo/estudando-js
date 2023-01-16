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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');

const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');

app.use(helmet());

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "public")))

const sessionsOptions = session({
    secret: 'meuscret',
    store: MongoStore.create({ mongoUrl: process.env.DATABASEURL}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionsOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());

app.use(middlewareGlobal);
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(routes);

app.on('ready', () => {
    app.listen(3000, () => {
        console.log('Aplicação rodando: http://localhost:3000')
    });    
})

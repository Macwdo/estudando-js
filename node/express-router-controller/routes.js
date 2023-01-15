const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController')

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)
module.exports = route;
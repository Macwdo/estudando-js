exports.paginaInicial = (req, res) => { 
    res.render('index', {
        titulo: 'Titulo da pag',
        numeros: [1, 2, 3, 4]
    })
    return;

}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return;
}
exports.paginaInicial = (req, res) => { 
    req.flash('error')
    // req.session.usuario = { nome: 'danilo', logado: true }
    res.render('index')
    return;

}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return;
}
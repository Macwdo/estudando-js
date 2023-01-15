exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente){
        console.log('Passou no middleware global')
        console.log('Ola cliente', req.body.cliente)
    }
    next();
}

exports.middlewareTest = (req, res, next) => {
    console.log('middlewaretest')
    next();
}
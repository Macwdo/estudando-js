exports.middlewareGlobal = (req, res, next) => {
    res.locals.varLocal = 'Este é o valor da variavel'
    next();
}

exports.middlewareTest = (req, res, next) => {
    console.log('middlewaretest')
    next();
}
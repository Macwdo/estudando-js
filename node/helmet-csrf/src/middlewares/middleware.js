exports.middlewareGlobal = (req, res, next) => {
    res.locals.varLocal = 'Este é o valor da variavel'
    next();
}

exports.middlewareTest = (req, res, next) => {
    console.log('middlewaretest')
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' == err.code){
        return res.send('BAD CSRF')

    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}
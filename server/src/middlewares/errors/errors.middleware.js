const unknownEndPoint = (req, res, next) => {
    res.status(404).send('404 Not Found')
}

const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.message)
}

module.exports = { errorHandler, unknownEndPoint }
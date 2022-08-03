const app = require('./app')
const { unknownEndPoint, errorHandler } = require('./middlewares/errors')

const PORT = process.env.PORT || 5000

// custom middleware logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Catch not existing middleware
app.use(unknownEndPoint)

// Catch Error Middleware
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
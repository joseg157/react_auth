const app = require('./app')
const { unknownEndPoint, errorHandler } = require('./middlewares/errors')
const { verifyJWT } = require('./middlewares/verifyJWT')

const PORT = process.env.PORT || 5000

// custom middleware logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// routes
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))

// Protect routes
app.use('/logout', require('./routes/logout'))
app.use('/refresh', require('./routes/refresh'))
app.use(verifyJWT)
app.use('/private', require('./routes/api/private'))

// Catch not existing middleware
app.use(unknownEndPoint)

// Catch Error Middleware
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
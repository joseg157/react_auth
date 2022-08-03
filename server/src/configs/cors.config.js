// ! remove before prod and add your domain
const whitelist = [
    'http://localhost:5000',
    'http://localhost:3000'
]

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) { // ! remove '!origin later
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions
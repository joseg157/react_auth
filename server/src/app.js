require('dotenv').config()
const express = require('express');
const cors = require('cors')
const cookierParser = require('cookie-parser')
const corsOptions = require('./configs/cors.config')
const { credentials } = require('./middlewares/credentails')
const app = express();

// Handle Options credentials check - before CORS
// and fetch cookies credentials requirement
app.use(credentials)

// Cross Origin Resources Sharing
// Give permission other application to communicate with backend
app.use(cors(corsOptions));

// urlencoded data (form data)
app.use(express.urlencoded({ extended: false }));

// build-in middleware for json
app.use(express.json());

// middleware for cookies
app.use(cookierParser())

module.exports = app
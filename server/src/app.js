const express = require('express');
const cors = require('cors')
const corsOptions = require('./configs/cors.config')
const app = express();

// Cross Origin Resources Sharing
// Give permission other application to communicate with backend
app.use(cors(corsOptions));

// urlencoded data (form data)
app.use(express.urlencoded({ extended: false }));

// build-in middleware for json
app.use(express.json());

module.exports = app
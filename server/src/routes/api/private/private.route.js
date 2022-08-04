const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('PRIVATE')
})

module.exports = router
const express = require('express');
const router = express.Router();

const ROLES_LIST = require('../../../configs/roles_list')
const { verifyRoles } = require('../../../middlewares/verifyRoles')

router.get('/', verifyRoles(ROLES_LIST.Admin), (req, res) => {
    res.send('PRIVATE')
})

module.exports = router
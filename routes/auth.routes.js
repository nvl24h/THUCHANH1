const express = require('express')
const router = express.Router()

// create new user
router.post('/', (req, res, next) => {
    res.json('creatre new user')
})

module.exports = router
const express = require('express')
const router = express.Router()
const createUser = require('../services/auth.services')

// create new user
router.post('/register', async (req, res, next) => {
    try {
        const data = await createUser(req.body)      
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router
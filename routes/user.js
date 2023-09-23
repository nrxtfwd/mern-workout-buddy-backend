const express = require('express')

const { signUpUser, loginUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// sign up route
router.post('/signup', signUpUser)

module.exports = router
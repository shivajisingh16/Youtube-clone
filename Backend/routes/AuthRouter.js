const { signup, login,logout } = require('../Controllers/AuthController');

const router = require('express').Router();


router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)



module.exports = router
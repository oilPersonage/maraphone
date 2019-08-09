const { Router } = require('express')
const { login, create } = require('../controllers/auth.controller')

const router = Router()

// /api/auth/login
router.post('/login', login)
router.post('/create', create)

module.exports = router

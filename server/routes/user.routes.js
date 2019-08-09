
const { Router } = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const { getUser, updateUser } = require('../controllers/user.controller')

const router = Router()

router.get(
  '/getUser',
  passport.authenticate('jwt', { session: false }),
  upload.single('image'),
  getUser
)

router.put(
  '/updateUser/:id',
  passport.authenticate('jwt', { session: false }),
  updateUser)


module.exports = router

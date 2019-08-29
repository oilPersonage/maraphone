const passport = require('passport')
const { Router } = require('express')
const upload = require('../middleware/upload')
const { create, getAll, update, remove, getCourseId } = require('../controllers/course.controller')

const router = Router()

// api/course/create
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  upload.single('image'),
  create
)

router.get(
  '/getCourseAll',
  passport.authenticate('jwt', { session: false }),
  getAll
)
router.get(
  '/getCourse/:id',
  passport.authenticate('jwt', { session: false }),
  getCourseId
)
router.put(
  '/update/:id',
  passport.authenticate('jwt', { session: false }),
  update
)

router.delete(
  '/create/:id',
  passport.authenticate('jwt', { session: false }),
  remove
)

module.exports = router

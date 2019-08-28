const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport.strategy')
const authRoutes = require('./routes/auth.routes')
const courseRoutes = require('./routes/course.routes')
const userRoutes = require('./routes/user.routes')

const keys = require('./config')

const app = express()

mongoose.connect(keys.mongodb, { useNewUrlParse: true })
  .then(() => console.log('Mongodb connected'))
  .catch((e) => {
    console.error(e)
  })

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/course', courseRoutes)
app.use('/api/users', userRoutes)

module.exports = app

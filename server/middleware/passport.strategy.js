const { Strategy, ExtractJwt } = require('passport-jwt')
const keys = require('../config')
const User = require('../models/user.model')

// Authorization: Bearer token
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwt
}

module.exports = new Strategy(options, async (payload, done) => {
  try {
    const candidate = await User.findById(payload.id).select('id')
    if (candidate) {
      done(null, candidate)
    } else {
      done(null, false)
    }
  } catch (e) {
    console.error(e)
  }
})

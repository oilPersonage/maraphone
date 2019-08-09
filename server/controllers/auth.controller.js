const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user.model')

const keys = require('../config/')

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({ login: req.body.login })

  if (candidate) {
    const isPassword = bcrypt.compareSync(req.body.password, candidate.password)

    if (isPassword) {
      const token = jwt.sign({
        login: candidate.login,
        id: candidate._id
      }, keys.jwt, { expiresIn: 60 * 60 })
      res.json({ token, user: candidate })
    } else {
      res.status(404).json({ message: 'Пользотель не найден' })
      // res.status(401).json({message: 'Не правильный логин/пароль'})
    }
  } else {
    res.status(404).json({ message: 'Пользотель не найден' })
  }
}

module.exports.create = async (req, res) => {
  const { login, password, userName, slogan, posts, likes } = req.body
  const candidate = await User.findOne({ login })

  if (candidate) {
    res.status(409).json({ message: 'Логин уже занят' })
  } else {
    const salt = bcrypt.genSaltSync(10)
    const user = new User({
      login,
      userName,
      slogan,
      posts,
      likes,
      password: bcrypt.hashSync(password, salt)
    })
    await user.save()
    res.status(201).json(user)
  }
}

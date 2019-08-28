const User = require('../models/user.model')

module.exports.updateUser = async (req, res) => {
  const $set = { ...req.body }
  try {
    const candidate = await User.findOneAndUpdate({
      _id: req.params.id
    }, { $set }, { new: true })
    res.json(candidate)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getUser = async (req, res) => {
  const { id } = req.body
  const candidate = await User.findById(id)
  if (candidate) {
    res.json({ candidate })
  } else {
    res.status(404).json({ message: 'Пользователь не найден' })
  }
}

module.exports.getUserCourse = async (req, res) => {
  const { id } = req.params
  console.log(123123, id)
  try {
    await User.findOne({ _id: id })
      .populate({
        path: 'courses',
        model: 'course'
      })
      .exec((err, user) => {
        res.json(user.courses)
      })
  } catch (e) {
    res.status(500).json(e)
  }
}

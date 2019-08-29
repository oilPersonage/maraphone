const Course = require('../models/course.model')
const User = require('../models/user.model')

module.exports.create = async (req, res) => {
  const { name, description, createdUser, img } = req.body
  const post = new Course({
    name,
    description,
    // image: `/${req.file.filename}`,
    img: `${img}`,
    createdUser
  })

  try {
    const saved = await post.save()
    const us = await User.findOne({ _id: createdUser.id })
    us.courses.push(saved.id)
    us.save()
    res.status(201).json({ post })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const courses = await Course.find().sort({ date: -1 })
    res.json(courses)
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.getCourseId = async (req, res) => {
  const { id } = req.params
  try {
    const course = await Course.findById(id)
    res.json(course)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  const { name, description } = req.body
  const $set = { name, description }

  try {
    const courses = await Course.findOneAndUpdate({
      _id: req.params.id
    }, { $set }, { new: true })
    res.json(courses)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Course.deleteOne({ _id: req.params.id })
    res.json({ message: 'Пост удален' })
  } catch (e) {
    res.status(500).json(e)
  }
}

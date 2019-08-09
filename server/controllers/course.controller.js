const Course = require('../models/course.model')

module.exports.create = async (req, res) => {
  const { name, description, createdUser } = req.body
  const post = new Course({
    name,
    description,
    image: `/${req.file.filename}`,
    createdUser
  })

  try {
    await post.save()
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

module.exports.getById = async (req, res) => {
  const {id} = req.params
  try {
    await Course.find().populate('users').exec((err, course) => {
      res.json(course)
    })
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

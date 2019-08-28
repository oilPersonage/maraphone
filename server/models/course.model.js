const { model, Schema } = require('mongoose')

const courseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  img: { type: String },
  createdUser: { type: Object }
})

module.exports = model('course', courseSchema)

const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  userName: { type: String, required: true },
  slogan: { type: String },
  posts: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  // courses: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'users'
  //   }
  // ]
})

userSchema.virtual('courses', {
  ref: 'users'
})

module.exports = model('users', userSchema)

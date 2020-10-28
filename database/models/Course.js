const mongoose = require('mongoose')
const { Schema } = mongoose

const courseSchema = new Schema({
  title: String,
  length: String,
})
module.exports = mongoose.model('Course', courseSchema)

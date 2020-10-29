const mongoose = require('mongoose')
const { Schema } = mongoose

const studentSchema = new Schema({
  name: String,
  email: String,
})
module.exports = mongoose.model('Student', studentSchema)

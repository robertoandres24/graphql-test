const mongoose = require('mongoose')

const connect = async function () {
  try {
    await mongoose.connect('mongodb://localhost:27017/graphql-test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Mongo DB is connected...')
  } catch (error) {
    console.log('something went wrong')
    console.log(error)
  }
}

module.exports = connect

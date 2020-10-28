const connectDb = require('../database/connection')
const Course = require('../database/models/Course')
// connect to mongodb
;(async function () {
  await connectDb()
})()

module.exports = {
  Query: {
    getCourses: async () => await Course.find(),
    getCourse: async (root, args) => await Course.findById(args.id),
  },
}

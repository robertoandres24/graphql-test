const Course = require('../database/models/Course')

module.exports = {
  getCourses: async () => await Course.find(),
  getCourse: async (root, args) => await Course.findById(args.id),
}

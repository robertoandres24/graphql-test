const Course = require('../database/models/Course')
const Student = require('../database/models/Student')

module.exports = {
  getCourses: async () => await Course.find(),
  getCourse: async (root, args) => await Course.findById(args.id),
  getStudents: async () => await Student.find(),
  getStudent: async (root, args) => await Student.findById(args.id),
}

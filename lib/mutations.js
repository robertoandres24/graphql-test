const Course = require('../database/models/Course')

module.exports = {
  createCourse: async (root, { input }) => {
    const newCourse = new Course(input)
    newCourse.save()
    return newCourse
  },
}

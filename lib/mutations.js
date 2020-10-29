const Course = require('../database/models/Course')
const Student = require('../database/models/Student')

module.exports = {
  createCourse: async (root, { input }) => {
    const newCourse = new Course(input)
    newCourse.save()
    return newCourse
  },
  createStudent: async (root, { input }) => {
    const newStudent = new Student(input)
    newStudent.save()
    return newStudent
  },
}

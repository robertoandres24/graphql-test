const courses = [
  {
    id: 'unique_id',
    title: 'graphql course',
    length: '120 clases',
  },
  {
    id: 'unique_id2',
    title: 'react course',
    length: '150 clases',
  },
]

module.exports = {
  Query: {
    getCourses: () => courses,
    getCourse: (root, args) => courses.find((course) => course.id === args.id),
  },
}

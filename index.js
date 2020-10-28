const { graphql, buildSchema } = require('graphql')

// define schema

const schema = buildSchema(`
	type Query {
		hello: String,
		welcome: String
  } 
`)

// define resolvers
const resolvers = {
  hello: () => 'Hello world',
  welcome: () => 'Welcome to my world',
}

// execute query
graphql(schema, '{ welcome }', resolvers).then((data) => console.log(data))

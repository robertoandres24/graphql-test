const { graphql, buildSchema } = require('graphql')

// define schema

const schema = buildSchema(`
	type Query {
		hello: String
  } 
`)

// execute query
graphql(schema, '{ hello }').then((data) => console.log(data))

const { graphql, buildSchema } = require('graphql')
var { graphqlHTTP } = require('express-graphql')
const express = require('express')
const app = express()
const port = process.env.port || 4000

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
  welcome: () => 'Welcome to my changed world',
}

// execute query
// graphql(schema, '{ welcome }', resolvers).then((data) => console.log(data))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

app.listen(port, () =>
  console.log(`Now browse to http://localhost:${port}/graphql`)
)

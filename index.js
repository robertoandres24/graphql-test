const { makeExecutableSchema } = require('graphql-tools')
var { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const express = require('express')
const resolvers = require('./lib/resolvers')

// initialize express
const app = express()
const port = process.env.port || 4000

// define schema
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// execute query
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

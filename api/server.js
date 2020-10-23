const express = require("express");
// const helmet = require("helmet");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../schema");

const server = express();

// middlewares
server.use(cors());
// server.use(helmet()); breaks graphiql

// routes
server.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

module.exports = server;
const { gql, ApolloServer } = require('apollo-server')
const fs = require('fs');
const path = require('path');

const users = require("./users.json");

const schema = fs.readFileSync("schema.gql", { encoding: "utf8"});
const typeDefs = gql`${schema}`

const resolvers = {
    Query: {
        user: (parent, { id }, context, info) => users.find(user => user.id === id),
        users: () => users
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
    .listen({
        port: 4000
    })
    .then(({ url }) => console.log("server started on ", url))
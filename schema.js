const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require("graphql");

const users = [
    {
        username: "jess-daniel",
        email: "test@email.com",
    },
    {
        username: "brad",
        email: "brad@email.com",
    },
]


// types
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        username: {type: GraphQLString},
        email: {type: GraphQLString},
    })
})

// root 
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return users;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
})
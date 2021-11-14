const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }

    type Mutation {
        login(email, password)
        addUser
    }

    type User {

    }

    type Book {

    }
    
`;

module.exports = typeDefs;
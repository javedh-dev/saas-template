import { gql } from "@apollo/client";

export const typeDefs = gql`
    type User{
        id: ID!
        name: String! 
        email_id: String!   
    }

    type Query{
        user(id: String): User
        users: [User]   
    }

    input UserInput{
        name: String! 
        email_id: String!   
    }

    type Mutation{
        user(user: UserInput!): User
    }
`
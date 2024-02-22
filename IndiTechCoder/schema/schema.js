const typeDefs = `

type game{
    id:ID!
    title: String
    platform:[String!]!
}

type Query{
    games:[game]
}

`;

export default typeDefs;

import ApolloClient, { gql } from 'apollo-boost'

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
})

// client
//     .query({
//         query: gql`
//             {
//                 user(id: 1) {
//                     name
//                     age
//                     gender
//                 }
//             }
//         `
//     })

export default client;
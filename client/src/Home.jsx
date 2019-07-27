import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_USERS = gql`
{
    users {
        name
        age
        gender
    }
}
`

export default function App() {
    return (
        <Query query={GET_USERS}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return data.users.map(user => {

                    return (
                        <div>
                            <p>Name: {user.name}</p>
                            <p>Age: {user.age}</p>
                            <p>Gender: {user.gender}</p>
                        </div>
                    )
                })
            }}
        </Query>
    )
}

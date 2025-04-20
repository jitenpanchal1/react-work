import React from 'react'
import User from './Fetchdata'

function Username({ error, loading, data }) {
    if (!data) return <h1>Data not found</h1>
    if (error) return <h1>masg : {error}</h1>
    if (loading) return <h1> Loading data</h1>

    return (
        <>
            <div>
                <ul>
                    {data.map((user) => {
                        return <li key={user.id}>{user.body}</li>
                    })}
                </ul>
            </div>
        </>

    )
}

export default User(Username)

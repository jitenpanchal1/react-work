import React from 'react'
import User from './Fetchdata'

function Userid({ error, data, loading }) {
    if (error) return <h1>msg : {error}</h1>
    if (!data) return <h1>Data not found</h1>
    if (loading) return <h1>data Loading</h1>
    return (
        <>
            <div>
                <ul>
                    {data.map((user) => {
                        return <li key={user.id}>{user.id}</li>
                    })
                    }
                </ul>
            </div>
        </>
    )
}

export default User(Userid)

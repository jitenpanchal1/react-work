import React from 'react'
import User from './Fetchdata'


function Userlist({ data, error, loading }) {
    if (error) return <p>Error:{error}</p>
    if (loading) return <h1>Loading data.....</h1>
    if (!data) return <p>data not find</p>

    // let show = data.map((user))
    return (
        <div>
            <h1>
                <ul>
                    {data.map((user) => {
                        return <li key={user.id}>data{user.title}</li>
                    })}
                </ul>
            </h1>
        </div>
    )
}

export default User(Userlist)

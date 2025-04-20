import React, { useEffect, useState } from 'react'

const User = (Userdata) => {
    return function Fetching() {
        const [data, setdata] = useState(null)
        const [error, seterror] = useState(null)
        const [loading, setloading] = useState(true)

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('faild to fetch')
                    }
                    return res.json()
                })

                .then((data) => {
                    setdata(data)
                    setloading(false)
                })

                .catch((err) => {
                    seterror(err.msg)
                    setloading(false)
                });

        }, [])
        return (
            <Userdata data={data} error={error} loading={loading} />
        )
    }
}

export default User

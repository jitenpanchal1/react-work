import React, { useEffect, useState } from 'react'

const Hoccompo = (User) => {

    return function fetching() {
        console.log("hi i am hoc here")

        const [data, setdata] = useState(null)
        const [err, seterr] = useState(null)
        const [loading, setloading] = useState(true)


        useEffect(() => {

            fetch("https://jsonplaceholder.typicode.com/todos")
                .then((res) => {

                    if (!res.ok) {
                        throw new Error("faild to fetch")
                    }

                    return res.json()
                })

                .then((data) => {
                    setdata(data)
                    setloading(false)
                })

                .catch((error) => {
                    seterr(msg.error)
                    setloading(false)
                })

        }, [])

        return (
            <User data={data} err={err} loading={loading} />
        )
    }
}

export default Hoccompo

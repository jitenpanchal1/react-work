import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'

function Editform() {

    const { id } = useParams()
    const [msg, setmsg] = useState(null)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setname(data.name)
                setemail(data.email)
                setpassword(data.password)
            })
            .catch(() => {
                setmsg("Failed to fetch data")
            })
    }, [id])

    const savedata = async (e) => {
        e.preventDefault()
        let merge = { name, email, password }
        try {
            await fetch(`http://localhost:5000/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(merge)
            })

            setmsg(() => {
                return (
                    <>
                        <p>
                            Your data is edited succesfully <Link to="/learning/showdata">click here</Link> to check.
                        </p>
                    </>
                )
            })
            setname("")
            setemail("")
            setpassword("")
        } catch (err) {
            setmsg("Failsd to Edit")
        }

    }
    return (
        <>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-center h-50 w-25 px-4 border border-dark'>
                    <form onSubmit={savedata}>
                        <div className='w-100 my-2'>
                            <input
                                type="text"
                                placeholder={`${id}`}
                                disabled />
                        </div>
                        <div>
                            <label className='w-100 my-2' htmlFor="name">Enter your name</label>
                            <input
                                id='name'
                                type="text"
                                value={name}
                                onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div>
                            <label className='w-100 my-2' htmlFor="email">Enter your Mail</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div>
                            <label className='w-100 my-2' htmlFor="passs">Enter Password</label>
                            <input
                                type="text"
                                id="passs"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div className='my-2'>
                            <input
                                type="submit"
                                value="submit" />
                        </div>
                        <div>
                            {msg}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Editform

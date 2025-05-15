import { data } from 'jquery'
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
                        <p>Your data is edited succesfully  <Link to="/learning/showdata">click here</Link> to check</p>
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
            <div className='text-center'>
                <div>
                    <form onSubmit={savedata}>
                        <div>
                            <input
                                type="text"
                                placeholder={`${id}`}
                                disabled />
                        </div>
                        <div>
                            <label htmlFor="name">Enter your name</label>
                            <input
                                id='name'
                                type="text"
                                value={name}
                                onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">Enter your Mail</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="passs">Enter Password</label>
                            <input
                                type="text"
                                id="passs"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div>
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

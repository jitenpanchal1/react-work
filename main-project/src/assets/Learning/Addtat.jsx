import React, { useState } from 'react'
import { Link } from 'react-router'
import "../Css/App.css"

function Addtat() {
    const [msg, setmsg] = useState(null)
    const [errmsg, seterrmsg] = useState(null)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const handsave = async (e) => {
        e.preventDefault()

        if (!name) {
            setmsg("")
            seterrmsg("pls fill the all above field")
            return;
        } else if (!email) {
            setmsg("")
            seterrmsg("pls fill the all above field")
            return;
        } else if (!password) {
            setmsg("")
            seterrmsg("pls fill the all above field")
            return;
        }

        let data = { name, email, password }
        try {
            await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            seterrmsg("")
            setmsg(() => {
                return (
                    <p >
                        ✅ Data saved successfully. Click <Link to="/learning/showdata">here</Link> to view it.
                    </p>

                )
            })
            setname("")
            setemail("")
            setpassword("")

        } catch (err) {
            setmsg("")
            seterrmsg("failed to save")
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-center add h-50 w-25 px-4  border border-dark'>
                <form onSubmit={handsave}>
                    <div>
                        <label className='w-100 my-2' htmlFor="name">Enter name</label>
                        <input
                            className='w-100'
                            id='name'
                            type="text"
                            value={name}
                            onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div >
                        <label className='w-100 my-2' htmlFor="email">Enter Email</label>
                        <input
                            className='w-100'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div>
                        <label className='w-100 my-2' htmlFor="pass">Enter Password</label>
                        <input
                            className='w-100'
                            type="password"
                            id="pass"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <div className='my-2'>
                        <input
                            type="submit"
                            value="submit" />
                    </div>
                    <div className='add-msg'>
                        {msg}
                    </div>
                    <div className='add-msg-2'>
                        {errmsg}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addtat

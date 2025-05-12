import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

function Register() {

    const [username, setusername] = useState("")
    const [role, setrole] = useState("user")
    const [msg, setmsg] = useState("")
    const navigate = useNavigate()

    const handregister = () => {

        const userdata = { username, role }

        const rawdata = sessionStorage.getItem("user")
        const exitinguser = rawdata ? JSON.parse(rawdata) : []

        const exist = exitinguser.find(u => u.username === username && u.role === role);

        if (exist) {
            setmsg("user already exist try to register with other name")
            return;
        }

        sessionStorage.setItem("user", JSON.stringify([...exitinguser, userdata]));
        setmsg("register succesfully")
        navigate("/login")
    }


    return (
        <>
            <div>
                <div>
                    <h1> register your name</h1>
                </div>
                <div>
                    <label htmlFor="name">Enter your name </label>
                    <input
                        id='name'
                        type="text"
                        value={username}
                        onChange={(e) => setusername(e.target.value)} />
                </div>
                <div>
                    <select value={role} onChange={(e) => setrole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div>
                    <button
                        onClick={handregister}>
                        click to register
                    </button>
                    <p>if you already registered click here to <Link to="/login"> log in </Link></p>
                </div>
                <div>
                    <h1>{msg}</h1>
                </div>
            </div>
        </>
    )
}

export default Register

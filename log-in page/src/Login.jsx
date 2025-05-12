import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {

    const [username, setusername] = useState("")
    const [role, setrole] = useState("user")
    const [msg, setmsg] = useState("")
    const navigate = useNavigate()

    const handlogin = () => {
        // const userdata = { username, role }

        const rawdata = sessionStorage.getItem("user")
        const exitinguser = rawdata ? JSON.parse(rawdata) : []

        const match = exitinguser.find(u => u.username === username && u.role === role)

        if (!match) {
            setmsg("this user or admin not exist pls register your name")
            navigate("/")
            return;
        }

        sessionStorage.setItem("currentuser", JSON.stringify(match));

        if (role === "admin") {
            navigate("/admin/dashboard")
        } else {
            navigate("/user/dashboard")
        }

    }

    return (
        <>
            <div>
                <div>
                    <h1> log in page</h1>
                </div>
                <div>
                    <label htmlFor="name"> Enter your Name </label>
                    <input
                        value={username}
                        type="text"
                        onChange={(e) => setusername(e.target.value)} />
                </div>
                <div>
                    <select value={role} onChange={(e) => setrole(e.target.value)}>
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                    </select>
                </div>
                <div>
                    <button
                        onClick={handlogin}>
                        login
                    </button>
                </div>
                <div>
                    <h1>{msg}</h1>
                </div>
            </div>

        </>
    )
}

export default Login

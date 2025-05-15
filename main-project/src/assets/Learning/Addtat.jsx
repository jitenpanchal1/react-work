import React, { useState } from 'react'
import { Link } from 'react-router'

function Addtat() {
    const [msg, setmsg] = useState(null)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const handsave = async (e) => {
        e.preventDefault()

        if (!name) {
            setmsg("pls fill the all above field")
            return;
        } else if (!email) {
            setmsg("pls fill the all above field")
            return;
        } else if (!password) {
            setmsg("pls fill the all above field")
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

            setmsg(() => {
                return (
                    <h3 >
                        ✅ Data saved successfully. Click <Link to="/learning/showdata">here</Link> to view it.
                    </h3>

                )
            })
            setname("")
            setemail("")
            setpassword("")

        } catch (err) {
            setmsg("failed to save")
        }
    }

    return (
        <div>
            <form onSubmit={handsave}>
                <div>
                    <label htmlFor="name">Enter name</label>
                    <input
                        id='name'
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Enter Email</label>
                    <input type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="pass">Enter Password</label>
                    <input
                        type="password"
                        id="pass"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div>
                    <input
                        type="submit"
                        value="submit" />
                </div>
                <div>
                    <h1>{msg}</h1>
                </div>
            </form>
        </div>
    )
}

export default Addtat

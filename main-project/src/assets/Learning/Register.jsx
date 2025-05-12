import axios from 'axios'
import React, { useState } from 'react'

function Register() {

    const [nam, setname] = useState("")
    const [pass, setpass] = useState("")
    const [msg, setmsg] = useState()
    const [pasmsg, setpasmsg] = useState()
    const [rejsmsg, setrejmsg] = useState()
    const [errsmsg, seterrmsg] = useState()


    const handsub = async (e) => {
        e.preventDefault()

        if (!nam) {
            setmsg("name is required")
            return;
        }
        if (!pass) {
            setpasmsg("pass is required")
            return;
        }

        try {
            const rawdata = await axios.get("http://localhost:2030/data")
            const user = rawdata ? rawdata.data : []

            if (user.find(u => u.nam === nam)) {
                setmsg("name is already exist try diffrent name")
                return;
            }

            await axios.post("http://localhost:2030/data", { nam, pass })
            setrejmsg("Registered successfully")
            setname("")
            setpass("")

        } catch (err) {
            seterrmsg("not registered")
        }

    }


    return (
        <>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-center'>
                    <div>
                        <p>Sign Up</p>
                    </div>
                    <form onSubmit={handsub}>
                        <div>
                            <label htmlFor="name">Enter your name</label>
                            <input
                                placeholder='Enter your name'
                                id='name'
                                type="text"
                                value={nam}
                                onChange={(e) => setname(e.target.value)} />
                            <div>{msg}</div>
                        </div>
                        <div>
                            <label htmlFor="password">Enter your password</label>
                            <input
                                placeholder='Enter your password'
                                type="password"
                                id="password"
                                value={pass}
                                onChange={(e) => setpass(e.target.value)} />
                            <div>{pasmsg}</div>
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Register" />
                        </div>
                        <div>
                            <h2>{rejsmsg}{errsmsg}</h2>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Register

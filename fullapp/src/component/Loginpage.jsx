import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'

function Login() {

    const [form, setform] = useState({
        email: "",
        Password: ""
    })

    const navigate = useNavigate()

    const [msg, setmsg] = useState("")

    const handchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submit = async (e) => {

        e.preventDefault();

        setmsg("")

        if (!form.email && !form.Password) {
            setmsg("Please fill all fields")
            console.log("check one")
            return
        }

        if (!form.email) {
            setmsg("Please enter your email")
            return;
        }
        if (!form.Password) {
            setmsg("Please enter your password")
            return;
        }

        try {
            const users = await axios.get("http://localhost:5000/users")
            const person = users.data.find((u) => u.email === form.email)
            if (!person) {
                setmsg("User not found with this email")
                return;
            }
            if (person.Password !== form.Password) {
                setmsg("Incorrect password")
                return;
            }

            localStorage.setItem("user", JSON.stringify(person))

            setmsg("Login Successfully")

            setform({
                email: "",
                Password: ""
            })

            navigate("/header")

        } catch (error) {
            setform("Login failed try after some time")
        }
    }

    return (
        <>
            <h1 className='mt-10 text-4xl text-center'>Login Page</h1>

            <form onSubmit={submit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md space-y-4">

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 font-medium text-gray-700">Enter Email:</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={handchange}
                        name="email"
                        id="email"
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="pass" className="mb-1 font-medium text-gray-700">Enter Password:</label>
                    <input
                        type="text"
                        value={form.Password}
                        onChange={handchange}
                        name="Password"
                        id="pass"
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        value="Log in"
                        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    />
                </div>

                <h1> {msg} </h1>

            </form>
            <h1 className='text-center  mt-5'>If you dont have a acoutn please <Link className='text-blue-800' to={"/"}> Go to Register </Link> page</h1>
        </>
    )
}

export default Login


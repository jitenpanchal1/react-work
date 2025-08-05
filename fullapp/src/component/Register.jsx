import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../reducfiles/reduxslice/userslice'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'

function Register() {

    const dispach = useDispatch()

    const [form, setform] = useState({
        Username: "",
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

        if (!form.Username && !form.email && !form.Password) {
            setmsg("Please fill all fields")
            console.log("check one")
            return
        }

        const users = await axios.get("http://localhost:5000/users")

        const userExists = users.data.some((user) => {
            if (user.Username === form.Username) {
                setmsg("User already exists with this username try to use some other name");
                return true;
            }
            if (user.email === form.email) {
                setmsg("User already exists with this email");
                return true;
            }
            return false;
        });

        if (userExists) {
            return;
        }

        if (!form.Username) {
            setmsg("Please enter your username")
            return;
        }
        if (!form.email) {
            setmsg("Please enter your email")
            return;
        }
        if (!form.Password) {
            setmsg("Please enter your password")
            return;
        }

        dispach(addUser({
            Username: form.Username,
            email: form.email,
            Password: form.Password
        }))

        setmsg("User added successfully")

        setform({
            Username: "",
            email: "",
            Password: ""
        })
        navigate("/login") // Redirect to login page after registration
    }

    return (
        <>
            <h1 className='mt-10 text-4xl text-center'>Register Page</h1>

            <form onSubmit={submit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 font-medium text-gray-700">Enter User Name:</label>
                    <input
                        type="text"
                        value={form.Username}
                        onChange={handchange}
                        name="Username"
                        id="name"
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

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
                        value="Register"
                        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    />
                </div>

                <h1> {msg} </h1>

            </form>
            <h1 className='text-center  mt-5'>If you have a already acoutn please <Link className='text-blue-800' to={"/login"}> Go to Login </Link> page</h1>


        </>
    )
}

export default Register

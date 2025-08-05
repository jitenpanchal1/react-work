import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { logout, updateUser } from '../reducfiles/reduxslice/userslice'
import "../Cssfiles/Userdetail.css"
import axios from 'axios'

function Userdetail() {

    const { id: userid } = useParams()

    const [form, setform] = useState({
        Userid: userid,
        Username: "",
        email: "",
        Password: ""
    })

    const navigate = useNavigate()

    const dispach = useDispatch()

    const [edit, setedit] = useState(true)

    const [msg, setmsg] = useState("")

    useEffect(() => {
        call()
    }, [])

    const call = async () => {
        try {
            const user = await axios.get(`http://localhost:5000/users/${userid}`)
            const read = await user.data
            setform({
                Userid: read.Userid || userid,
                Username: read.Username || "",
                email: read.email || "",
                Password: read.Password || ""
            });

        } catch (error) {
            setmsg("Something went wrong")
        }
    }

    const handchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const savechange = async () => {
        try {
            await dispach(updateUser({ id: userid, user: form }))
            localStorage.setItem("user", JSON.stringify(form))
            setedit(true)
            setmsg("User details updated successfully")

        } catch (error) {
            setmsg("Failed to update user details")
        }
    }

    const canseled = () => {
        setedit(true)
        call()
        setmsg("Changes canceled")
    }

    const delet = () => {
        dispach(logout(userid))
        localStorage.removeItem("user")
        setmsg("User Log out successfully")
        navigate("/login")
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">User Detail</h1>

                <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 fade-slide-in delay-200">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">User ID:</label>
                            <input
                                type="text"
                                value={form.Userid}
                                disabled
                                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-500 cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Username:</label>
                            <input
                                disabled={edit}
                                type="text"
                                id="name"
                                name="Username"
                                value={form.Username}
                                onChange={handchange}
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${edit ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "bg-white"}`}
                                placeholder="Enter your username"
                            />
                        </div>

                        <div>
                            <label htmlFor="mail" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                            <input
                                disabled={edit}
                                type="email"
                                id="mail"
                                name="email"
                                value={form.email}
                                onChange={handchange}
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${edit ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "bg-white"}`}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="pass" className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
                            <input
                                disabled={edit}
                                type={!edit ? "text" : "password"}
                                id="pass"
                                name="Password"
                                value={form.Password}
                                onChange={handchange}
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${edit ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "bg-white"}`}
                                placeholder="Enter your password"
                            />
                        </div>
                    </form>
                </div>

                <div className="max-w-xl mx-auto mt-6 flex flex-col md:flex-row justify-center items-center gap-4 fade-slide-in delay-500">
                    {edit ? (
                        <>
                            <button
                                onClick={() => setedit(false)}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 scale-on-hover"
                            >
                                Edit
                            </button>
                            <button onClick={() =>
                                delet()
                            }>
                                Log out
                            </button>
                        </>
                    ) : (
                        <>
                            <p className="text-green-600 font-semibold">Now you can edit the details</p>
                            <div className="flex gap-4 mt-2">
                                <button
                                    onClick={savechange}
                                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 scale-on-hover"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => canseled()}
                                    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 scale-on-hover"
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {msg && (
                    <div className="max-w-xl mx-auto mt-4 fade-slide-in delay-500">
                        <h2 className="text-center text-lg font-semibold text-purple-600">{msg}</h2>
                    </div>
                )}
            </div>
        </>

    )
}

export default Userdetail

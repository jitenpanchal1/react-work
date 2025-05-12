import React from 'react'
import { useNavigate } from 'react-router'

function User() {

    const navigate = useNavigate()
    const current = JSON.parse(sessionStorage.getItem("currentuser"))

    const handout = () => {
        sessionStorage.removeItem("currentuser")
        navigate("/")
    }
    return (
        <>
            <div>
                <h1>this is user data</h1>
            </div>
            <div>
                <h1>hi mr.{current?.username}</h1>
            </div>
            <div>
                <button
                    onClick={handout}>
                    log out
                </button>
            </div>
        </>
    )
}

export default User

import React, { use } from 'react'
import { useNavigate } from 'react-router'

function Admin() {

    const navigate = useNavigate()
    const user = JSON.parse(sessionStorage.getItem("user"))

    const handout = () => {
        sessionStorage.removeItem("currentuser")
        navigate("/")
    }
    return (
        <>
            <div>
                <div>
                    <h1>this is admin data</h1>
                </div>
                <div>
                    <ul>
                        {user.map((data, i) => {
                            return (
                                <li key={i}>{data.username} - {data.role}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <button
                        onClick={handout}>
                        log out
                    </button>
                </div>
            </div>
        </>
    )
}

export default Admin

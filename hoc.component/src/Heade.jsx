import React from 'react'
import { Link } from 'react-router'

function Heade() {
    return (
        <>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/userid">Userid</Link></li>
                    <li><Link to="/username">Username</Link></li>
                    <li><Link to="/usertitle">Usertitle</Link></li>
                    <li><Link to="/userlist">Userlist</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Heade

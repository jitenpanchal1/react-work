import React from 'react'
import { Link, Outlet } from 'react-router'

export default function Functioncompolist() {
    return (
        <>
            <div className='container'>
                <h1><Link to="usestate">First HOOk - Usestate</Link></h1>
                <h1><Link to="userid">user detail using useeffect</Link></h1>
                <h1><Link to="usememo">Usememo</Link></h1>
                <h1><Link to="usecallback">usecallback</Link></h1>
                <h1><Link to="usecontext">Usecontext</Link></h1>
                <Outlet />
            </div >

        </>
    )
}

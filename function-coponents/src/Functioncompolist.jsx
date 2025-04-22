import React from 'react'
import { Link, Outlet } from 'react-router'

export default function Functioncompolist() {
    return (
        <>
            <div className='container'>
                <h1><Link to="usestate">First HOOk - Usestate</Link></h1>
                <Outlet />
            </div >

        </>
    )
}

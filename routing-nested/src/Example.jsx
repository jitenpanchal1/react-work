import React from 'react'
import { Link, Outlet } from 'react-router'

function Example() {
    return (
        <div className='container text-center'>
            <h1 className='my-4'>you are at example</h1>
            <li><Link className='fs-3 text' to="exampless">Exampless</Link></li>
            <Outlet />
        </div>

    )
}

export default Example

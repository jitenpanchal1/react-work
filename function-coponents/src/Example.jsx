import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router'
import Functionscompo from './Functionscompo'

export default function Example() {
    return (
        <>
            <div className='container'>
                <h1>example</h1>
                <h1><Link to="function">Other example</Link></h1>
                <Outlet />
            </div>
        </>
    )
}

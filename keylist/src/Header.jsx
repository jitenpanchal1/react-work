import React from 'react'
import { Link } from 'react-router'


function Header() {
    return (
        <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </>
    )
}

export default Header

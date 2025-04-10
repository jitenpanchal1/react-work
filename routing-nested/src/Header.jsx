import React from 'react'
import { Link } from 'react-router'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
    return (
        <div className='bg-secondary shadow-1-strong'>
            <div className='container'>
                    <ul className='d-flex justify-content-between list-unstyled'>
                        <li><Link className='fs-3 text' to="/">Home</Link></li>
                        <li><Link className='fs-3 text' to="/about">About</Link></li>
                        <li><Link className='fs-3 text' to="/example">Example</Link></li>
                        <li><Link className='fs-3 text' to="/contact">Contact</Link></li>
                        <li><Link className='fs-3 text' to="/help">Help</Link></li>
                    </ul>
            </div>
        </div>
    )
}

export default Header

import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function Header() {
    let [isOpen, SetisOpen] = useState(false);

    function Show() {
        SetisOpen(!isOpen)
    }


    return (
        <>
            <div className="bg-secondary">
                <div className='container'>
                    <nav className="navbar shadow-0 navbar-expand-lg">
                        <div className="container-fluid">
                            {/* <a className="navbar-brand" href="#">Navbar</a> */}
                            <button
                                data-mdb-collapse-init
                                className="navbar-toggler text-center"
                                type="button"
                                onClick={Show}
                                data-mdb-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className={`collapse navbar-collapse ${isOpen ? "show" : ''}`} id="navbarNav">
                                <ul className="navbar-nav w-100 d-flex justify-content-between">
                                    <li className="nav-item">
                                        <Link to="/" className='fs-3'>Home</Link>
                                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    </li> <li className="nav-item ">
                                        <Link to="/product" className='fs-3'>Product</Link>
                                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    </li> <li className="nav-item">
                                        <Link to="/contact" className='fs-3'>Contact</Link>
                                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    </li> <li className="nav-item">
                                        <Link to="/about" className='fs-3' >About</Link>
                                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/help" className='fs-3' >Help</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav >
                </div>
            </div>


        </>
    )

}

export default Header

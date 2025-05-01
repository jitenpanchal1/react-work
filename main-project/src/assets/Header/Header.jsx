import React from 'react'
import { Link } from 'react-router';
import '../Css/App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Header() {
    return (
        <>
            <header>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg  shadow-0">
                        <div className="container-fluid">
                            <a className="navbar-brand" >Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa-solid fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="">
                                        <Link className='link' to="/home"> Home </Link>
                                    </li>
                                    <li className="">
                                        <Link className='link' to="/contact">Contact </Link>
                                    </li>
                                    <li className="">
                                        <Link className='link' to="/learning">Learning </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header

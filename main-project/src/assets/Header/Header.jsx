import React, { useContext } from 'react'
import { Link } from 'react-router';
import '../Css/App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Basicbutton from '../Learning/Basicbutton';






function Header() {
    return (
        <>
            <header className='bg-primary'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg  shadow-0">
                        <div className="container-fluid ">
                            <a className="navbar-brand" >Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa-solid fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNav">
                                <ul className="navbar-nav align-items-center">
                                    <li className="">
                                        <Link className='link ms-lg-3 ' to="/home"> Home </Link>
                                    </li>
                                    <li className="">
                                        <Link className='link ms-lg-3  ' to="/contact">Contact </Link>
                                    </li>
                                    <li className="">
                                        <Link className='link ms-lg-3  ' to="/learning">Learning </Link>
                                    </li>
                                    <li className='ms-lg-3'>
                                        <Basicbutton />
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

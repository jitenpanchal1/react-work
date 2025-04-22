import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react';

import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';


import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
    const [openNavRight, setOpenNavRight] = useState(false);
    return (
        <>
            <div className='container'>
                <MDBNavbar expand='lg' className='shadow-0'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='#'>MyBrand</MDBNavbarBrand>
                        <MDBNavbarToggler
                            type='button'
                            data-target='#navbarRightAlignExample'
                            aria-controls='navbarRightAlignExample'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setOpenNavRight(!openNavRight)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>

                        <MDBCollapse navbar open={openNavRight} className='navbar-nav justify-content-end'>
                            {/* <div className='navbar-nav justify-content-end'> */}
                            <MDBNavbarNav className='mb-2 mb-lg-0'>
                                <ul className='d-flex list-unstyled'>
                                    <li ><Link to="/home">Home</Link></li>
                                    <li className='ms-5'><Link to="/about">About</Link></li>
                                    <li className='ms-5'><Link to="/contact">Contact</Link></li>
                                    <li className='ms-5 sm-me-5'><Link to="/example">Example</Link></li>
                                </ul>

                            </MDBNavbarNav>
                            {/* </div> */}
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </div>
        </>
    )
}


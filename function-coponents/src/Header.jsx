import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react';
import $ from 'jquery';



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

    const change = (link) => {
        $(".nav-link").removeClass("ttt")
        $(link).addClass("ttt")
    }


    return (
        <>
            <div className='container'>
                <MDBNavbar expand='lg' className='shadow-0'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand className='mx-5'>MyBrand</MDBNavbarBrand>
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
                            <MDBNavbarNav className='mb-2  mb-lg-0 text-center'>
                                <MDBNavbarItem  >
                                    <Link id='home' className='mx-5  nav-link ' onClick={() => change("#home")} to="/">Home</Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <Link id='about' className='mx-5   nav-link' onClick={() => change("#about")} to="/about">About</Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <Link id='contact' className='mx-5  nav-link' onClick={() => change("#contact")} to="/contact">Contact</Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <Link id='example' className='mx-5   nav-link' onClick={() => change("#example")} to="/example">Example</Link>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </div>
        </>
    )
}


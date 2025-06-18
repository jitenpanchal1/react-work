import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../css/Header.css';
import Logo from "../assets/Logo.png";
import "../css/Cmn.css"


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="custom-header shadow-2">
            <div className="container-fluid container py-2 px-4 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <Link to="home" smooth={true} duration={500} className="logo-text" onClick={closeMenu}>
                        <img src={Logo} alt="logo" className="logo-img w-100 h-100" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="d-none d-md-flex gap-4 align-items-center">
                    <Link to="home" smooth={true} duration={500} offset={-100} className="nav-link-custom">Home</Link>
                    <Link to="ourfamous" smooth={true} duration={500}  offset={-80} className="nav-link-custom">Our famour</Link>
                    <Link to="event" smooth={true} duration={500} className="nav-link-custom">Our Event</Link>
                    <Link to="menu" smooth={true} duration={500} className="nav-link-custom">Menu</Link>
                    {/* <Link to="about" smooth={true} duration={500} className="nav-link-custom">About</Link> */}
                    <Link to="contact" smooth={true} duration={500} className="nav-link-custom">Contact Us</Link>
                </nav>

                {/* Desktop CTA + icons */}
                <div className="d-none d-md-flex align-items-center gap-3">
                    <Link to="reservation" smooth={true} duration={500} className="btn hbtn btn-success rounded-pill">Reservation</Link>
                    <i className="bi bi-search fs-5 cursor-pointer"></i>
                    <i className="bi bi-cart fs-5 cursor-pointer"></i>
                </div>

                {/* Hamburger Icon */}
                <div className="d-md-none" onClick={toggleMenu}>
                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu d-md-none text-center px-4 pb-4">
                    <Link to="home" smooth={true} duration={500} offset={-500} onClick={closeMenu} className="nav-link-custom d-block py-2">Home</Link>
                    <Link to="ourfamous" smooth={true} duration={500} offset={-360} onClick={closeMenu} className="nav-link-custom d-block py-2">Our famour</Link>
                    <Link to="event" smooth={true} duration={500} onClick={closeMenu} className="nav-link-custom d-block py-2">Our Event</Link>
                    {/* <Link to="about" smooth={true} duration={500} onClick={closeMenu} className="nav-link-custom d-block py-2">About</Link> */}
                    {/* <Link to="shop" smooth={true} duration={500} onClick={closeMenu} className="nav-link-custom d-block py-2">Shop</Link> */}
                    <Link to="contact" smooth={true} duration={500} onClick={closeMenu} className="nav-link-custom d-block py-2">Contact Us</Link>
                    <Link to="reservation" smooth={true} duration={500} offset={-400} onClick={closeMenu} className="btn btn-success w-100 mt-3">Reservation</Link>
                </div>
            )}
        </header>
    );
}

export default Header;

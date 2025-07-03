import React from 'react';
import '../css/Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-main position-relative bg-teal text-light text-lg-start pt-5 pb-4">
      <div className="container">
        <div className="row text-start">
          <div className="col-md-4 col-sm-6 mb-4">
            <h5 className="fw-bold">OUR SERVICES</h5>
            <p>What's New</p>
            <p>How to Order</p>
            <p>Payment Method</p>
            <p>Order Status</p>
            <p>Subscription</p>
          </div>

          <div className="col-md-4 col-sm-6 mb-4">
            <h5 className="fw-bold">OUR TEAM</h5>
            <p>Our Local Farms</p>
            <p>Craftsmanship</p>
            <p>Our Sources</p>
            <p>Sustainability</p>
          </div>

          <div className="col-md-4 col-sm-12 mb-4">
            <h5 className="fw-bold">LEGAL</h5>
            <p>Privacy Policy</p>
            <p>Our Promise</p>
            <p>More Information</p>
          </div>
        </div>

        {/* Social Icons Centered */}
        <div className="footer-social-icons text-center">
          <span><FaFacebookF /></span>
          <span><FaInstagram /></span>
          <span><FaTwitter /></span>
        </div>

        <p className="small text-center mt-4 mb-0">
          © 2025 WorryFree Dining. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

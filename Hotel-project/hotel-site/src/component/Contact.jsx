import React from 'react';
import { Element } from 'react-scroll';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBadge
} from 'mdb-react-ui-kit';
import '../css/Contact.css';

function Contact() {
    return (
        <Element name='contact' className='contact-section contact py-5' >
            <MDBContainer>
                <MDBRow className='gy-4'>
                    {/* Left Info Column */}
                    <MDBCol md='6'>
                        <div className='p-4 shadow-3 rounded-4 bg-white'>
                            <h2 className='mb-4 fw-bold text-warning-emphasis'>Get in Touch</h2>

                            <div className='d-flex mb-4'>
                                <MDBIcon icon='map-marker-alt' className='me-3 text-warning' size='lg' />
                                <div>
                                    <h5 className='fw-bold text-dark'>Our Location</h5>
                                    <p className='mb-0 text-muted'>123 Gourmet Avenue, Foodie District<br />Metro City, MC 12345</p>
                                </div>
                            </div>

                            <div className='d-flex mb-4'>
                                <MDBIcon icon='phone-alt' className='me-3 text-success' size='lg' />
                                <div>
                                    <h5 className='fw-bold text-dark'>Call Us</h5>
                                    <p className='mb-0 text-muted'>Reservations: (123) 456-7890<br />General: (123) 456-7891</p>
                                </div>
                            </div>

                            <div className='d-flex mb-4'>
                                <MDBIcon icon='envelope' className='me-3 text-danger' size='lg' />
                                <div>
                                    <h5 className='fw-bold text-dark'>Email Us</h5>
                                    <p className='mb-0 text-muted'>reservations@wfd.com<br />info@wfd.com</p>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <h5 className='fw-bold mb-3 text-warning-emphasis'>Business Hours</h5>
                                <table className='table table-sm text-muted'>
                                    <tbody>
                                        <tr>
                                            <td>Mon - Thu</td>
                                            <td>11:00 AM - 10:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Fri - Sat</td>
                                            <td>11:00 AM - 11:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday</td>
                                            <td>10:00 AM - 9:00 PM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </MDBCol>

                    {/* Right Map Column */}
                    <MDBCol md='6' className='my-auto'>
                        <div className='  shadow-3 rounded-4 bg-white'>
                            <div className='ratio ratio-16x9 rounded-3 overflow-hidden mb-4'>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.3182646635405!2d72.54854027454196!3d23.085442413980584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8385d3838af5%3A0x4037e43c579f2a0f!2sKumkum%20party%20plot!5e0!3m2!1sen!2sin!4v1750244135367!5m2!1sen!2sin" width="600" height="450" allowFullScreen
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                    title='Restaurant Location'></iframe>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Element>
    );
}

export default Contact;

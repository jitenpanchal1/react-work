import React from 'react';
import { Element } from 'react-scroll';
import "../css/Cmn.css";
import "../css/Event.css";
import Slider from "react-slick";

import pone from "../assets/birthdayparty.jpg";
import ptwo from "../assets/business-meeting.jpg";
import pthree from "../assets/corporate-party.jpeg";
import pfour from "../assets/marriage.jpg";

function Event() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };

    const events = [
        { img: pone, title: "Birthday Celebration" },
        { img: ptwo, title: "Business Meeting" },
        { img: pthree, title: "Corporate Party" },
        { img: pfour, title: "Engagement Ceremony" }
    ];

    return (
        <Element name='event' className='event-section py-5'>
            <div className='container'>
                <h3 className="text-center text-success fw-bold mb-4">Celebrate Every Occasion with Us</h3>
                <Slider {...settings}>
                    {events.map((item, index) => (
                        <div className="" key={index}>
                            <div className="img-wrapper mb-3">
                                <img src={item.img} alt={item.title} className="img-fluid rounded shadow" />
                            </div>
                            <p className="text-center fs-5 fw-semibold text-dark">{item.title}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </Element>
    );
}

export default Event;

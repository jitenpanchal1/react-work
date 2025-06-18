import React from 'react'
import { Element } from 'react-scroll'
import "../css/Menu.css"

import hb from "../assets/hb.jpeg"
import pbm from "../assets/pbm.jpeg"
import md from "../assets/md.jpeg"
import rc from "../assets/rc.jpeg"
import cb from "../assets/cb.jpeg"
import nro from "../assets/nro.jpeg"
import ap from "../assets/ap.jpeg"
import gj from "../assets/gj.jpeg"

function Menu() {

    const menuItems = [
        {
            name: "Hyderabadi Biryani",
            description: "Fragrant rice & chicken",
            image: hb
        },
        {
            name: "Paneer Butter Masala",
            description: "Creamy tomato curry",
            image: pbm
        },
        {
            name: "Masala Dosa",
            description: "Crispy dosa with potato filling",
            image: md
        },
        {
            name: "Rajma Chawal",
            description: "Kidney beans curry & rice",
            image: rc
        },
        {
            name: "Chole Bhature",
            description: "Spicy chickpeas & fried bread",
            image: cb
        },
        {
            name: "Tandoori Roti",
            description: "Clay oven baked flatbread",
            image: nro
        },
        {
            name: "Aloo Paratha",
            description: "Stuffed bread with spiced potato",
            image: ap
        },
        {
            name: "Gulab Jamun",
            description: "Soft milk balls soaked in syrup",
            image: gj
        }
    ];


    return (
        <Element name='menu' className='menu-bg'>
            <section className="menu-section pb-5">
                <div className='container'>
                    <div className="text-center mb-2">
                        <h1 className="menu-heading fw-bold">Other dishesh</h1>
                        <p className="text-muted">Delicious, authentic flavors</p>
                    </div>

                    <div className="row g-4">
                        {menuItems.map((item, index) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                                <div className="menu-card shadow-sm">
                                    <img src={item.image} alt={item.name} className="menu-img" />
                                    <div className="p-3 text-center">
                                        <h6 className="fw-bold mb-1">{item.name}</h6>
                                        <p className="text-muted small mb-0">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Menu

import React from 'react';
import { Element } from 'react-scroll';
import "../css/Cmn.css";
import "../css/Ourfamous.css"

import Slider from "react-slick";

import sweetOne from "../assets/sweet-one.jpeg";
import sweetTwo from "../assets/sweet-two.jpeg";
import sweetThree from "../assets/sweet-three.jpeg";

import bfOne from "../assets/bf-one.jpeg"
import bfTwo from "../assets/bf-two.jpeg"
import bfThree from "../assets/bf-three.jpeg"

import dOne from "../assets/gujju-dish.jpeg"
import dtwo from "../assets/punjabi-dish.jpeg"
import dthree from "../assets/south-dish.jpeg"

function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

function Ourfamous() {
    const settings = {
        fade: true,
        infinite: true,
        speed: 350,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
    };

    const meals = [
        { img: sweetOne, title: "TEDHI MEDHI JALEBI", ingre: "plain flour, cornflour, lemon juice, natural yogurt, ghee, baking powder, bicarbonate of soda.", },
        { img: sweetTwo, title: "KAJU-KATARI", ingre: "cashew nuts, sugar, cardamom powder, and thick milk." },
        { img: sweetThree, title: "sweet-rabadi", ingre: "milk, sugar, and aromatic flavorings like cardamom and saffron." },
        { img: bfOne, title: "Uttapam", ingre: "rice, urad dal, and various toppings like onions, tomatoes, and chilies." },
        { img: bfTwo, title: "gujrati special Dhokada", ingre: "besan, turmeric powder, lemon juice, green chilli paste, ginger paste, pinch of asafoetida." },
        { img: bfThree, title: "Dhepala", ingre: "wheat flour/atta, chili powder,  turmeric powder,  sesame seeds, yogurt, methia masala/gujarati pickle masala, sugar." },
        { img: dOne, title: "Gujju dish", ingre: "shaak, daal, bhal, mango rush, khaman, patra, roti, sabji, sweet, gulab jamun." },
        { img: dtwo, title: "Punjabi dish", ingre: "paneer sabji, lassi, chhole, paratha, vegitables, rise." },
        { img: dthree, title: "south dish", ingre: "dosa, idli, shambhar, chutney, mendu vada, rise, uttapam. " }
    ];

    const groupedMeals = chunkArray(meals, 3);

    return (
        <Element name='ourfamous'>
            <section className="py-sm-2 py-md-5 " style={{ backgroundColor: "#43896d" }}>
                <div className="container pt-5 pt-md-2 pb-5 ">
                    <div className='display-1 text-white'>
                        <p className='header'>Our Favorites</p>
                    </div>
                    <div>
                        <h5 className="text-white text-uppercase fw-semibold">
                            Meals That Our Customers Enjoy
                        </h5>
                    </div>
                    <Slider {...settings}>
                        {groupedMeals.map((group, index) => (
                            <div key={index}>
                                <div className="row justify-content-center">
                                    {group.map((meal, i) => (
                                        <div className="col-md-4 col-sm-6" key={i}>
                                            <div className="card-fancy mt-2 mb-2 text-center pt-5">
                                                <div className="d-flex justify-content-center">
                                                    <img
                                                        src={meal.img}
                                                        alt={meal.title}
                                                        className="shadow"
                                                    />
                                                </div>
                                                <div>
                                                    <h6 className="card-title-custom mt-3">{meal.title}</h6>
                                                </div>
                                                <div className='w-75 mx-auto'>
                                                    <p className="card-ingre">
                                                        {meal.ingre}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </section>
        </Element>
    );
}

export default Ourfamous;

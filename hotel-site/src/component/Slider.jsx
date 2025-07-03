import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slide.css"

import salmon from "../assets/slide-one.jpeg";
import greenSalad from "../assets/slide-two.jpeg";
import chefMeal from "../assets/slider-three.jpeg";
import pearDressing from "../assets/slide-four.jpeg";

function Photos() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const meals = [
        { img: salmon, title: "puri sabji rise sweets" },
        { img: greenSalad, title: "roti paratha sabji rise sweets " },
        { img: chefMeal, title: "rise kadhi dahi sweets" },
        { img: pearDressing, title: "special gujarati thali" },
    ];

    return (
        <div className="meal-slider">
            <Slider {...settings}>
                {meals.map((meal, index) => (
                    <div className="meal-card" key={index}>
                        <div className="img-box">
                            <img src={meal.img} alt={meal.title} className="meal-image" />
                        </div>
                        <div className="text-center">
                            <p className="meal-title">{meal.title}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Photos;

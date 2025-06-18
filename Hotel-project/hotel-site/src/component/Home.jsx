import React from 'react';
import { Element, Link } from 'react-scroll';
import "../css/Home.css";
import "../css/Cmn.css";
import Dish from "../assets/Home-dish.jpeg"
import Shape from "../assets/Shape .png";
import ShapeTwo from "../assets/Shape-two.png"
import Photos from './Slider';

function Home() {
    return (
        <Element name='home' className='home-bg pb-5 pt-3 py-md-1'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-6 text-center text-md-start mb-4 mb-md-0'>
                        <div className='shapediv'>
                            <img src={Shape} className='shape img-fluid' alt="" />
                        </div>
                        <div className=''>
                            <img src={Dish} className='dish img-fluid my-3' alt="dish" />
                        </div>
                        <div>
                            <img src={ShapeTwo} className='shape-two img-fluid' alt="" />
                        </div>
                        <div className='mt-4 w-100 w-md-75 mx-auto'>
                            <div>
                                <p className='fw-bold fs-4 text-success text-center mb-1'>SMOKED MILKFISH GARDEN SALAD</p>
                            </div>
                            <div>
                                <p className='left-text mx-auto text-center w-75 small'>
                                    Includes: Vegetable Lasagna, Fresh Fruit Platter, Fresh Lemon Juice, and Creme Brulee
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className='col-12  col-md-6 text-center'>
                        <div>
                            <h1 className='rigth-name text-center'>Worry-Free Meal Plans.</h1>
                        </div>
                        <div className='jouney mx-auto mt-3 w-75'>
                            <Link
                                to="reservation"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="btn btn-success rounded-pill px-4 py-2 fw-medium"
                            >
                                START YOUR JOURNEY
                            </Link>
                        </div>
                        <div className=' slider'>
                            <Photos />
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Home;

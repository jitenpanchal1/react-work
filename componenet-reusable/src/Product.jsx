import React from 'react'
import Productsproto from './Productsproto'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import img from "./Productsproto";

import Pickone from "./assets/Pick-one.jpg"
import Picktwo from "./assets/pick-two.webp"
import Pickthree from "./assets/Pick-three.webp"

function Product() {
    return (
        <>
            <div className='bg-secondary'>
                <div className="container">
                    <div>
                        <h1 className='text-center py-5'>My ptoducts</h1>
                    </div>
                    <div className='row d-flex justify-content-between pb-5'>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-4 mb-5'>
                            <Productsproto img={Pickone} />
                        </div>
                        <div className='col-12 
                         col-sm-6 col-md-4 col-lg-4 mb-5'>
                            <Productsproto img={Picktwo} />
                        </div>
                        <div className='col-12  col-sm-8  col-md-4 col-lg-4 mx-auto mb-5' >
                            <Productsproto img={Pickthree} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product

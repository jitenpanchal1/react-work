import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { plus } from '../reducfiles/reduxslice/addproduct';

function Productdetail() {

    const { id: proid } = useParams();
    const [pro, setPro] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const prodetails = async () => {
            try {
                const sproduct = await axios.get(`http://localhost:3000/products/${proid}`);
                setPro(sproduct.data);
            } catch (err) {
                console.error("Failed to fetch product:", err);
            } finally {
                setLoading(false);
            }
        };

        prodetails();

    }, [proid]);

    if (loading) {
        return <div className="text-center mt-10 text-gray-500">Loading...</div>;
    }

    if (!pro) {
        return <div className="text-center mt-10 text-red-500">Product not found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto mt-50 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden lg:flex">

                {pro.imgpreview && (
                    <div className="lg:w-1/2">
                        <img
                            src={pro.imgpreview}
                            alt={pro.productname}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}

                <div className="p-6 lg:w-1/2 flex flex-col justify-between">

                    <div>
                        <span className="inline-block mb-4 text-sm font-medium bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                            Shared by: {pro.userid}
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">{pro.productname}</h2>
                        <p className="text-lg text-gray-600 mb-4">
                            Price: <span className="text-green-600 font-semibold">${pro.price}</span>
                        </p>
                        <p className="text-lg text-gray-600">
                            Quantity: <span className="font-medium">{pro.qty}</span>
                        </p>
                    </div>

                    <div className="mt-6">
                        <button className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                            Add to Cart
                        </button>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Productdetail;
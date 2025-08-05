import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'


function Home() {

    const [allproduct, setallproduct] = useState([])

    const proid = allproduct.map((item) => item.id)

    const navigate = useNavigate("")

    useEffect(() => {
        const getProducts = async () => {
            const products = await axios.get("http://localhost:3000/products")
            setallproduct(products.data)
        }

        getProducts()
    }, [allproduct])

    const detail = async (id) => {
        navigate(`/productdetail/${id}`)
    }

    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">All Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allproduct.map((item) => (
                    <div
                        key={item.id}
                        className="bg-blue-100 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 p-4 flex flex-col items-center text-center"
                    >

                        {item.imgpreview && (
                            <img
                                src={item.imgpreview}
                                alt={item.productname}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                        )}
                        <h2 className="text-lg font-semibold text-gray-900">{item.productname}</h2>
                        <p className="text-sm text-gray-600">Price: <span className="font-medium text-green-600">${item.price}</span></p>
                        <p className="text-sm text-gray-600">Quantity: <span className="font-medium">{item.qty}</span></p>
                        <div>
                            <button
                                onClick={() => detail(item.id)}
                                className="bg-indigo-600 text-white  mt-5 font-medium px-5 py-2 rounded-md shadow-sm hover:bg-indigo-700 hover:shadow-md transition duration-300 ease-in-out"
                            >
                                More Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Home

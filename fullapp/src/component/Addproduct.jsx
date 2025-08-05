import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addproduct } from '../reducfiles/reduxslice/addproduct'


function Addproduct() {

    const currentuser = JSON.parse(localStorage.getItem("user"))

    const [form, setform] = useState({
        productname: "",
        qty: "",
        price: "",
        image: "",
        imgpreview: "",
        userid: currentuser ? currentuser.Username : ""
    })

    const dispatch = useDispatch()

    const [msg, setmsg] = useState("")

    const Changes = (e) => {

        const { name, value, files } = e.target

        if (name === "image" && files && files[0]) {
            const file = files[0]
            setform({
                ...form,
                image: file,
                imgpreview: URL.createObjectURL(file)
            })
        }
        
        else {
            setform({
                ...form,
                [name]: value
            })
        }
    }

    const Addpro = (e) => {

        e.preventDefault();

        if (!form.productname && !form.qty && !form.price && !form.image) {
            setmsg("Please fill all fields")
            return;
        }

        if (!form.productname) {
            setmsg("Please enter product name")
            return;
        }

        if (!form.qty) {
            setmsg("Please enter product quantity")
            return;
        }

        if (!form.price) {
            setmsg("Please enter product price")
            return;
        }

        if (!form.image) {
            setmsg("Please enter product image URL")
            return;
        }

        dispatch(addproduct({
            productname: form.productname || "",
            qty: form.qty || "",
            price: form.price || "",
            image: form.image || "",
            imgpreview: form.imgpreview || "",
            userid: form.userid || ""
        }))

        setform({
            productname: "",
            qty: "",
            price: "",
            image: "",
            imgpreview: "",
            userid: currentuser ? currentuser.Username : ""
        })

        setmsg("Product Listed Successfully")
        return;
    }

    return (
        <div>
            <h1> this si product</h1>
            <div>
                <form onSubmit={Addpro} className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md space-y-4">
                    <div>
                        <input
                            type="text"
                            value={form.userid}
                            disabled
                            className='border border-gray-300 rounded-lg px-4 py-2 w-full'
                        />
                    </div>
                    <div>
                        <label htmlFor="pname">Enter product Name : </label>
                        <input
                            type="text"
                            id='pname'
                            name='productname'
                            value={form.productname}
                            onChange={Changes}
                            placeholder='Enter product name'
                            className='border border-gray-300 rounded-lg px-4 py-2 w-full'
                        />
                    </div>
                    <div>
                        <label htmlFor="qty">Enter product Quantity : </label>
                        <input
                            type="text"
                            id='qty'
                            name='qty'
                            value={form.qty}
                            onChange={Changes}
                            placeholder='Enter product quantity'
                            className='border border-gray-300 rounded-lg px-4 py-2 w-full'
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Enter product Price : </label>
                        <input
                            type="text"
                            id='price'
                            name='price'
                            value={form.price}
                            onChange={Changes}
                            placeholder='Enter product price'
                            className='border border-gray-300 rounded-lg px-4 py-2 w-full'
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Enter product Image URL : </label>
                        <input
                            type="file"
                            id='image'
                            name='image'
                            onChange={Changes}
                            placeholder='Enter product image URL'
                            className='border border-gray-300 rounded-lg px-4 py-2 w-full'
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="list productt"
                            className='bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition w-full'
                        />
                    </div>
                </form>
            </div>
            {msg && <h1 className='text-center text-green-500 mt-4'>{msg}</h1>}
        </div>
    )
}

export default Addproduct
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetproduct } from '../reducfiles/reduxslice/addproduct'

function Myproduct() {

    const dispatch = useDispatch()
    const currentuser = JSON.parse(localStorage.getItem("user"))
    const { items: userpro } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(fetproduct())
    }, [dispatch])

    const allpro = userpro.filter((item) => item.userid === currentuser?.Username)

    return (
        <div>

            <h1 className='text-center'> My Product</h1>
            {allpro.length === 0 ? (
                <>
                    <h1>{currentuser.Username} You havent add any product</h1>
                </>
            ) : (
                <>
                    {allpro.map((item) => (
                        <div key={item.id}>
                            <h2 className="text-xl font-semibold">{item.productname}</h2>
                            <p>Quantity: {item.qty}</p>
                            <p>Price: ₹{item.price}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default Myproduct

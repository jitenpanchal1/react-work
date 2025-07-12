import React from 'react'
import { useSelector } from 'react-redux'

export default function Addedproduct() {

    const items = useSelector(state => state.Add.product)

    return (
        <div>
            {items.length == 0 && <p>NO Item Added yet</p>}

            <div>
                {items.map((item) => (
                    <>
                        <h1>Product_name : {item.name}</h1>
                        <h1>Product_name : {item.price}</h1>
                        <h1>Product_name : {item.catogery}</h1>
                    </>
                ))}
            </div>
        </div>
    )
}

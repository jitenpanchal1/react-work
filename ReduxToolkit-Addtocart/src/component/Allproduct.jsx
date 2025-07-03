import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../Readuxfeature/Cartslice'
import "./product.css"
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBSpinner,
    MDBCardImage
} from 'mdb-react-ui-kit'

function Allproduct() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)

    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false)
            })
    }, [])

    const isAdded = id => cart.some(p => p.id === id)

    return (
        <MDBContainer className="py-5">
            <h2 className="text-center mb-4">All Products</h2>
            {loading ? (
                <div className="text-center">
                    <MDBSpinner grow />
                </div>
            ) : (
                <MDBRow className="gy-4">
                    {product.map(item => (
                        <MDBCol md="6" lg="4" key={item.id}>
                            <MDBCard className="shadow-sm h-100">
                                <div className="image-hover-wrapper">
                                    <MDBCardImage
                                        src={item.img || 'https://via.placeholder.com/300x200?text=Product+Image'}
                                        position="top"
                                        alt={item.name}
                                        style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                                    />
                                </div>
                                <MDBCardBody>
                                    <MDBCardTitle>{item.name}</MDBCardTitle>
                                    <MDBCardText>
                                        <strong className="d-block">Price:</strong> ₹{item.price}
                                        <span className="fw-bold d-block">Stock: {item.qty}</span>
                                        <span className="fw-bold d-block">{item.des}</span>
                                    </MDBCardText>
                                    <MDBBtn
                                        color={isAdded(item.id) ? 'success' : 'primary'}
                                        onClick={() => dispatch(addtocart(item))}
                                        disabled={isAdded(item.id)}
                                    >
                                        {isAdded(item.id) ? 'Item Added' : 'Add Item'}
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    ))}
                </MDBRow>
            )}
        </MDBContainer>
    )
}

export default Allproduct

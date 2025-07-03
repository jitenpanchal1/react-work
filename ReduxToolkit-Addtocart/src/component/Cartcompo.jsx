import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, minus, remove } from '../Readuxfeature/Cartslice'
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
    MDBIcon,
    MDBCardImage
} from 'mdb-react-ui-kit'

function Cartcompo() {
    const product = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()

    return (
        <MDBContainer className="py-5">
            <h2 className="text-center mb-4">Your Cart</h2>

            {product.length === 0 ? (
                <h4 className="text-center text-danger">No Items in Cart</h4>
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
                                        <strong>Price:</strong> ₹{item.price}
                                        <span className="fw-bold d-block">{item.des}</span>
                                    </MDBCardText>

                                    {/* Quantity Control */}
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <MDBBtn
                                            size="sm"
                                            color="light"
                                            onClick={() => dispatch(minus(item.id))}
                                        >
                                            <MDBIcon fas icon="minus" />
                                        </MDBBtn>
                                        <span className="fw-bold">{item.qty}</span>
                                        <MDBBtn
                                            size="sm"
                                            color="light"
                                            onClick={() => dispatch(add(item.id))}
                                        >
                                            <MDBIcon fas icon="plus" />
                                        </MDBBtn>
                                    </div>

                                    <MDBBtn
                                        color="danger"
                                        size="sm"
                                        onClick={() => dispatch(remove(item.id))}
                                    >
                                        <MDBIcon fas icon="trash" className="me-2" />
                                        Remove
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

export default Cartcompo

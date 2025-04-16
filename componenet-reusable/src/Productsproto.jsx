import React from 'react'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

function Productsproto(props) {
    return (
        <>
            <MDBCard >
                <MDBCardImage src={props.img} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </>
    )
}

export default Productsproto

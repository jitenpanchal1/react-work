import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';

function Firstprop({ para, paraTwo, paraThree }) {
    return (
        <>
            <div className='container-xxl'>
                <div className='row justify-content-between'>
                    <MDBCard className='col-3'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
                        <MDBCardBody>
                            <MDBCardText>
                                {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
                                {para}
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className='col-3'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
                        <MDBCardBody>
                            <MDBCardText>
                                {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
                                {paraTwo}
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard><MDBCard className='col-3'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
                        <MDBCardBody>
                            <MDBCardText>
                                {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
                                {paraThree}
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </>
    )
}

export default Firstprop;
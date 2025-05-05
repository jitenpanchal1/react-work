import React from 'react'
import Navigatecustome from './Navigatecustome'
import { MDBBtn } from 'mdb-react-ui-kit';

function Navigation() {



    const { gotousestate,
        gotouseffect,
        gotousecontext,
        gotoinputcnt,
        gotohoc,
        gotousereduce,
        gotouseref,
        gotocustom,
        gotothemechanger,
        gotoToDolist,
        gotoApifetch } = Navigatecustome()
    return (
        <>
            <div className='d-flex flex-column align-items-center h-100 justify-content-between'>
                <MDBBtn
                    onClick={gotousestate}
                    className='w-25 mt-5'>
                    go to usestate
                </MDBBtn>
                <MDBBtn
                    className='w-25'
                    color='secondary'
                    onClick={gotouseffect}>
                    go to useeffect
                </MDBBtn>
                <MDBBtn
                    className='w-25'
                    color='success'
                    onClick={gotousecontext}>
                    go to usecontext
                </MDBBtn>
                <MDBBtn
                    className='w-25'
                    color='danger'
                    onClick={gotoinputcnt} >
                    go to input-compo
                </MDBBtn>
                <MDBBtn
                    className='w-25'
                    color='warning'
                    onClick={gotohoc}>
                    go to hoc
                </MDBBtn>
                <MDBBtn
                    className='w-25'
                    color='info'
                    onClick={gotousereduce}>
                    go tousereducer
                </MDBBtn>
                <MDBBtn
                    className='text-dark w-25'
                    color='light'
                    onClick={gotouseref}>
                    go to Useref
                </MDBBtn>
                <MDBBtn
                    className='w-25'
                    color='dark'
                    onClick={gotocustom} >
                    go to customhook
                </MDBBtn>
                <MDBBtn
                    className='w-25'
                    color='link'
                    onClick={gotothemechanger}
                >  go to themechanger
                </MDBBtn>
                <MDBBtn
                    className='w-25'
                    onClick={gotoToDolist}>
                    go to to-do list
                </MDBBtn>
                <MDBBtn
                    className='w-25 mb-5'
                    color='secondary'
                    onClick={gotoApifetch}>
                    go to api
                </MDBBtn>
            </div>

        </>
    )
}

export default Navigation

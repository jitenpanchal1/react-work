import React, { useContext, useEffect, useState } from 'react'
import Data from './context'
import { MDBBtn } from 'mdb-react-ui-kit';

function Basicbutton() {
    const { Changebg } = useContext(Data)

    return (
        <div className='mt-5'>
            <MDBBtn
                className='bg-success'
                rounded
                color='warning'
                onClick={Changebg}>
                click to change
            </MDBBtn>
        </div>
    )
}

export default React.memo(Basicbutton)

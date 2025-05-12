import React, { useContext, useEffect, useState } from 'react'
import Data from './context'
import { MDBBtn } from 'mdb-react-ui-kit';

function Basicbutton() {
    const { Changebg } = useContext(Data)

    return (
        <div className=''>
            <MDBBtn
                className='bg-success shadow-0'
                rounded
                color='warning'
                onClick={Changebg}>
                click to change the theme
            </MDBBtn>
        </div>
    )
}

export default React.memo(Basicbutton)

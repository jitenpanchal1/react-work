import React from 'react'
import ustomhook from './Customhook'
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Cushcompo() {

    const int = ustomhook()

    return (

        <>
            <div className={`text-center  pt-5  h-100`}>
                <div>
                    <h1>
                        when we have to use reapited logic,stste,function etc at tha
                    </h1>
                </div>
                <div className='my-5'>
                    <h1>
                        this is my count  {int.count}
                    </h1>
                </div>
                <div>
                    <MDBBtn
                        className='shadow-0'
                        color='warning'
                        onClick={int.Hndle} >
                        clickme to update
                    </MDBBtn>
                </div>
            </div>
        </>

    )
}

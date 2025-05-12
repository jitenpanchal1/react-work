import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import Hoccompo from './Hoccompo'


function Seehoccompo({ count, Add }) {

    return (
        <>
            <div className={` text-center pt-5  h-100`}>
                <div>
                    <h1>This is a basic exmple of <b>High order component</b></h1>
                    <h3>when we hav use any one functionality again and again that time we use hoc compo</h3>
                </div>
                <div className='my-5'>
                    <h1> this is my count : {count}</h1>
                </div>
                <div>
                    <MDBBtn
                        outline
                        color='danger'
                        onClick={Add}>
                        click to add
                    </MDBBtn>
                </div>
            </div>
        </>
    )
}

export default Hoccompo(Seehoccompo)

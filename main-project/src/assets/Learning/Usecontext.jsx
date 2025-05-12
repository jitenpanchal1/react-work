import React, { useContext } from 'react'
import Data from './context'
import { MDBBtn } from 'mdb-react-ui-kit';

function Usecontext() {

    const { color, context, Update } = useContext(Data)
    return (
        <>
            <div className={`text-center pt-5 h-100`}>
                <div className=''>
                    <h1>
                        When we want to share data like a component, value, or function across components without passing it manually through props at each level, we use the useContext hook.
                    </h1>
                </div>
                <div className='my-5'>
                    <h1>This is the simple example of useContext</h1>
                </div>
                <div>
                    <h1>This is my count : {context}</h1>
                </div>
                <div>
                    <MDBBtn
                        onClick={Update}
                        rounded
                        color='warning'
                        className='my-5 shadow-0'>
                        Click to add count
                    </MDBBtn>
                </div>
            </div>

        </>
    )
}

export default Usecontext

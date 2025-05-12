import React, { useContext, useReducer } from 'react'
import Data from './context'
import { MDBBtn } from 'mdb-react-ui-kit';

const init = 0

function reducer(state, action) {
    switch (action.type) {
        case "plus": return state + 1
        case "minus": return state - 1
        case "multi": return state * 2
        default: return state = 0
    }
}

export default function Usereducer() {

    const [count, dispatch] = useReducer(reducer, init)

    return (
        <>
            <div className={`text-center mt-5 h-100`}>
                <div>
                    <h1>
                        This hook is alternative of usestate to use this hook we can store multiple functionality in one function.
                    </h1>
                </div>
                <div className='my-5'>
                    <h1>
                        this is my count : {count}
                    </h1>
                </div>
                <div>
                    <MDBBtn
                        className='shadow-0'
                        rounded
                        onClick={() => dispatch({ type: "plus" })}>
                        click to increas
                    </MDBBtn>
                    <MDBBtn
                        rounded
                        color='success'
                        className='my-5 shadow-0'
                        onClick={() => dispatch({ type: "minus" })}>
                        click to decrease
                    </MDBBtn>
                    <MDBBtn
                        className='shadow-0'
                        rounded
                        color='danger'
                        onClick={() => dispatch({ type: "multi" })}>
                        click to multiplication
                    </MDBBtn>
                </div>
            </div >
        </>
    )
}

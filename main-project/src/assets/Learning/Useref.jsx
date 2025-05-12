import React, { useCallback, useContext, useRef, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import Data from './context';

export default function Useref() {

    const name = useRef(null)
    const [show, setshow] = useState()
    const { color } = useContext(Data)

    const handle = () => {
        name.current.value()
    }

    const submit = (e) => {
        e.preventDefault()
        if (name.current.value.trim()) {
            setshow(name.current.value)
        }
    }

    return (
        <>
            <div className={`text-center h-100`}>
                <div className='mt-5'>
                    <h1>This is example of useRef.</h1>
                    <h2 className='mt-3'>useref use for handle the input this is uncontrolled compo that manage by DOM.</h2>
                </div>
                <div className='my-5'>
                    <label className='me-2' htmlFor="name">Enter name</label>
                    <input
                        ref={name}
                        onChange={handle}
                        id='name'
                    />
                </div>
                <MDBBtn
                    className='shadow-0'
                    color='dark'
                    onClick={submit}>
                    submit the name
                </MDBBtn>
                <div className='mt-5'>
                    <h1>This is you write in  Name : {show}</h1>
                </div>
            </div>
        </>
    )
}

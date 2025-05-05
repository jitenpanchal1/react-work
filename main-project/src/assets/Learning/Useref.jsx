import React, { useRef } from 'react'

export default function Useref() {

    const name = useRef(null)

    const handle = () => {
        name.current.value()
    }

    return (
        <>
            <div className=' text-center'>
                <div>
                    <h1>This is example of useRef.</h1>
                    <h2 className='mt-3'>useref use for handle the input this is uncontrolled compo that manage by DOM.</h2>
                </div>
                <div className='mt-5'>
                    <label className='me-2' htmlFor="name">Enter name</label>
                    <input
                        ref={name}
                        onChange={handle}
                        id='name'
                    />
                </div>
            </div>
        </>
    )
}

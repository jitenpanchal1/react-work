import React, { useCallback, useContext, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import "../Css/App.css"
import Data from './context';
import Basicbutton from './Basicbutton';



export default function Usestate() {

    const [count, setcount] = useState(0)
    const { color } = useContext(Data)

    const Update = useCallback(() => {
        setcount(count + 1)
    }, [count])

    return (
        <>
            <div className={` text-center h-100`}>
                <div className='mt-5'>
                    <h1>Usestate is very comon hook that use every where and easy to use</h1>
                </div>
                <div className='my-5'>
                    <h1>In react state is the store the value and properties of object</h1>
                </div>
                <div>
                    <h2>below example is usestate example.</h2>
                </div>
                <div>
                    <h2>this is my Count : {count}</h2>
                </div>
                <div>
                    <MDBBtn
                        onClick={Update}
                        rounded
                        className='my-5 bg-secondary shadow-0'
                        color='succes'>
                        click to update count
                    </MDBBtn>
                </div>
                <div>
                    <h2>here we make a state that update the count on click with react js its very simple to write and understand</h2>
                </div>
            </div>
        </>
    )
}


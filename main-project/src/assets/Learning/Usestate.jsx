import React, { useContext, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import "../Css/App.css"
import Themechanger from './Themechanger';



export default function Usestate() {
    // console.log("usastate coming")

    const [count, setcount] = useState(0)

    const Update = () => {
        setcount(count + 1)
    }

    return (
        <>
            <div className={`container`}>
                <div>
                    <h1>Usestate is very comon hook that use every where and easy to use</h1>
                </div>
                <div>
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
                        className='mx-2'
                        color='secondary'>
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


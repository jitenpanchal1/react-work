import React, { useContext } from 'react'
import Data from './context'


export default function Usecontext() {

    const { context, Update } = useContext(Data)

    return (
        <>
            <div className='container'>
                <div>
                    <h1>this is usecontext example</h1>
                </div>
                <div>
                    <h1>when we hav to use other components state valu to another compo at that situation we hav to use useContext.</h1>
                </div>
                <div>
                    <h1>this is my count : {context}</h1>
                </div>
                <div>
                    <button
                        onClick={Update}>
                        click the button
                    </button>
                </div>
            </div>
        </>
    )
}

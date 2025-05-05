import React, { useContext } from 'react'
import Data from './context'


export default function Usecontext() {

    const { context, Update } = useContext(Data)

    return (
        <>
            <div >
                <div>
                    <h1>this is usecontext example</h1>
                </div>
                <div className='my-5'>
                    <h1>When we have to use any state value through parent compo to our grand nested child we use usecontext without using props.</h1>
                </div>
                <div>
                    <h1>this is my count : {context}</h1>
                </div>
                <div>
                    <button
                        className='my-5'
                        onClick={Update}>
                        click the button
                    </button>
                </div>
            </div>
        </>
    )
}

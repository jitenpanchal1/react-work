import React, { useContext } from 'react'
import Data from '../Learning/context'

export default function Contact() {

    const { color } = useContext(Data)
    return (
        <>
            <div className={` ${color} contact  text-center`}>
                <div>
                    <h1>my name is jeeten</h1>
                </div>
                <div>
                    <h2>mobile number</h2>
                    <h2>this is my email id</h2>
                    <h2>this is my linkid</h2>
                    <h2> insta acount</h2>
                </div>
            </div>
        </>
    )
}

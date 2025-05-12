import React, { useContext } from 'react'
import Data from '../Learning/context'

export default function Home() {

    const { color } = useContext(Data)

    return (
        <>
            <div className={`${color} text-center Home`} >
                <div>
                    <h1>this is home</h1>
                </div>
            </div >
        </>
    )
}

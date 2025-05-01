import React, { useContext } from 'react'
import Data from './context'

export default function Basicbutton() {
    const { Changebg } = useContext(Data)
    return (
        <div>
            <button
                onClick={Changebg}>
                changetheme
            </button>
        </div>
    )
}
